import React, { useState, useEffect, ReactAnimation } from "react";

function Animation() {

  const { AnimateOnChange, HideUntilLoaded } = ReactAnimation;

  const Output = () => {
    const words = [
      "Raindrops on roses",
      "Whiskers on kittens",
      "Bright copper kettles",
      "Warm woolen mittens",
      "Brown paper packages tied up with strings",
      "These are a few of my favourite things",
      "Cream-colored ponies",
      "Crisp apple strudels",
      "Doorbells and sleigh bells",
      "Schnitzel with noodles",
      "Wild geese that fly with the moon on their wings",
      "These are a few of my favourite things",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (current === words.length - 1) {
          setCurrent(0);
        } else {
          setCurrent(current + 1);
        }
      }, 4000);
      return () => {
        clearInterval(interval);
      };
    });

    return (
      <div>
        <h1>
          <AnimateOnChange durationOut="1500">{words[current]}</AnimateOnChange>
        </h1>
      </div>
    );
  };
}

export default Animation;
