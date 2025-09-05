// Pong game state and constants

// viewport size constants – exported for use by renderer and tests
export const VIEWPORT_W = 480;
export const VIEWPORT_H = 320;

// Basic types used for the Pong game.  These are intentionally minimal and
// will be expanded by later tickets as the game logic grows.
export interface Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export interface PongState {
  leftPaddle: Paddle;
  rightPaddle: Paddle;
  ball: Ball;
  /** player scores: [left, right] */
  score: [number, number];
}

/**
 * createPongState
 *
 * Returns the default state for a Pong match.  Scores start at 0 for both
 * players; paddles and ball are positioned in their typical starting spots.
 */
export function createPongState(): PongState {
  const paddleW = 10;
  const paddleH = 60;

  return {
    leftPaddle: {
      x: 10,
      y: (VIEWPORT_H - paddleH) / 2,
      width: paddleW,
      height: paddleH,
    },
    rightPaddle: {
      x: VIEWPORT_W - 10 - paddleW,
      y: (VIEWPORT_H - paddleH) / 2,
      width: paddleW,
      height: paddleH,
    },
    ball: {
      x: VIEWPORT_W / 2,
      y: VIEWPORT_H / 2,
      vx: 0,
      vy: 0,
      radius: 5,
    },
    score: [0, 0],
  };
}

