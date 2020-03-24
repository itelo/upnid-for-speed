import {
  getRandomInt,
  generateEmpty,
  generateNitroOrRock,
  generateRoad,
  getNewPos
} from "./utils";

describe("Game utils", () => {
  it("getRandomInt return in range 0 - 10", () => {
    const results = new Array(1000).fill(0).map(() => getRandomInt(0, 10));
    const hasAnyNumberOutOfRange = results.some(
      value => value < 0 && value > 10
    );
    expect(hasAnyNumberOutOfRange).toBeFalsy();
  });

  it("generateEmpty", () => {
    const possibleEmpty = generateEmpty(10);
    const empty = {
      y: null,
      key: "key_10"
    };
    expect(possibleEmpty).toEqual(expect.objectContaining(empty));
  });

  it("generateNitroOrRock", () => {
    const possibleNitroOrRock = generateNitroOrRock(10);
    const possiblesTypes = ['lightning', 'rock'];
    expect(possibleNitroOrRock.y).not.toBeLessThan(0);
    expect(possibleNitroOrRock.y).not.toBeGreaterThan(3);
    expect(possibleNitroOrRock.key).toBe('key_10');
    expect(possiblesTypes.includes(possibleNitroOrRock.type)).not.toBeFalsy()
  });

  it("generateRoad", () => {
    const road = generateRoad(20);

    expect(road).toHaveLength(20);
  });

  it("getNewPos [0, 0] - down", () => {
    const currentPos = [0, 0] as [number, number];
    const [x, y] = getNewPos(currentPos, "down");

    expect(x).toBe(0);
    expect(y).toBe(1);

    const [x1, y1] = getNewPos([x, y], "down");

    expect(x1).toBe(0);
    expect(y1).toBe(2);

    const [x2, y2] = getNewPos([x1, y1], "down");

    expect(x2).toBe(0);
    expect(y2).toBe(2);
  });

  it("getNewPos [0, 2] - up", () => {
    const currentPos = [0, 2] as [number, number];
    const [x, y] = getNewPos(currentPos, "up");

    expect(x).toBe(0);
    expect(y).toBe(1);

    const [x1, y1] = getNewPos([x, y], "up");

    expect(x1).toBe(0);
    expect(y1).toBe(0);

    const [x2, y2] = getNewPos([x1, y1], "up");

    expect(x2).toBe(0);
    expect(y2).toBe(0);
  });

  it("getNewPos [2, 0] - left", () => {
    const currentPos = [2, 0] as [number, number];
    const [x, y] = getNewPos(currentPos, "left");

    expect(x).toBe(1);
    expect(y).toBe(0);

    const [x1, y1] = getNewPos([x, y], "left");

    expect(x1).toBe(0);
    expect(y1).toBe(0);

    const [x2, y2] = getNewPos([x1, y1], "left");

    expect(x2).toBe(0);
    expect(y2).toBe(0);
  });

  it("getNewPos [0, 0] - right", () => {
    const currentPos = [0, 0] as [number, number];
    const [x, y] = getNewPos(currentPos, "right");

    expect(x).toBe(1);
    expect(y).toBe(0);

    const [x1, y1] = getNewPos([x, y], "right");

    expect(x1).toBe(2);
    expect(y1).toBe(0);

    const [x2, y2] = getNewPos([x1, y1], "right");

    expect(x2).toBe(2);
    expect(y2).toBe(0);
  });
});
