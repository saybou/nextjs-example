import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <div>
    <Link href="/">
      <a title="Home">Home</a>
    </Link>
    <Link href="/about">
      <a title="About">About</a>
    </Link>
    <style jsx>{`
      a {
        margin-right: 15px;
      }
    `}</style>
  </div>
);

export default Header;
