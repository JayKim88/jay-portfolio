import React, { useRef, useState, useEffect } from "react";

import forestSound from "../assets/audio/forest.mp3";
import Play from "../assets/images/play.svg?react";
import Pause from "../assets/images/pause.svg?react";
import Volume from "../assets/images/volume.svg?react";

const formatTime = (time) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [bright, setBright] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (event) => {
    const newTime = parseFloat(event.target.value);
    setProgress(newTime);
    audioRef.current.currentTime = newTime;
  };

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.warn("Autoplay blocked, waiting for user interaction");
        }
      }
    };

    playAudio();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(audioRef.current.currentTime);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  useEffect(() => {
    setBright(true);
    const timeoutId = setTimeout(() => {
      setBright(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isPlaying]);

  return (
    <div
      className={`z-20 fixed bottom-8 lg:bottom-16 right-6 flex opacity-40 transition-all
      duration-500 ease-in-out flex-col gap-y-1
     bg-gray-100 py-3 px-4 rounded-3xl shadow-lg hover:opacity-100 ${
       bright && "opacity-100"
     }`}
    >
      <audio ref={audioRef} src={forestSound} />
      <div className="text-black font-medium">Forest Sound ᨒ ོ</div>
      <div className="flex items-center justify-between gap-x-1.5">
        <button onClick={handlePlay} className="p-0 rounded-full">
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
        <p className="text-sm font-semibold text-gray-800 min-w-[90px] flex justify-end">
          {formatTime(progress)} / {formatTime(duration)}
        </p>
        <input
          type="range"
          min="0"
          max={duration || 1}
          step="0.1"
          value={progress}
          onChange={handleSeek}
          className="w-20 h-1 bg-gray-300 rounded-lg appearance-none 
          cursor-pointer progress-range"
        />
        <div className="relative group hidden lg:flex items-center">
          <Volume className="w-5 h-5 text-gray-700 cursor-pointer" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="absolute right-[0px] top-[-20px] w-10 h-1 bg-gray-300 
          rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 border-2 volume-range"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
