"use client";

import * as React from "react";
import { Button } from "../Button/Button";

import "./DadJokeGenerator.scss";

const API_URL = "https://icanhazdadjoke.com";

const fetchDadJoke = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  });

  return await data.json();
};

export const DadJokeGenerator = ({ className }) => {
  const [joke, setJoke] = React.useState(undefined);

  const onButtonClick = async () => {
    const response = await fetchDadJoke();
    setJoke(response.joke);
  };

  return (
    <div className={`joke-generator ${className}`}>
      {!joke && (
        <div className="joke-generator__content">
          <h2 className="joke-generator__title">
            Who wants to hear a Dad Joke?
          </h2>
          <Button onClick={onButtonClick} className="joke-generator__button">
            I do!
          </Button>
        </div>
      )}

      {joke && (
        <div className="joke-generator__content">
          <blockquote>{joke}</blockquote>
          <Button onClick={onButtonClick} className="joke-generator__button">
            Tell me another!
          </Button>
        </div>
      )}
    </div>
  );
};
