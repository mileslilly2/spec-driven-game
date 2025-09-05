
import { describe, it, expect } from 'vitest';
import { createPongState, VIEWPORT_W, VIEWPORT_H } from '../state';
import { render } from '../render';

// Minimal mock canvas context that records drawing operations. This allows
// us to assert that the renderer attempts to draw the midline.
class MockCtx {
  canvas = { width: VIEWPORT_W, height: VIEWPORT_H } as HTMLCanvasElement;
  ops: { name: string; args: any[] }[] = [];
  fillStyle = '';
  strokeStyle = '';

  setLineDash(args: number[]) { this.ops.push({ name: 'setLineDash', args }); }
  beginPath() { this.ops.push({ name: 'beginPath', args: [] }); }
  moveTo(x: number, y: number) { this.ops.push({ name: 'moveTo', args: [x, y] }); }
  lineTo(x: number, y: number) { this.ops.push({ name: 'lineTo', args: [x, y] }); }
  stroke() { this.ops.push({ name: 'stroke', args: [] }); }
  fillRect(x:number,y:number,w:number,h:number){ this.ops.push({name:'fillRect', args:[x,y,w,h]}); }
  clearRect(x:number,y:number,w:number,h:number){ this.ops.push({name:'clearRect', args:[x,y,w,h]}); }
}

describe('pong_core', () => {
  it('createPongState returns default scores=0,0', () => {
    const state = createPongState();
    expect(state.score).toEqual([0, 0]);
  });

  it('render draws midline', () => {
    const ctx = new MockCtx();
    const state = createPongState();
    render(ctx as unknown as CanvasRenderingContext2D, state);

    const moveIdx = ctx.ops.findIndex(
      (op) => op.name === 'moveTo' && op.args[0] === VIEWPORT_W / 2 && op.args[1] === 0,
    );
    const lineIdx = ctx.ops.findIndex(
      (op) => op.name === 'lineTo' && op.args[0] === VIEWPORT_W / 2 && op.args[1] === VIEWPORT_H,
    );
    expect(moveIdx).toBeGreaterThan(-1);
    expect(lineIdx).toBeGreaterThan(moveIdx);
  });
});
