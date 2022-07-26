import React from 'react';
import Link from 'next/link';

const Logo = () => (
  <h1 className="logo">
    <Link href="/">
      <a>
        <span><strong>janice d'avila, abc</strong></span>
        <small>Director of Photography</small>
      </a>
    </Link>
  </h1>
);

export default Logo;
