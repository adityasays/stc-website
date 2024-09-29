import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="min-h-96 w-full bg-neutral-900 text-white py-6">
      <section className="mx-auto max-w-7xl">
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className=''>
            <h3 className="text-xl font-bold">About Us</h3>
            <p className='py-3'>
              At SMVDU Tech Community, we are dedicated to fostering an environment
              where technology enthusiasts can connect, collaborate, and innovate.
            </p>
            <div className='py-3'>

            <Button className='bg-black'>More about us</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
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
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Shri Mata Vaishno Devi University, Katra, J&K, 182320</p>
            <p>tech.community@smvdu.ac.in</p>
            <ul className="flex space-x-4 mt-4">
              <li>
                <Link href="https://www.linkedin.com/in/your-linkedin-profile">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/your-instagram-profile">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/your-youtube-channel">
                  <i className="fa fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </section>
    </footer>
  );
}