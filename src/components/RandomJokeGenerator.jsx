import React, { useEffect, useState } from "react";
import axios from "axios";
import thinkEmoji from "../assets/thinking.png";
import laughEmoji from "../assets/laughing.png";

export const RandomJokeGenerator = () => {
  //States
  const [joke, setJoke] = useState();
  const [deliveryIsVisible, setDeliveryIsVisible] = useState(false);

  const fetchJoke = async () => {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?format=json"
    );
    setJoke(response.data);
    setDeliveryIsVisible(false);
  };

  const handleDeliveryVisbility = () => {
    setDeliveryIsVisible(true);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div className="border w-204 min-h-72 px-10 py-3 my-40 bg-white rounded-xl">
        <h1 className="font-bold text-6xl text-center text-yellow-500 font-nerko my-2 ">
          Joke of the Day
        </h1>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl font-serif my-2">
            Category : <span className="font-thin">{`${joke?.category}`}</span>
          </h2>
          <button
            onClick={fetchJoke}
            className="text-xl font-bold font-sans tracking-wide text-yellow-500 hover:bg-yellow-500 hover:text-white border px-3 py-1 active:scale-95 rounded-lg my-5 focus:outline-none"
          >
            New Joke
          </button>
        </div>
        <div className="font-mono text-wrap">
          {joke && joke.type === "single" ? (
            <>
              <p className="my-5 text-center text-wrap text-3xl">{`${joke.joke}`}</p>
            </>
          ) : (
            <>
              <div className="flex flex-col text-3xl">
                <p className="my-5 text-center text-wrap">{`${joke?.setup}`}</p>
                {deliveryIsVisible && (
                  <>
                    <div className="flex flex-col my-5 justify-center">
                      <p className=" text-center text-xl text-wrap">
                        {`${joke?.delivery}`}
                      </p>
                      <div className="flex justify-center">
                        <img
                          src={laughEmoji}
                          alt="Laughing Emoji"
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {joke && joke.type === "twopart" && deliveryIsVisible === false && (
            <>
              <div className="flex justify-center">
                <button
                  onClick={handleDeliveryVisbility}
                  className="border text-xl px-3 py-1 active:scale-95 rounded-lg my-5 hover:bg-yellow-500"
                >
                  <img
                    src={thinkEmoji}
                    alt="Thinking emoji"
                    className="w-10 h-10"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
