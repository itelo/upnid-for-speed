import React from "react";
import useKeyboard from "./useKeyboard";
import { motion } from "framer-motion";

type CarPositions = "center" | "left" | "right";

function App() {
  const [carPosition, setT] = React.useState("center" as CarPositions);
  const size =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;

  const handleKeypress = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "a" || e.key === "ArrowLeft") {
        if (carPosition === "center") {
          setT("left");
        } else if (carPosition === "right") {
          setT("center");
        }
      }

      if (e.key === "d" || e.key === "ArrowRight") {
        if (carPosition === "center") {
          setT("right");
        } else if (carPosition === "left") {
          setT("center");
        }
      }
    },
    [carPosition]
  );

  console.log(carPosition);

  useKeyboard({
    onKeypress: handleKeypress
  });

  const variants = {
    center: {
      translateX: 0
    },
    left: {
      translateX: -size * 0.3
    },
    right: {
      translateX: size * 0.3
    }
  };

  return (
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
          variants={variants}
          animate={carPosition}
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
  );
}

export default App;
