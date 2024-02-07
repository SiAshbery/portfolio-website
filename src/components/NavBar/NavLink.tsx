import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded hover:text-red-50"
        >
            {children}
        </Link>
    );
};

export default NavLink;
