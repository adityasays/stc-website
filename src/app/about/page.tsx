'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="bg-black text-white">
      
      <section className="about-center-section relative py-12">
        <motion.h2
          className="text-6xl font-bold text-center mb-4 glowing-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/bg.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-auto object-cover opacity-70 brightness-110"
          />
        </motion.div>
        <p className="text-lg text-center max-w-3xl mx-auto relative z-10 font-semibold text-white">
          We are dedicated to creating a space for innovation, collaboration, and learning, where every member can contribute to meaningful projects.
        </p>
      </section>

    
      <section className="mission-vision-section py-12">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mission and Vision
        </motion.h2>
        <motion.div
          className="text-lg text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="mb-2"><strong>Vision:</strong> Empower students with knowledge and hands-on tech experience, equipping them with industry skills for future success.</p>
          <p><strong>Mission:</strong> Provide support and resources for students to excel in technology, fostering innovation and leadership.</p>
        </motion.div>
      </section>

      
      <section className="core-values-section py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Collaboration', 'Innovation', 'Learning'].map((value) => (
              <motion.div
                key={value}
                className="value-card p-6 bg-gray-800 rounded-lg shadow-lg mx-4 transition-transform transform hover:scale-105"
                style={{ opacity: 0.9 }}
              >
                <h3 className="text-xl font-semibold mb-4">{value}</h3>
                <p className="text-gray-300">We believe in the power of {value.toLowerCase()} to create amazing projects.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="founders-section py-12" ref={ref}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Founders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div
              className="founder-card p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              style={{ opacity: 0.9 }}
            >
              <Image
                src="/img1.png"
                alt="Founder 1"
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">Jatin Sharma</h3>
              <p className="text-gray-400">STC Founder & Lead [2021-2023]</p>
              <div className="social-media mt-4">
                <Link href="https://www.linkedin.com/in/johndoe" target="_blank" className="text-teal-400 hover:text-teal-500 mx-2">
                  LinkedIn
                </Link>
                <Link href="https://twitter.com/johndoe" target="_blank" className="text-teal-400 hover:text-teal-500 mx-2">
                  Twitter
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="founder-card p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              style={{ opacity: 0.9 }}
            >
              <Image
                src="/img2.jpeg"
                alt="Co-Founder"
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">Aman Kumar</h3>
              <p className="text-gray-400">Co-Founder & Lead [2023-2024]</p>
              <div className="social-media mt-4">
                <Link href="https://www.linkedin.com/in/janesmith" target="_blank" className="text-teal-400 hover:text-teal-500 mx-2">
                  LinkedIn
                </Link>
                <Link href="https://twitter.com/janesmith" target="_blank" className="text-teal-400 hover:text-teal-500 mx-2">
                  Twitter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {[{
          image: '/temp1.jpg',
          text: 'Innovation and creativity are at the heart of what we do.',
          button: 'Discover More',
          title: 'The Team',
          subtitle: 'Meet the Team ',
          reverse: true
        },
        {
          image: '/temp2.jpg',
          text: 'We strive to make impactful projects through teamwork.',
          button: 'Join Our Team',
          title: 'News and Updates',
          subtitle: 'Stay updated with upcoming events.',
          reverse: false
        },
        {
          image: '/temp2.jpg',
          text: 'Explore the endless possibilities with us.',
          button: 'Get Started',
          title: 'History',
          subtitle: 'Founded in 2019 at SMVDU.',
          reverse: true
        }
      ].map((section, index) => (
        <section 
          key={index} 
          className={`flex flex-col md:flex-row items-center py-12 ${section.reverse ? 'md:flex-row-reverse' : ''}`} 
        >
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }} 
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.5, delay: 0.5 + 0.2 * index }} 
          >
            <Image 
              src={section.image}
              alt={`Section ${index + 1}`}
              width={900}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 p-8"
            initial={{ opacity: 0, y: 50 }} 
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.5, delay: 0.7 + 0.2 * index }} 
          >
            <h2 className="text-3xl font-semibold mb-2">{section.title}</h2>
            <p className="text-lg mb-4">{section.text}</p>
            <Link 
              href="/" 
              className="inline-block px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
            >
              {section.button}
            </Link>
            <p className="mt-2 text-gray-400">{section.subtitle}</p>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
