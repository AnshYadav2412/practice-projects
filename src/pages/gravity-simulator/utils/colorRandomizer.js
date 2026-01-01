function colorRandomizer() {
  const color = `rgba(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  },${Math.random() * 1})`;

  return color;
}

export default colorRandomizer;
