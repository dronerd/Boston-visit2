"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

type Pos = { top: string; left: string };

const defaultPositions: Pos[] = [
  { top: '18%', left: '10%' },
  { top: '22%', left: '45%' },
  { top: '48%', left: '28%' },
  { top: '62%', left: '58%' },
  { top: '40%', left: '80%' },
];

export default function VideoHero({ positions = defaultPositions }: { positions?: Pos[] }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure playback (some browsers require play() after user gesture; muted+autoplay helps)
    const tryPlay = () => {
      v.play().catch(() => {
        // ignore
      });
    };

    // Some browsers briefly pause on loop; handle ended to restart immediately
    const onEnded = () => {
      try {
        v.currentTime = 0.05; // small offset to avoid potential gap
        v.play().catch(() => {});
      } catch (e) {}
    };

    v.addEventListener('canplay', tryPlay);
    v.addEventListener('ended', onEnded);

    // try initially
    tryPlay();

    return () => {
      v.removeEventListener('canplay', tryPlay);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <video
        ref={videoRef}
        src="/loop_sky_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-72 object-cover"
        aria-hidden={false}
      />

      {/* Overlay buttons */}
      {positions.slice(0, 4).map((p, i) => (
        <Link key={i} href={`/page${i + 1}`} className="absolute" style={{ top: p.top, left: p.left }}>
          <button
            aria-label={`Go to March ${i + 4}`}
            className="h-10 w-10 rounded-full bg-white/80 text-black flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            onClick={() => { /* navigation handled by Link */ }}
          >
            3/{i + 4}
          </button>
        </Link>
      ))}
    </div>
  );
}
