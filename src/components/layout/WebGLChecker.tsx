"use client";


import React, {
  useEffect,
  useState
} from "react";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";


export function WebGLChecker() {
  const isWebGLSupported = useWebGLSupport();

  const [ isClient, setIsClient ] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isWebGLSupported) {
    return null;
  }

  return <SplashCursor />;
}
