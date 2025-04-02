import React, { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const BoldBtn = ({
  title,
  link,
  onClick,
  customStyle,
  fontWeight,
  imageUrls,
  videoUrl,
  codeBlock,
  refName,
  refNameStyle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return;
    if (isHovered) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [isHovered]);

  const modalAvailable = !!imageUrls?.length || !!videoUrl || !!codeBlock;

  return (
    <button
      className={`inline-block text-left text-main group/ref ${customStyle} ${
        onClick || link
          ? "cursor-pointer hover:text-yellow-300"
          : modalAvailable
          ? "hover:text-yellow-300"
          : ""
      }`}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
          return;
        }

        onClick?.();
      }}
      {...(modalAvailable && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
    >
      <div className="relative">
        <span className={`${fontWeight ? "font-" + fontWeight : "font-bold"}`}>
          {title}
        </span>
        {refName && (
          <span
            className={`absolute bottom-0 -left-1 opacity-0 translate-y-0 font-medium
                    text-xs transition-all duration-500 ease-in-out pointer-events-none 
                  group-hover/ref:opacity-100 min-w-max bg-main py-0.5 px-1.5 rounded-2xl 
                  group-hover/ref:-translate-y-6 group-hover/ref:text-black ${refNameStyle}`}
          >
            {"👇 " + refName?.[0].toUpperCase() + refName?.slice(1)}
          </span>
        )}
      </div>
      <div
        className={`flex flex-col gap-y-4 absolute left-1/2 transform -translate-x-1/2 
          mt-2 z-10 ${
            codeBlock ? "w-full max-w-[470px]" : "w-full max-w-[400px]"
          } max-h-[400px] overflow-y-auto text-main
          p-2 bg-white shadow-lg rounded-lg border-1 border-main transition-all 
          duration-300 ${
            isHovered
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-95"
          }`}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageUrls?.map((v, index) => (
          <img
            key={index}
            src={v}
            alt="Preview"
            className="w-full max-w-full h-auto rounded"
          />
        ))}
        {videoUrl && (
          <video ref={videoRef} width="400" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {codeBlock && (
          <div className="flex flex-col items-start bg-[#2f2f2f] w-fit">
            <div className="font-bold pl-[14.6px]">Code example</div>
            <SyntaxHighlighter
              language="typescript"
              style={materialDark}
              className="rounded-lg shadow-lg p-4 w-full"
              customStyle={{ fontSize: "12px" }}
            >
              {codeBlock}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </button>
  );
};
