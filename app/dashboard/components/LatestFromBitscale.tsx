"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { videoSlides } from '@/app/dashboard/video-data';

export default function LatestFromBitscale() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videoSlides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const activeSlide = videoSlides[currentSlide];

  const handleVideoClick = () => {
    window.open(activeSlide.videoUrl, '_blank');
  };

  return (
    <div
      className="rounded-lg p-6 shadow-sm flex-1 transition-colors duration-500"
      style={{ backgroundColor: activeSlide.bgColor }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Latest from Bitscale</h2>
        <div className="flex gap-1">
          {videoSlides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${index === currentSlide ? '' : 'bg-gray-300'}`}
              style={{ backgroundColor: index === currentSlide ? activeSlide.dotColor : '' }}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <div
          className="relative w-48 h-28 rounded-md overflow-hidden flex-shrink-0 cursor-pointer"
          onClick={handleVideoClick}
        >
          <Image
            src={activeSlide.thumbnail}
            alt={activeSlide.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <Image src="/next.svg" alt="Play" width={20} height={20} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-1 text-xs">{activeSlide.title}</h3>
          <p className="text-sm text-white line-clamp-3 text-xs">
            {activeSlide.description}
          </p>
          <p className="text-xs text-gray-200 mt-2">Posted today</p>
        </div>
      </div>
    </div>
  );
}
