function createBall(x, y, r, ctx, color) {
  return {
    x,
    y,
    r,
    vx: 10,
    vy: -10,
    ctx,
    color,

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    },
  };
}

export default createBall;
