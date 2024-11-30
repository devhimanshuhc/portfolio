'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SpotifyTrack {
  name: string;
  artist: string;
  albumArt: string;
  isPlaying: boolean;
  spotifyUrl: string;
}

export default function SpotifyPlayer() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNowPlaying = async () => {
    try {
      setIsRefreshing(true);
      const response = await fetch('/api/spotify', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      
      if (data && data.isPlaying) {
        setTrack({
          name: data.title,
          artist: data.artist,
          albumArt: data.albumImageUrl,
          isPlaying: data.isPlaying,
          spotifyUrl: data.songUrl
        });
      } else {
        setTrack(null);
      }
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      setError('Failed to fetch data');
      setTrack(null);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    // Poll every 30 seconds to avoid rate limiting
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6">
          <p className="text-sm sm:text-base text-neutral-400 text-center">{error}</p>
          <button
            onClick={fetchNowPlaying}
            className="mt-3 px-3 py-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors duration-300"
          >
            Retry
          </button>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full p-4 sm:p-6">
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-neutral-800 border-t-neutral-500 rounded-full animate-spin" />
        </div>
      );
    }

    if (!track) {
      return (
        <div className="flex items-center justify-center h-full p-4 sm:p-6">
          <p className="text-sm sm:text-base text-neutral-400">Not playing anything</p>
        </div>
      );
    }

    if (isMinimized) {
      return (
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={track.albumArt}
              alt={`${track.name} album art`}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 opacity-90 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="relative p-4 sm:p-5">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
            <Image
              src={track.albumArt}
              alt={`${track.name} album art`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm sm:text-base text-white truncate pr-6">
              {track.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 truncate mt-1">
              {track.artist}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-90 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span className="text-xs text-neutral-400">Spotify</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group"
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            opacity: isHovered ? 1 : 0.8,
          }}
          className="absolute -inset-[2px] bg-[conic-gradient(from_0deg,#1f1f1f,#2a2a2a,#1f1f1f)] dark:bg-[conic-gradient(from_0deg,#27272a,#3f3f46,#27272a)] rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-300"
        />

        {/* Main Container */}
        <motion.div
          layout
          className={`relative bg-gradient-to-br from-zinc-950/95 to-neutral-900/95 backdrop-blur-xl border border-zinc-800/20 rounded-2xl overflow-hidden ${
            isMinimized ? 'w-14 sm:w-16 h-14 sm:h-16' : track ? 'w-[280px] sm:w-80' : 'w-[240px] sm:w-64 h-36 sm:h-40'
          } transition-all duration-300`}
        >
          {renderContent()}

          {/* Minimize/Maximize Button */}
          {track && (
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors duration-300 z-10"
            >
              <motion.svg
                animate={{ rotate: isMinimized ? 180 : 0 }}
                className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMinimized ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                />
              </motion.svg>
            </button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
