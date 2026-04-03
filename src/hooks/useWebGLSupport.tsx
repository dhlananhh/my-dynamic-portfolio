"use client";

import { useState, useEffect } from "react";

export const useWebGLSupport = () => {
  const [ isSupported, setIsSupported ] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (gl && gl instanceof WebGLRenderingContext) {
        setIsSupported(true);
      } else {
        setIsSupported(false);
      }
    } catch (e) {
      setIsSupported(false);
    }
  }, []);

  return isSupported;
};
