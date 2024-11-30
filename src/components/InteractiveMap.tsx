'use client'

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';

interface WeatherData {
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
  };
}

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<string>('');
  const weatherOverlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        console.log('Fetching weather data...');
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?lat=21.1458&lon=79.0882&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        const weatherMain = response.data.weather[0].main.toLowerCase();
        console.log('Weather data received:', weatherMain);
        setWeather(weatherMain);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setWeather('clear');
      }
    };

    fetchWeather();
    
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Effect for updating weather overlay
  useEffect(() => {
    if (!weatherOverlayRef.current || !weather) return;
    
    console.log('Updating weather overlay with:', weather);
    weatherOverlayRef.current.className = `weather-overlay ${weather}`;
    
    // Clear existing particles
    while (weatherOverlayRef.current.firstChild) {
      weatherOverlayRef.current.removeChild(weatherOverlayRef.current.firstChild);
    }

    // Add new particles based on weather
    if (weather === 'rain' || weather === 'snow') {
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'weather-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        weatherOverlayRef.current.appendChild(particle);
      }
    }
  }, [weather]);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN      
      if (!token) {
        throw new Error('Mapbox access token is missing');
      }

      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [79.0882, 21.1458],
        zoom: 11,
        pitch: 45,
        scrollZoom: false,
        dragRotate: false,
        touchZoomRotate: false,
      });

      map.current.dragPan.disable();
      map.current.keyboard.disable();
      map.current.doubleClickZoom.disable();

      map.current.on('load', () => {
        if (!map.current) return;
        setLoaded(true);

        map.current.setFog({
          'range': [0.8, 8],
          'color': '#ffffff',
          'horizon-blend': 0.1,
        });

        // Create custom marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';
        markerEl.innerHTML = `
          <div class="marker-container">
            <div class="marker-inner">
              <div class="marker-center"></div>
            </div>
            <div class="marker-pulse"></div>
          </div>
        `;

        // Add styles to the document
        const style = document.createElement('style');
        style.textContent = `
          .weather-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
          }

          .weather-particle {
            position: absolute;
            pointer-events: none;
            animation: fall linear infinite;
          }

          @keyframes fall {
            0% {
              transform: translateY(-20px) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 20px)) translateX(20px);
              opacity: 0;
            }
          }

          .rain .weather-particle {
            width: 2px;
            height: 20px;
            background: linear-gradient(transparent, rgba(255, 255, 255, 0.6));
            animation-duration: 1s;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }

          .snow .weather-particle {
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            animation-duration: 3s;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }

          .clouds {
            background: 
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 40%),
              radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 30%);
            animation: drift 20s linear infinite;
          }

          .thunderstorm .weather-particle {
            width: 3px;
            height: 25px;
            background: linear-gradient(transparent, rgba(255, 255, 255, 0.8));
            animation-duration: 0.8s;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
          }

          @keyframes drift {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(50%);
            }
          }

          .fog {
            background: linear-gradient(transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
            animation: fog-drift 10s ease-in-out infinite alternate;
          }

          @keyframes fog-drift {
            from {
              transform: translateX(-10%) translateY(-10%);
            }
            to {
              transform: translateX(10%) translateY(10%);
            }
          }

          .custom-marker {
            position: relative;
            width: 40px;
            height: 40px;
          }
          
          .marker-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          
          .marker-inner {
            width: 24px;
            height: 24px;
            background: rgba(66, 135, 245, 0.15);
            border: 2px solid #4287f5;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(66, 135, 245, 0.5);
            animation: markerScale 1.5s ease-out infinite;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .marker-center {
            width: 8px;
            height: 8px;
            background: #4287f5;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(66, 135, 245, 0.8);
          }
          
          .marker-pulse {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: rgba(66, 135, 245, 0.1);
            border-radius: 50%;
            animation: pulse 2s ease-out infinite;
          }
          
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(0.5);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }
          
          @keyframes markerScale {
            0% {
              transform: scale(0.9);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(0.9);
            }
          }
        `;
        document.head.appendChild(style);

        // Add custom marker to map
        new mapboxgl.Marker({
          element: markerEl,
          anchor: 'center'
        })
        .setLngLat([79.0882, 21.1458])
        .addTo(map.current);

        // Create weather overlay
        const weatherOverlay = document.createElement('div');
        weatherOverlay.className = `weather-overlay ${weather}`;
        weatherOverlayRef.current = weatherOverlay;
        mapContainer.current?.appendChild(weatherOverlay);

        // Add initial weather particles
        if (weather === 'rain' || weather === 'snow') {
          for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'weather-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            weatherOverlay.appendChild(particle);
          }
        }
      });
    } catch (err) {
      console.error('Error initializing map:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize map');
    }

    return () => {
      map.current?.remove();
    };
  }, [weather]);

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 flex items-center justify-center">
        <p className="text-red-500">Failed to load map: {error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default InteractiveMap;
