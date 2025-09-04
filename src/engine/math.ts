
export type Vec2 = { x:number; y:number };
export const add = (a:Vec2,b:Vec2):Vec2 => ({x:a.x+b.x, y:a.y+b.y});
export const scale = (v:Vec2,s:number):Vec2 => ({x:v.x*s, y:v.y*s});
export const dot = (a:Vec2,b:Vec2):number => a.x*b.x + a.y*b.y;
export const norm = (v:Vec2):Vec2 => {
  const len = Math.hypot(v.x, v.y) || 1;
  return { x: v.x/len, y: v.y/len };
};
export const randRange = (min:number,max:number)=> Math.random()*(max-min)+min;
export const sign = (n:number)=> (n<0?-1: n>0?1:0);
