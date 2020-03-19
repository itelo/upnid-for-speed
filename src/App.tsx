import React from "react";
import useKeyboard from "./useKeyboard";
import { motion } from "framer-motion";
// import audiofile from "./assets/upnid-music.mp3";

type CarPositions = "center" | "left" | "right";

const matrix = [
  [
    {
      x: -0.2,
      y: -0.2,
      scale: 0.55
    },
    {
      x: 0,
      y: -0.2,
      scale: 0.55
    },
    {
      x: 0.2,
      y: -0.2,
      scale: 0.55
    }
  ],
  [
    {
      x: -0.3,
      y: 0,
      scale: 1
    },
    {
      x: 0,
      y: 0,
      scale: 1
    },
    {
      x: 0.3,
      y: 0,
      scale: 1
    }
  ]
];

const getNewPos = (
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
      if (currentY - 1 > minPos) {
        return [currentX, minPos];
      } else {
        return [currentX, currentY - 1];
      }
    case dir === "up":
      if (currentY + 1 > maxPos) {
        return [currentX, maxPos];
      } else {
        return [currentX, currentY + 1];
      }
  }
  return [1, 1];
};

function App() {
  const [carPosition, setT] = React.useState([1, 1] as [number, number]);
  const size =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;

  const handleKeypress = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "a" || e.key === "ArrowLeft") {
        setT(getNewPos(carPosition, "left"));
      }

      if (e.key === "d" || e.key === "ArrowRight") {
        setT(getNewPos(carPosition, "right"));
      }

      if (e.key === "s" || e.key === "ArrowDown") {
        setT(getNewPos(carPosition, "down"));
      }

      if (e.key === "w" || e.key === "ArrowUp") {
        setT(getNewPos(carPosition, "up"));
      }
      //   if (carPosition === "center") {
      //     setT("left");
      //   } else if (carPosition === "right") {
      //     setT("center");
      //   }
      // }

      // if (e.key === "d" || e.key === "ArrowRight") {
      //   if (carPosition === "center") {
      //     setT("right");
      //   } else if (carPosition === "left") {
      //     setT("center");
      //   }
      // }
    },
    [carPosition]
  );

  console.log(carPosition);

  useKeyboard({
    onKeypress: handleKeypress
  });

  // const variants = {
  //   center: {
  //     translateX: 0
  //   },
  //   left: {
  //     translateX: -size * 0.3
  //   },
  //   right: {
  //     translateX: size * 0.3
  //   }
  // };

  return (
    <div>
      <audio src="https://vgmdownloads.com/soundtracks/need-for-speed-underground-2/auvmwrwi/01-snoop%20dogg%20ft%20the%20doors%20-%20riders%20on%20the%20storm%28fredwreck%20remix%29-ost-2004-djn.mp3" autoPlay>
         <p>If you are reading this, it is because your browser does not support the audio element.     </p>
      </audio>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", height: size, width: size }}>
          <img
            alt="gif of road"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/49e38bac-5a6c-4505-b7c7-742c0514bb69/CENARIO_anima.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAT73L2G45B5Q2LJUK%2F20200318%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20200318T200332Z&amp;X-Amz-Expires=86400&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcMNSnP85e%2BZNugm6s3ikRntWqhY6edNiJk8Cf8CDjLAiEA1%2BzvMj7xUmdjmYWC%2FWOVvtUROq6yuh2U%2BwsOUQNTBbEqvQMIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDFFC%2F6wfKuzvVcNoeyqRA%2BqbLjHO6QRu7N01zRUnZ6YFleXjymLSHWyUDOF9FduPC%2F9%2FnGdjzdAMr3bUp8EtCuPzL5NiMuUWAEWK%2Fv%2FtpOZcl7zaMkeAJuq3d2gD51SVBvdAyrtXfrmOQuaBUSCW%2FlQif6gePcwPHu49oDRrR0jvWoRTrg5%2FGLYIvvseESvzpU8Rx1h5p20keg8LCp6%2BtOTwsBI91e68Nouh4mTq3r5Q%2BjHRANfxhWxdgFvthORQCWFFymqcRXnR52PQyQw%2FcSwkI64IHPJwNR4mEIroYcqjIMa0rzeiO8PrcTQcAWPVTnyUq%2F2cdhaugQXvPlOzl1Voim51%2FYMx7sCLlboDQAMCGAV4ZxVpRRrm3JGThK1EDPWKol5SSiZaYvRzbRyOKehV1i5FOMLkd8Yauwf%2Bwwfj02zp%2B4WwaU%2BFu0d9%2FNeL%2FNo6Y5HyTwHZCfQxh3YlFR6JXlf2CDO5OHvzVLEs0nNLoDkf11RaLurjcHWDjChwFYxkLZVcGw2JwMTHbgHcn578eZItKiApKadDGkTV0A6xMP%2FvyfMFOusBJm8ejFjM0L8ogZqJrKvO9lMVXcJDjeq%2FLivll1xbQ3ILyXU5Z63u%2BdobBqQBrxD0eNQvAZLbX31AI3xt6i3FIu2MZPQAE7tOmQIJIATJ3imQ4GRzzm19HtLurq8PUSrY96KBE29uIMJaf6%2FLs7gfYuY9LOSCE7BTlhfhW4YLPAMcQA8Qf7MAztf3R4UdbNFytIi%2FaC%2FrKp6L7y0cG8E3FwcrJ2hFCvLqteWEzpn5KK2DKfThPBTZ6YAAKV9UYHE%2BG%2FFfSjfsQ3v8%2F2yZvTab9wWvBObWZjsEMwa96VqnOti5GjIBQ3IvYUxHdg%3D%3D&amp;X-Amz-Signature=5f2bfea786176d82b676c1977689fcd06b55f792240b8800be547dce477c0ac5&amp;X-Amz-SignedHeaders=host"
            style={{
              height: size,
              width: size
            }}
          />
          <motion.img
            alt="car"
            // variants={variants}
            animate={{
              translateX: matrix[carPosition[1]][carPosition[0]].x * size,
              translateY: matrix[carPosition[1]][carPosition[0]].y * size,
              scale: matrix[carPosition[1]][carPosition[0]].scale
            }}
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff05e46f1-8333-425c-a610-cc1e6cdda6d1%2FCARRO.png?table=block&id=50eaa5d5-bb41-486e-9638-efcdf1b5b584&width=1320&cache=v2"
            style={{
              top: size * 0.7,
              left: (size - size * 0.28) / 2 - size * 0.02,
              height: size * 0.28,
              width: size * 0.28,
              position: "absolute"
            }}
          />
        </div>
      </div>
       
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 12
        }}
      >
        <button
          style={{
            width: "40vw"
          }}
          onClick={() => setT(getNewPos(carPosition, "left"))}
        >
          left
        </button>
        <button
          style={{
            width: "40vw"
          }}
          onClick={() => setT(getNewPos(carPosition, "right"))}
        >
          right
        </button>
      </div>
    </div>
  );
}

export default App;
