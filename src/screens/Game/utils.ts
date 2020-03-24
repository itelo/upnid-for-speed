export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateEmpty = (index: number) => ({
  y: null,
  key: `key_${index}`
});

export const generateNitroOrRock = (index: number) => ({
  y: getRandomInt(0, 2),
  key: `key_${index}`,
  type:
    getRandomInt(0, 1) === 0 ? "lightning" : ("rock" as "rock" | "lightning")
});

export const generateRoad = (size: number, probabilityOfAppearSomething = 5) =>
  new Array(size)
    .fill(0)
    .map((_, i) =>
      Math.random() * 10 > probabilityOfAppearSomething
        ? generateEmpty(i)
        : generateNitroOrRock(i)
    );

export const getNewPos = (
  currentPos: [number, number],
  dir: "left" | "right" | "up" | "down"
): [number, number] => {
  const minPos = 0;
  const maxPos = 2;
  const currentX = currentPos[0];
  const currentY = currentPos[1];
  switch (true) {
    case dir === "left":
      if (currentX - 1 < minPos) {
        return [minPos, currentY];
      } else {
        return [currentX - 1, currentY];
      }
    case dir === "right":
      if (currentX + 1 > maxPos) {
        return [maxPos, currentY];
      } else {
        return [currentX + 1, currentY];
      }
    case dir === "down":
      if (currentY + 1 > maxPos) {
        return [currentX, maxPos];
      } else {
        return [currentX, currentY + 1];
      }
    case dir === "up":
      if (currentY - 1 < minPos) {
        return [currentX, minPos];
      } else {
        return [currentX, currentY - 1];
      }
  }
  return [1, 1];
};


export const matrix = [
  [
    {
      x: -0.045,
      y: -0.3,
      scale: 0.18
    },
    {
      x: 0,
      y: -0.3,
      scale: 0.18
    },
    {
      x: 0.045,
      y: -0.3,
      scale: 0.18
    }
  ],
  [
    {
      x: -0.2,
      y: -0.1,
      scale: 0.55
    },
    {
      x: 0,
      y: -0.1,
      scale: 0.55
    },
    {
      x: 0.2,
      y: -0.1,
      scale: 0.55
    }
  ],
  [
    {
      x: -0.35,
      y: 0,
      scale: 1
    },
    {
      x: 0,
      y: 0,
      scale: 1
    },
    {
      x: 0.35,
      y: 0,
      scale: 1
    }
  ]
];