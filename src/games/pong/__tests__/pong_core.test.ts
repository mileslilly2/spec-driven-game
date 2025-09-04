import { describe, it, expect, vi } from 'vitest';
import { createPongState, VIEWPORT_W, VIEWPORT_H } from '../state';
import { render } from '../render';

function createMockCtx(): CanvasRenderingContext2D {
  return {
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    setLineDash: vi.fn(),
    strokeStyle: '',
  } as unknown as CanvasRenderingContext2D;
}

describe('pong_core', () => {
  it('createPongState returns default scores=0,0', () => {
    const state = createPongState();
    expect(state.scores).toEqual([0, 0]);
  });

  it('render draws midline', () => {
    const ctx = createMockCtx();
    render(ctx, createPongState());
    const mid = VIEWPORT_W / 2;
    expect(ctx.moveTo).toHaveBeenCalledWith(mid, 0);
    expect(ctx.lineTo).toHaveBeenCalledWith(mid, VIEWPORT_H);
    expect(ctx.stroke).toHaveBeenCalled();
  });
});
