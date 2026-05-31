// components/WistiaPlayer.tsx
"use client";

import Script from "next/script";

export function WistiaPlayer({ mediaId }: { mediaId: string }) {
  return (
    <div className="w-40 mx-auto">
      {" "}
      {/* عرض محدود برای ویدیو عمودی */}
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="afterInteractive"
      />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="afterInteractive"
        type="module"
      />

      <wistia-player
        media-id={mediaId}
        aspect="0.5625" // ← این رو به 0.5625 تغییر بده (9÷16)
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
