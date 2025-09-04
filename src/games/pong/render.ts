import { VIEWPORT_W, VIEWPORT_H, PongState } from './state';

export function render(
  ctx: CanvasRenderingContext2D,
  _state: PongState,
): void {
  ctx.clearRect(0, 0, VIEWPORT_W, VIEWPORT_H);

  const midX = VIEWPORT_W / 2;
  ctx.strokeStyle = 'white';
  if (ctx.setLineDash) {
    ctx.setLineDash([5, 5]);
  }
  ctx.beginPath();
  ctx.moveTo(midX, 0);
  ctx.lineTo(midX, VIEWPORT_H);
  ctx.stroke();
  if (ctx.setLineDash) {
    ctx.setLineDash([]);
  }
}
