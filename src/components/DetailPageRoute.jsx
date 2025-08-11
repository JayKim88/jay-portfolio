import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DetailPage } from "./DetailPage";
import { experiences, projects } from "../constants/data";

export const DetailPageRoute = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  
  const allItems = [...experiences, ...projects];
  
  useEffect(() => {
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

  return (
    <DetailPage 
      data={achievements} 
      metadata={rest} 
      onBack={handleBack} 
    />
  );
};