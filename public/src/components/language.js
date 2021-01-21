import React from 'react';
import Link from 'next/link';

const Language = ({pt, en, active}) => (
    <nav className="language">
        <ul className="container">
            <li className="item">
                <Link href={en}>
                    <a className={'link ' + (active === 'en' ? '-active' : '')}>EN</a>
                </Link>
            </li>
            <li className="item">
                <Link href={`${pt}`}>
                    <a className={'link ' + (active === 'pt' ? '-active' : '')}>PT</a>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Language;
