// Pong rendering logic using Canvas2D
import { PongState, VIEWPORT_W, VIEWPORT_H } from './state';

/**
 * Render the current Pong state to the provided CanvasRenderingContext2D.
 * For the core ticket we simply clear the screen and draw the midline to
 * establish the playfield.  Future tickets will extend this renderer to draw
 * paddles, ball, and scores.
 */
export function render(ctx: CanvasRenderingContext2D, state: PongState) {
  // ensure canvas matches expected viewport
  ctx.canvas.width = VIEWPORT_W;
  ctx.canvas.height = VIEWPORT_H;

  // clear background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, VIEWPORT_W, VIEWPORT_H);

  // draw midline dashed
  ctx.strokeStyle = '#fff';
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(VIEWPORT_W / 2, 0);
  ctx.lineTo(VIEWPORT_W / 2, VIEWPORT_H);
  ctx.stroke();

  // state is currently unused but retained for future features
  void state;
}

