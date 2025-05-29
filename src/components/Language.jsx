import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import GlobeIcon from "../assets/images/globe.svg?react";

export const Language = () => {
  const { t, i18n } = useTranslation();
  const [bright, setBright] = useState(false);

  const isKo = i18n.language === "ko";

  const changeLanguage = () => i18n.changeLanguage(isKo ? "en" : "ko");

  useEffect(() => {
    setBright(true);
    const timeoutId = setTimeout(() => {
      setBright(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isKo]);

  return (
    <button
      className={`z-20 fixed bottom-8 lg:bottom-16 right-68 lg:right-74 flex opacity-40 transition-all
      duration-500 ease-in-out flex-col gap-y-[6px] h-18 w-18 text-black font-medium text-sm
     bg-gray-100 p-[10px] rounded-3xl shadow-lg hover:opacity-100 cursor-pointer items-center justify-center
      ${bright && "opacity-100"}`}
      onClick={changeLanguage}
    >
      <GlobeIcon className={`min-w-5 min-h-5 fill-black`} />
      {isKo ? "EN" : "KO"}
    </button>
  );
};
