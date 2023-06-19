"use client";

import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Philosophy",
    url: "/Philosophy",
  },
  {
    id: 3,
    title: "Services",
    url: "/Services",
  },
  {
    id: 4,
    title: "About",
    url: "/About",
  },
  {
    id: 5,
    title: "Contact",
    url: "/Contact",
  },
  
];

const Navbar = () => {

  return (
    <div className="container-fluid bg-primary" >
      <div className='container  justify-between items-center'>
      <Link href="/" >
        Logo
      </Link>
      <div >
        {links.map((link) => (
          <Link key={link.id} href={link.url} >
            {link.title}
          </Link>
        ))}
        
      </div>
      </div>
    </div>
  );
};


export default Navbar;