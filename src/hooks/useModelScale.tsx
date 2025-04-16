import { useState, useEffect } from 'react';

const BREAKPOINTS = {
  mobile: 500,
  tablet: 768,
  desktop: 1280,
} as const;

const EARTH_SCALES = {
  mobile: 1.8,
  tablet: 1.8,
  desktop: 2.2,
  large: 2.5,
} as const;

const COMPUTER_SCALES = {
  mobile: 0.6,
  tablet: 0.6,
  desktop: 0.75,
  large: 0.75,
} as const;

type ScaleConfig = typeof EARTH_SCALES | typeof COMPUTER_SCALES;

const getInitialScale = (scales: ScaleConfig): number => {
  // During SSR, we'll use the desktop scale as default
  if (typeof window === 'undefined') {
    return scales.desktop;
  }
  
  const width = window.innerWidth;
  if (width < BREAKPOINTS.mobile) return scales.mobile;
  if (width < BREAKPOINTS.tablet) return scales.tablet;
  if (width < BREAKPOINTS.desktop) return scales.desktop;
  return scales.large;
};

export const useEarthScale = (): number => {
  const [earthScale, setEarthScale] = useState(() => getInitialScale(EARTH_SCALES));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < BREAKPOINTS.mobile) {
        setEarthScale(EARTH_SCALES.mobile);
      } else if (width < BREAKPOINTS.tablet) {
        setEarthScale(EARTH_SCALES.tablet);
      } else if (width < BREAKPOINTS.desktop) {
        setEarthScale(EARTH_SCALES.desktop);
      } else {
        setEarthScale(EARTH_SCALES.large);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return earthScale;
};

export const useComputerScale = () => {
  const [computerScale, setComputerScale] = useState(() => getInitialScale(COMPUTER_SCALES));
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.mobile
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < BREAKPOINTS.mobile) {
        setComputerScale(COMPUTER_SCALES.mobile);
        setIsMobile(true);
      } else if (width < BREAKPOINTS.tablet) {
        setComputerScale(COMPUTER_SCALES.tablet);
        setIsMobile(false);
      } else if (width < BREAKPOINTS.desktop) {
        setComputerScale(COMPUTER_SCALES.desktop);
        setIsMobile(false);
      } else {
        setComputerScale(COMPUTER_SCALES.large);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { computerScale, isMobile };
}; 