"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function AboveTheFold() {
  const words = ["create", "innovate", "develop", "learn"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord as string);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="flex min-h-96 w-full select-none flex-col items-center justify-center gap-y-4 text-5xl font-medium sm:text-6xl md:gap-y-2 lg:text-7xl">
        <p className="text-sm text-neutral-500 sm:text-lg">
          SMVDU Tech Community
        </p>
        <div className="w-fit pb-3 text-center transition-transform duration-700 ease-in-out">
          <p>together,</p>
          <p className="flex items-center justify-center transition-all duration-500">
            <span
              className="transition-all duration-500"
              style={{ marginRight: "10px" }}
            >
              we can
            </span>
            <span
              className={`text-yellow-300 transition-all duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
              style={{ display: "inline-block", textAlign: "center" }}
            >
              {currentWord}
            </span>
          </p>
        </div>
        <Button
          className="rounded-full bg-yellow-300 text-black hover:bg-yellow-500"
          size={"default"}
        >
          Join Now <FaArrowRight className="ml-2"/>
        </Button>
      </div>
    </section>
  );
}
