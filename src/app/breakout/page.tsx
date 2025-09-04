
'use client';
import { CanvasSurface } from '@engine/CanvasSurface';
import { useCallback } from 'react';

export default function BreakoutPage() {
  const onFrame = useCallback((ctx: CanvasRenderingContext2D, dtMs: number) => {
    const { width, height } = ctx.canvas;
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = '#111';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = '#fff';
    ctx.fillText('Breakout placeholder - implement tickets', 24, 24);
  }, []);

  return (
    <main style={{padding:12}}>
      <h1>Breakout</h1>
      <CanvasSurface width={480} height={320} onFrame={onFrame} />
    </main>
  );
}
