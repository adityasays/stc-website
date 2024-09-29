"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function AboveTheFold() {
  const words = ["create", "develop", "innovate", "learn"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord as string);
          return words[(currentIndex + 1) % words.length];
        });
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const x = document.querySelector("#ctp") as HTMLElement;
    x.style.width = x.children[0]?.getBoundingClientRect().width + "px";
  }, [currentWord]);

  // TODO - remove css classes and add tailwind classes here
  return (
    <section>
      <div className="flex min-h-96 w-full select-none flex-col items-center justify-center gap-y-4 text-5xl font-medium sm:text-6xl md:min-h-[420px] md:gap-y-2 lg:text-7xl">
        <p className="text-sm text-neutral-500 sm:text-lg">
          SMVDU Tech Community
        </p>
        <div className="w-fit pb-3 text-center ease-in-out flex items-center justify-center">
          <p>together, <br />
            we can
            <span
              id="ctp"
              className={`ml-3 text-yellow-300`}
              style={{
                display: "inline-block",
                position: "relative",
                textAlign: "center",
                transition: "all 200ms cubic-bezier(0.2, 0.0, 0, 1.0)",
                visibility: "hidden"
              }}
            > {words[0]}
              <span
                style={{
                  display: "block",
                  position: "absolute",
                  translate: "0 -100%",
                  visibility: "visible"
                }}
                className={`transition-all duration-200 delay-100 ${fade ? "opacity-100" : "opacity-0"}`}
              >
                {currentWord}
              </span>
            </span>
          </p>
        </div>
        <Button
          asChild
          className="rounded-full bg-yellow-300 text-black hover:bg-yellow-500"
          size={"default"}
        >
          <Link href={"/join"}>
            Join Now <FaArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
