
'use client';
import React, { useRef } from 'react';
import { useCanvasLoop } from './useCanvasLoop';

export function CanvasSurface({
  width,
  height,
  onFrame,
  className,
}: {
  width: number;
  height: number;
  onFrame: (ctx: CanvasRenderingContext2D, dtMs: number) => void;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useCanvasLoop(ref, onFrame);
  return (
    <canvas
      ref={ref}
      className={className}
      style={{ width, height, border: '1px solid #333', background: '#000' }}
    />
  );
}
