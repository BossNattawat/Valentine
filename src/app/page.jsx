"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const arr = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again?",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? :( You're breaking my heart",
  ];

  const [index, setIndex] = useState(0);
  const [yesBtnSize, setYesBtnSize] = useState(20);
  const [flex, setFlex] = useState("flex-row");
  const [sheSaidYes, setSheSaidYes] = useState(false);

  function next() {
    setIndex((index + 1) % arr.length);
    setYesBtnSize((yesBtnSize) => yesBtnSize + 15);
    if (yesBtnSize >= 95) {
      setFlex("flex-col");
    }
  }

  return (
    <>
      {sheSaidYes ? (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 h-screen">
            <Image
              unoptimized
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="gif"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h1 className="text-4xl font-bold text-center">Ok Yayyyyy!!!</h1>
          </div>
          <footer className="my-[20px]">
            <Link
              className="btn btn-accent text-white text-base rounded-xl"
              href="https://github.com/BossNattawat"
              target="blank"
            >
              Made with ❤️
            </Link>
          </footer>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 h-screen">
            <Image
              unoptimized
              src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="gif"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h1 className="text-4xl font-bold text-center">
              Will you be my Valentine?
            </h1>
            <div
              className={`flex ${flex} gap-5 justify-center items-center w-auto h-auto`}
            >
              <button
                id="yesBtn"
                style={{
                  fontSize: yesBtnSize,
                  padding: yesBtnSize / 2,
                  backgroundColor: "#e96d7b",
                  borderRadius: "0.5rem",
                  color: "#ffffff",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#cf606d")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#e96d7b")
                }
                onClick={() => setSheSaidYes(true)}
              >
                Yes
              </button>
              <button
                className="btn btn-primary text-white rounded-lg text-[20px] p-[10px]"
                onClick={() => next()}
              >
                {arr[index]}
              </button>
            </div>
          </div>
          <footer className="my-[20px]">
            <Link
              className="btn btn-accent text-white text-base rounded-xl"
              href="https://github.com/BossNattawat"
              target="blank"
            >
              Made with ❤️
            </Link>
          </footer>
        </div>
      )}
    </>
  );
}
