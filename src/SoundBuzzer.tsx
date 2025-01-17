import React, { useState, useRef } from "react";

// import noGodSound from "/nodebox/public/noGod.mp3";

const SoundBuzzer = () => {
  const [isNoGodActive, setIsNoGodActive] = useState(false);
  const [isWahWahActive, setIsWahWahActive] = useState(false);
  const [busActive, setbusActive] = useState(false);

  const noGodAudioRef = useRef(null);
  const wahWahAudioRef = useRef(null);
  const busRef = useRef(null);

  const handleNoGodClick = () => {
    setIsNoGodActive(true);
    if (noGodAudioRef.current) {
      //@ts-ignore
      noGodAudioRef.current.currentTime = 0;
      //@ts-ignore
      noGodAudioRef.current.play();
    }
    setTimeout(() => {
      //@ts-ignore
      noGodAudioRef.current.pause(); // Pause the audio
      //@ts-ignore
      noGodAudioRef.current.currentTime = 0; // Reset to the beginning
      setIsNoGodActive(false); // Reset button state
    }, 3000);
  };

  const handleWahWahClick = () => {
    setIsWahWahActive(true);
    if (wahWahAudioRef.current) {
      //@ts-ignore
      wahWahAudioRef.current.currentTime = 0;
      //@ts-ignore
      wahWahAudioRef.current.play();
    }
    setTimeout(() => {
      //@ts-ignore
      wahWahAudioRef.current.pause(); // Pause the audio
      //@ts-ignore
      wahWahAudioRef.current.currentTime = 0; // Reset to the beginning
      setIsWahWahActive(false); // Reset button state
    }, 3000); // 2000ms = 2 seconds
  };

  const handlebusinessClick = () => {
    setbusActive(true);
    if (busRef.current) {
      //@ts-ignore
      busRef.current.currentTime = 0;
      //@ts-ignore
      busRef.current.play();
    }
    setTimeout(() => {
      //@ts-ignore
      busRef.current.pause(); // Pause the audio
      //@ts-ignore
      busRef.current.currentTime = 2000; // Reset to the beginning
      setbusActive(false); // Reset button state
    }, 4000);
  };

  return (
    //@ts-ignore
    <div className="flex flex-col items-center gap-8 p-8">
      {/* @ts-ignore */}
      <img src="/img.png" alt="x" />
      {/* @ts-ignore */}
      <h2 className="text-2xl font-bold">Click the memes to play sounds! </h2>

      {/* Hidden audio elements */}
      {/* <audio ref={noGodAudioRef} src={noGodSound} /> */}
      {/* @ts-ignore */}
      <audio ref={noGodAudioRef} src="/noGod.mp3" />
      {/* @ts-ignore */}
      <audio ref={wahWahAudioRef} src="/wah.mp3" />
      {/* @ts-ignore */}
      <audio ref={busRef} src="/bus2.mp3" />
      {/* <audio ref={wahWahAudioRef} src={wahWahSound} /> */}

      {/* @ts-ignore */}
      <div className="flex flex-col gap-8 coll">
        {/* @ts-ignore */}
        <button
          onClick={handleNoGodClick}
          className={`transform transition-transform ${
            isNoGodActive ? "scale-95" : "hover:scale-105"
          }`}
        >
          {/* @ts-ignore */}
          <img
            src="https://i.pinimg.com/736x/cd/90/d2/cd90d227212cfc92a932c59accf38fba.jpg"
            alt="No God No"
            className="w-64 h-auto rounded-lg shadow-lg sz"
          />
          {/* @ts-ignore */}
        </button>

            {/* @ts-ignore */}
        <button
          onClick={handlebusinessClick}
          className={`transform transition-transform ${
            busActive ? "scale-95" : "hover:scale-105"
          }`}
        >
          {/* @ts-ignore */}
          <img
            src="https://i.pinimg.com/736x/ed/a5/23/eda5230d0f611d96775c9047c1c95591.jpg"
            alt="Wah Wah"
            className="w-64 h-auto rounded-lg shadow-lg sz"
          />
          {/* @ts-ignore */}
        </button>

            {/* @ts-ignore */}
        <button
          onClick={handleWahWahClick}
          className={`transform transition-transform ${
            isWahWahActive ? "scale-95" : "hover:scale-105"
          }`}
        >
          {/* @ts-ignore */}
          <img
            src="https://pbs.twimg.com/media/Evi4KjpXIAA-rwU.jpg"
            alt="Wah Wah"
            className="w-64 h-auto rounded-lg shadow-lg sz"
          />
          {/* @ts-ignore */}
        </button>
        {/* @ts-ignore */}
      </div>

            {/* @ts-ignore */}
      <p className="text-gray-600 mt-4">Click the memes to play sounds!</p>
      {/* @ts-ignore */}
    </div>
  );
};

export default SoundBuzzer;
