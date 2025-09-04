
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

const REQUIRED_KEYS = ['ticket_id','game','title','type','description','components','tests'];

function main() {
  const root = process.cwd();
  const ticketsDir = path.join(root, 'specs', 'tickets');
  const files = fs.readdirSync(ticketsDir).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));
  let ok = true;

  for (const file of files) {
    const full = path.join(ticketsDir, file);
    const raw = fs.readFileSync(full, 'utf8');
    let doc: any;
    try {
      doc = YAML.parse(raw);
    } catch (e) {
      console.error(`YAML parse error in ${file}:`, e);
      ok = false;
      continue;
    }

    for (const key of REQUIRED_KEYS) {
      if (!(key in doc)) {
        console.error(`Missing required key '${key}' in ${file}`);
        ok = false;
      }
    }

    // components existence check (parent dirs)
    if (Array.isArray(doc.components)) {
      for (const comp of doc.components) {
        const compPath = typeof comp === 'string' ? comp : comp.path;
        if (!compPath) {
          console.error(`Invalid component entry in ${file}:`, comp);
          ok = false;
          continue;
        }
        const dir = path.dirname(path.join(root, compPath));
        if (!fs.existsSync(dir)) {
          console.warn(`Directory will need to be created for: ${compPath}`);
        }
      }
    } else {
      console.error(`'components' must be an array in ${file}`);
      ok = false;
    }
  }

  if (!ok) {
    console.error('Validation failed.');
    process.exit(1);
  } else {
    console.log('All tickets validated.');
  }
}

main();
