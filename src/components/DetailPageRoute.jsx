import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { DetailPage } from "./DetailPage";
import { experiences, projects } from "../constants/data";

export const DetailPageRoute = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { subTitle } = location.state || {};

  const allItems = [...experiences, ...projects];

  useEffect(() => {
    if (subTitle) {
      const subTitleElement = document.getElementById(subTitle);
      const targetYposition =
        subTitleElement.getBoundingClientRect().top + window.scrollY - 220;

      window.scrollTo({ top: targetYposition, behavior: "instant" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!title) {
    navigate("/");
    return null;
  }

  const decodedTitle = decodeURIComponent(title);
  const item = allItems.find((item) => item.title === decodedTitle);

  if (!item) {
    navigate("/");
    return null;
  }

  const { achievements, ...rest } = item;

  return <DetailPage data={achievements} metadata={rest} onBack={handleBack} />;
};
