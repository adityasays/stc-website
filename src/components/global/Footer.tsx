import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'; 
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="min-h-96 w-full bg-neutral-900 text-white py-6">
      <section className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo width={120} height={120} className="mb-4" /> {/* Change logo size here */}
            <p className='py-3'>
              At SMVDU Tech Community, we are dedicated to fostering an environment
              where technology enthusiasts can connect, collaborate, and innovate.
            </p>
            <div className='py-3'>
              <Button className='bg-black hover:bg-gray-700 transition duration-300'>
                More about us
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 transition duration-300 hover:text-neonGreen">
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/participation">Participation</Link></li>
              <li><Link href="/achievements">Achievements</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/alumni">Alumni</Link></li>
              <li><Link href="/about-stc">About STC</Link></li>
              <li><Link href="/join-stc">Join STC</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 transition duration-300 hover:text-neonGreen">
              Contact
            </h3>
            <p>Shri Mata Vaishno Devi University, Katra, J&K, 182320</p>
            <p>tech.community@smvdu.ac.in</p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <Link href="https://www.linkedin.com/in/your-linkedin-profile">
                <FaLinkedin className="hover:text-neonGreen transition duration-300" />
              </Link>
              <Link href="https://www.instagram.com/your-instagram-profile">
                <FaInstagram className="hover:text-neonPink transition duration-300" />
              </Link>
              <Link href="https://twitter.com/your-twitter-profile">
                <FaTwitter className="hover:text-neonBlue transition duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/your-youtube-channel">
                <FaYoutube className="hover:text-red-600 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-700" /> 
        <div className="mt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SMVDU Tech Community. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
