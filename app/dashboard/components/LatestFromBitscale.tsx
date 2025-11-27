"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { videoSlides } from '@/app/dashboard/data/video-data';

export default function LatestFromBitscale() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videoSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = videoSlides[currentSlide];

  const handleVideoClick = () => {
    window.open(activeSlide.videoUrl, '_blank');
  };

  return (
    <div
      className="rounded-lg p-4 shadow-sm flex-1 transition-colors duration-500"
      style={{ backgroundColor: activeSlide.bgColor, minHeight: "160px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base font-semibold text-white">Latest from Bitscale</h2>
        <div className="flex gap-2">
          {videoSlides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-3 rounded-full cursor-pointer transition-all duration-300`}
              style={{
                backgroundColor: index === currentSlide ? activeSlide.dotColor : 'rgba(255,255,255,0.3)',
                transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)',
              }}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Video Content */}
      <div className="flex gap-4 items-start">
        {/* Thumbnail */}
        <div
          className="relative w-[160px] h-[90px] rounded-md overflow-hidden flex-shrink-0 cursor-pointer"
          onClick={handleVideoClick}
        >
          <Image
            src={activeSlide.thumbnail}
            alt={activeSlide.title}
            layout="fill"
            objectFit="cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded-full p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2">
              {activeSlide.title}
            </h3>
            <p className="text-[12px] text-white line-clamp-3">
              {activeSlide.description}
            </p>
          </div>
          <p className="text-[11px] text-gray-200 mt-2">Posted today</p>
        </div>
      </div>
    </div>
  );
}