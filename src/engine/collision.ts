
export type Rect = { x:number; y:number; w:number; h:number };
export type Circle = { x:number; y:number; r:number };

export function rectsOverlap(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

export function clamp(v:number, min:number, max:number): number {
  return Math.max(min, Math.min(max, v));
}

// Returns unit normal vector or null
export function circleRectCollision(c: Circle, r: Rect): { nx:number; ny:number } | null {
  const cx = clamp(c.x, r.x, r.x + r.w);
  const cy = clamp(c.y, r.y, r.y + r.h);
  const dx = c.x - cx;
  const dy = c.y - cy;
  const dist2 = dx*dx + dy*dy;
  if (dist2 > c.r * c.r) return null;
  const len = Math.hypot(dx, dy) || 1;
  return { nx: dx/len, ny: dy/len };
}

export function reflect(v: {x:number;y:number}, n: {nx:number;ny:number}) {
  const dot = v.x*n.nx + v.y*n.ny;
  return { x: v.x - 2*dot*n.nx, y: v.y - 2*dot*n.ny };
}
