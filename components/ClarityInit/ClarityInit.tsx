'use client';

import Script from 'next/script';
import Clarity from '@microsoft/clarity';

const PROJECT_ID = 'xv4nm3fta8';

export default function ClarityInit() {
  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      onLoad={() => {
        Clarity.init(PROJECT_ID);
      }}
      src={`https://www.clarity.ms/tag/${PROJECT_ID}`}
    />
  );
}
