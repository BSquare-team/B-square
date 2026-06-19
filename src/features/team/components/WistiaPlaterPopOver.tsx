"use client";

import Script from "next/script";

export function WistiaPlayerPopOver({ mediaId }: { mediaId: string }) {
  return (
    <>
      {/* اسکریپت اصلی wistia که باید یک بار لود بشه */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="afterInteractive"
        async
      />

      {/* خود کد Popover که کلید اصلی کاره */}
      <div
        className={`wistia_embed wistia_async_${mediaId} popover=true popoverAnimateThumbnail=true`}
        style={{ display: "inline-block", height: "267px", width: "150px" }}
      > </div>
    </>
  );
}