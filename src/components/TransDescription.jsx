import React from "react";
import { useTranslation } from "react-i18next";

export const TransDescription = ({ children }) => {
  const { i18n } = useTranslation();
  const isKo = i18n.language === "ko";

  return children(isKo);
};