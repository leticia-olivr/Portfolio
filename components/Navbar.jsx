'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/experiencia-academica', label: 'Acadêmica' },
  { href: '/experiencia-profissional', label: 'Profissional' },
  { href: '/projetos', label: 'Projetos' }
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}