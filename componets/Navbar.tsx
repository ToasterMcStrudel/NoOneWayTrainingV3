"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

  const [navbar, setNavbar] = useState(false);
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col'>

        <nav >
          <div className='row'>
            <div className='col'>
              <Link href="/">
                <Image src="/images/Logo-01.png"
                        alt="logo"
                        width={300}
                        height={300}
                        className='mx-auto d-block' />
              </Link>
            </div>
          </div>
          
          <div className="row py-3 bg-primary rounded-top">    
            <div className="col">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
                Home
              </Link>
            </div> 
            <div className="col">
              <Link href="/Philosophy" onClick={() => setNavbar(!navbar)}>
                Philosopy
              </Link>
            </div>
            <div className="col">
              <Link href="/Services" onClick={() => setNavbar(!navbar)}>
                Services
              </Link>
            </div>
            <div className="col">
              <Link href="/Contact" onClick={() => setNavbar(!navbar)}>
                Contact
              </Link>
            </div>
          </div>
        </nav>
        </div>
      </div>

      <div className='row pt-1 bg-secondary'/>
            
    </div>
  );
};


export default Navbar;