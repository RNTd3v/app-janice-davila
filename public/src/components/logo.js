import React from 'react';
import Link from 'next/link';

const Logo = () => (
    <h1 className="logo">
        <Link href="/">
            <a>
                <span>Janice <strong>D'Avila</strong></span>
                <small>Director of Photography</small>
            </a>
        </Link>
    </h1>
);

export default Logo;