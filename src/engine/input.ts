
export type Input = {
  isDown: (key: string) => boolean;
  pointerX: number | null;
  dispose: () => void;
};

export function createInput(win: Window = window): Input {
  const down = new Set<string>();
  const onKeyDown = (e: KeyboardEvent) => down.add(e.key);
  const onKeyUp = (e: KeyboardEvent) => down.delete(e.key);
  let pointerX: number | null = null;
  const onMouseMove = (e: MouseEvent) => {
    pointerX = e.clientX;
  };
  win.addEventListener('keydown', onKeyDown);
  win.addEventListener('keyup', onKeyUp);
  win.addEventListener('mousemove', onMouseMove);
  return {
    isDown: (k: string) => down.has(k),
    get pointerX() { return pointerX; },
    dispose: () => {
      win.removeEventListener('keydown', onKeyDown);
      win.removeEventListener('keyup', onKeyUp);
      win.removeEventListener('mousemove', onMouseMove);
      down.clear();
    }
  };
}
