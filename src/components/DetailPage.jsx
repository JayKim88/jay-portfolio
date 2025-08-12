import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tags } from "./Tags";
import ErrorBoundary from "./ErrorBoundary";

// Import ref icons (reusing from Description component)
import Figma from "../assets/images/figma.svg?react";
import Deploy from "../assets/images/rocket.svg?react";
import Plan from "../assets/images/pen-ruler.svg?react";
import Github from "../assets/images/sns/github.svg?react";

const iconStyle = `max-w-6 w-6 h-6 folder-open-8 fill-white`;
const icons = {
  github: <Github className={iconStyle} />,
  deploy: <Deploy className={iconStyle} />,
  note: <Plan className={iconStyle} />,
  figma: <Figma className={iconStyle} />,
};

const CloseButton = ({ onClose }) => (
  <button
    onClick={onClose}
    className="absolute top-6 right-6 
           text-white rounded-full p-2 transition-colors duration-200 border-2 cursor-pointer z-10"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

// Simple Image Modal Component
const ImageModal = ({ isOpen, onClose, images, currentIndex, title }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#011f1f]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <CloseButton onClose={onClose} />
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <MediaCarousel
          mediaItems={images}
          title={title}
          initialIndex={currentIndex}
          isModal
        />
      </motion.div>
    </motion.div>
  );
};

// Enhanced Media Carousel Component
const MediaCarousel = ({
  mediaItems,
  title,
  initialIndex = 0,
  isModal = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMediaItems, setModalMediaItems] = useState([]);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Initialize index when initialIndex prop changes
  useEffect(() => {
    setCurrentIndex(initialIndex || 0);
  }, [initialIndex]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const currentItem = mediaItems[currentIndex];

  useEffect(() => {
    if (currentItem?.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  if (!mediaItems || mediaItems.length === 0) return null;

  const renderMediaContent = (item, index) => {
    const isModalMode = isModal;

    switch (item.type) {
      case "image":
        if (isModalMode) {
          return (
            <img
              src={item.src}
              alt={item.alt || title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          );
        } else {
          return (
            <motion.div
              key={index}
              className="relative w-full h-full cursor-pointer group"
              onMouseEnter={() => setHoveredImage(item.src)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => {
                // Pass all media items to the modal and find the clicked item's index
                const clickedItemIndex = mediaItems.findIndex(
                  (media) => media.src === item.src && media.type === item.type
                );
                setModalMediaItems(mediaItems);
                setModalCurrentIndex(clickedItemIndex);
                setModalOpen(true);
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={item.src}
                alt={item.alt || title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          );
        }

      case "video":
        const videoClassName = isModalMode
          ? "w-fit h-fit max-h-full object-contain rounded-lg shadow-2xl"
          : "w-full h-full object-cover rounded-lg";

        return (
          <motion.video
            key={index}
            ref={videoRef}
            src={item.src}
            className={videoClassName}
            controls
            preload="metadata"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            Your browser does not support the video tag.
          </motion.video>
        );

      case "code":
        if (isModalMode) {
          return (
            <div className="w-[80vw] max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
              <div className="text-white font-bold p-4 pb-2 text-base border-b border-gray-700">
                Code Example
              </div>
              <div className="overflow-auto max-h-[70vh]">
                <SyntaxHighlighter
                  language="typescript"
                  style={materialDark}
                  className="text-sm"
                  customStyle={{
                    fontSize: "13px",
                    background: "transparent",
                    margin: 0,
                    padding: "1rem",
                  }}
                  codeTagProps={{
                    style: {
                      background: "transparent",
                    },
                  }}
                >
                  {item.content}
                </SyntaxHighlighter>
              </div>
            </div>
          );
        } else {
          const codeClassName =
            "relative w-full bg-gray-900 rounded-lg overflow-auto p-4 cursor-pointer group";
          const codeStyle = {
            fontSize: "12px",
            background: "transparent",
            maxHeight: "250px",
            overflow: "auto",
          };

          return (
            <motion.div
              key={index}
              className={codeClassName}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                // Pass all media items to the modal and find the clicked item's index
                const clickedItemIndex = mediaItems.findIndex(
                  (media) =>
                    media.content === item.content && media.type === item.type
                );
                setModalMediaItems(mediaItems);
                setModalCurrentIndex(clickedItemIndex);
                setModalOpen(true);
              }}
            >
              <div className="text-white font-bold mb-2 text-sm">
                Code Example
              </div>
              <SyntaxHighlighter
                language="typescript"
                style={materialDark}
                className="text-xs group-hover:opacity-90 transition-opacity duration-300"
                customStyle={codeStyle}
                codeTagProps={{
                  style: {
                    background: "transparent",
                  },
                }}
              >
                {item.content}
              </SyntaxHighlighter>
              {/* Click indicator */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </motion.div>
          );
        }

      default:
        return null;
    }
  };

  const isCode = currentItem.type === "code";
  const containerClassName = isModal
    ? `${
        isCode
          ? "items-start justify-start overflow-x-auto overflow-y-hidden"
          : "items-center justify-center"
      } relative w-full h-full p-8 flex`
    : "relative w-full h-72 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/50 mb-4";

  const buttonStyles = `absolute top-1/2 transform -translate-y-1/2
  backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 
  border shadow-lg ${isModal ? "scale-125 cursor-pointer" : "scale-100"}`;

  const commonButtonProps = {
    style: {
      backgroundColor: "rgba(0, 80, 80, 0.7)",
      borderColor: "rgba(0, 255, 200, 0.3)",
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <div className={containerClassName}>
        <AnimatePresence mode="wait">
          {isModal ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex justify-center items-center bg-transparent"
            >
              {renderMediaContent(currentItem, currentIndex)}
            </motion.div>
          ) : (
            renderMediaContent(currentItem, currentIndex)
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        {mediaItems.length > 1 && (
          <>
            <motion.button
              onClick={prevItem}
              className={`left-4 ${buttonStyles}`}
              {...commonButtonProps}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            {/* )} */}

            <motion.button
              onClick={nextItem}
              className={`right-4 ${buttonStyles}`}
              {...commonButtonProps}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Media type indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
              {mediaItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border-2 relative ${
                    index === currentIndex
                      ? "bg-white border-white shadow-lg shadow-white/30"
                      : "bg-transparent border-white/60 hover:border-white/80"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Media type indicator */}
                  <div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                                 opacity-0 hover:opacity-100 transition-opacity duration-200
                                 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    {item.type === "image"
                      ? "🖼️"
                      : item.type === "video"
                      ? "🎥"
                      : "💻"}
                    {item.type}
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Image Modal - only show when not already in modal mode */}
      {!isModal && (
        <AnimatePresence>
          {modalOpen && (
            <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              images={modalMediaItems}
              currentIndex={modalCurrentIndex}
              title={title}
            />
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export const DetailPage = ({ data, metadata, onBack }) => {
  const { t, i18n } = useTranslation();
  const isKo = i18n.language === "ko";

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 flex items-center justify-center">
        <div className="text-white text-xl">Content not found</div>
      </div>
    );
  }

  const { period, title, company, summary, stacks, position, type, refs } =
    metadata ?? {};

  // Normalize data - if it's a single object, convert to array for consistent processing
  const contentToDisplay = Array.isArray(data) ? data : [data];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,200,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,150,120,0.04)_360deg)]"></div>
      </div>

      {/* Header */}
      <motion.div
        className="sticky top-0 backdrop-blur-xl z-10 shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="group flex items-center gap-3 px-6 py-3 hover:text-teal-200 text-white 
                         rounded-xl border transition-all duration-300 font-medium backdrop-blur-sm
                         shadow-lg cursor-pointer"
              whileHover={{ scale: 1.02, x: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t("Back")}
            </motion.button>
            <motion.h1
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-white via-teal-100 to-cyan-200 
                         bg-clip-text text-center flex-1 mx-4 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex justify-center items-center">{t(title)}</div>
              {contentToDisplay.length > 1 && (
                <span className="block text-lg font-medium text-teal-300 mt-1">
                  {t("Key Achievements & Contributions")}
                </span>
              )}
            </motion.h1>
            <div className="w-20"></div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-16">
        {metadata && (
          <motion.div
            className="mb-12 backdrop-blur-xl rounded-3xl border p-8 
                       shadow-2xl transition-all duration-500"
            style={{
              boxShadow: "0 25px 50px -12px rgba(1, 31, 31, 0.5)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="leading-relaxed text-lg">{t(summary)}</p>
              </div>
              <div className="md:col-span-1 space-y-4">
                {period && (
                  <div className="flex items-center gap-4">
                    <span className="text-teal-400 font-medium min-w-[80px] text-sm uppercase tracking-wider">
                      Period
                    </span>
                    <span
                      className="text-teal-100 font-medium px-3 py-1 rounded-lg"
                      style={{ backgroundColor: "rgba(0, 120, 120, 0.5)" }}
                    >
                      {t(period)}
                    </span>
                  </div>
                )}
                {(position || company) && (
                  <div className="flex items-center gap-4">
                    <span className="text-teal-400 font-medium min-w-[80px] text-sm uppercase tracking-wider">
                      {position ? "Role" : "Company"}
                    </span>
                    <span
                      className="text-teal-100 font-medium px-3 py-1 rounded-lg"
                      style={{ backgroundColor: "rgba(0, 120, 120, 0.5)" }}
                    >
                      {t(position || "")} {company && `${t(company)}`}
                    </span>
                  </div>
                )}
                {type && (
                  <div className="flex items-center gap-4">
                    <span className="text-teal-400 font-medium min-w-[80px] text-sm uppercase tracking-wider">
                      Type
                    </span>
                    <span
                      className="text-teal-100 font-medium px-3 py-1 rounded-lg"
                      style={{ backgroundColor: "rgba(0, 120, 120, 0.5)" }}
                    >
                      {t(type)}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-6 mt-6">
              {stacks && stacks.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full"></span>
                    Tech Stack
                  </h4>
                  <Tags data={stacks || contentToDisplay[0]?.stacks} />
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Content Sections */}
        <motion.div
          className={`grid grid-cols-1 ${
            contentToDisplay.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"
          } gap-10`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          viewport={{ margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {contentToDisplay.map((section, index) => {
            // Get all media for this section
            const allMedia = [
              ...(section.images || []).map((img) => ({
                type: "image",
                src: img,
                alt: section.title,
              })),
              ...(section.videos || []).map((video) => ({
                type: "video",
                src: video,
                alt: section.title,
              })),
              ...(section.codeBlocks || []).map((code) => ({
                type: "code",
                content: code,
                title: section.title,
              })),
            ];

            return (
              <motion.div
                key={`${section.title}-${index}`}
                className="group backdrop-blur-xl rounded-3xl border overflow-hidden
                           transition-all duration-500 shadow-xl h-fit"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(1, 31, 31, 0.3)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ margin: "-50px" }}
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Content */}
                <div className="p-6">
                  {contentToDisplay.length > 1 && (
                    <motion.h3
                      className="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-teal-200 
                                 bg-clip-text mb-6 pb-4 border-b flex items-center gap-3"
                      style={{ borderColor: "rgba(0, 255, 200, 0.3)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <span
                        className="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 bg-gradient-to-r from-teal-500 to-cyan-600 
                                       text-white text-sm font-bold rounded-full shadow-lg"
                      >
                        {index + 1}
                      </span>
                      {t(section.title)}
                    </motion.h3>
                  )}

                  {allMedia.length > 0 && (
                    <MediaCarousel
                      mediaItems={allMedia}
                      title={section.title}
                    />
                  )}

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                  >
                    {(section.points || [section.paragraph])
                      .filter(Boolean)
                      .map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          className="group/point flex gap-4 p-4 rounded-xl 
                                   transition-all duration-300 border"
                          style={{
                            borderColor: "rgba(0, 255, 200, 0.2)",
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 1.2 + index * 0.1 + pointIndex * 0.05,
                          }}
                          whileHover={{ x: 4, transition: { duration: 0.2 } }}
                        >
                          <span
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mt-2.5
                                         group-hover/point:scale-125 transition-transform duration-200"
                          ></span>
                          <div className="flex-1">
                            {typeof point === "string" ? (
                              <span className="leading-relaxed">
                                {t(point)}
                              </span>
                            ) : (
                              <div className="leading-relaxed">{point}</div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </motion.div>
  );
};
