"use client";

import { QRCodeCanvas } from "qrcode.react";

interface QRCodeProps {
  url: string;
  size?: number;
}

export default function QRCode({
  url,
  size = 128
}: QRCodeProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-md">
      <QRCodeCanvas
        value={url}
        size={size}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />
      <span className="mt-2 text-sm font-medium text-gray-700">
        Scan me
      </span>
    </div>
  );
}
