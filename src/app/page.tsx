
import Link from 'next/link';

export default function Page() {
  return (
    <main style={{padding:24}}>
      <h1>Spec-Driven Games</h1>
      <ul>
        <li><Link href="/pong">Pong</Link></li>
        <li><Link href="/breakout">Breakout</Link></li>
      </ul>
      <p>Run tickets via your agent, then come back to play here.</p>
    </main>
  );
}
