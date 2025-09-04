export const VIEWPORT_W = 480;
export const VIEWPORT_H = 320;

export interface PongState {
  scores: [number, number];
}

export function createPongState(): PongState {
  return {
    scores: [0, 0],
  };
}
