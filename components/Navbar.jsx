'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home', type: 'page' },
  { href: '/sobre', label: 'Sobre', type: 'page' },
  { href: '/experiencia-academica', label: 'Acadêmica', type: 'page' },
  { href: '/experiencia-profissional', label: 'Profissional', type: 'page' },
  { href: '/#projetos', label: 'Projetos', type: 'section' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button
        className="menuButton"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={open ? 'navLinks open' : 'navLinks'}>
        {links.map((link) =>
          link.type === 'section' ? (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}