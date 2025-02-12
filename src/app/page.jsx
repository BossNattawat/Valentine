"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import arr from "./data/text";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [yesBtnSize, setYesBtnSize] = useState(20);
  const [sheSaidYes, setSheSaidYes] = useState(false);

  function next() {
    setIndex((index + 1) % arr.length);
    setYesBtnSize((yesBtnSize) => yesBtnSize + 25);
  }

  return (
    <div className="w-auto h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-8 h-screen">
        {sheSaidYes ? (
          <>
            <Image
              unoptimized
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="gif"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h1 className="text-4xl font-bold text-center">Ok Yayyyyy!!!</h1>
          </>
        ) : (
          <>
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
            <div className="flex flex-wrap gap-5 justify-center items-center w-auto h-auto">
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
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textAlign: "center",
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
