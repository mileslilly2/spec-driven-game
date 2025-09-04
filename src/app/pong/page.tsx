
'use client';
import { CanvasSurface } from '@engine/CanvasSurface';
import { useState, useCallback } from 'react';

export default function PongPage() {
  const [running, setRunning] = useState(true);

  const onFrame = useCallback((ctx: CanvasRenderingContext2D, dtMs: number) => {
    // Placeholder render loop; replaced by pong tickets.
    const { width, height } = ctx.canvas;
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = '#111';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = '#fff';
    ctx.fillText('Pong placeholder - implement tickets', 24, 24);
  }, []);

  return (
    <main style={{padding:12}}>
      <h1>Pong</h1>
      <CanvasSurface width={480} height={320} onFrame={onFrame} />
      <button onClick={()=>setRunning(!running)} style={{marginTop:12}}>
        {running ? 'Pause' : 'Resume'}
      </button>
    </main>
  );
}
