function createBall(x, y, r, ctx, color) {
  return {
    x,
    y,
    r,
    vx: Math.random() * 80 - 40,
    vy: Math.random() * -40,
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
