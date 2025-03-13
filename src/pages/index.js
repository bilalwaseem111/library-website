import Head from 'next/head';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import Image from 'next/image'; // Import Image for optimized images

export default function Home() {
  const controls = useAnimation();
  const [glow, setGlow] = useState(false);

  const handleClick = async () => {
    setGlow(!glow);
    await controls.start({
      scale: [1, 1.3, 1],
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        '0px 0px 25px rgba(0, 119, 181, 0.9)',
        '0px 0px 0px rgba(0, 0, 0, 0)',
      ],
      transition: { duration: 2.6 },
    });
  };

  return (
    <>
      <Head>
        <title>My Personal Library</title>
      </Head>

      <Header />

      <main style={styles.main}>
        <div style={styles.content}>
          {/* Heading */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={styles.heading}
          >
            Welcome to{' '}
            <motion.span
              style={styles.brand}
              animate={{
                y: [0, -10, 0],
                textShadow: [
                  '0 0 40px rgba(19, 9, 71, 3.5)',
                  '0 0 20px rgba(21, 3, 60, 0.8)',
                  '0 0 10px rgba(188, 210, 24, 0.5)',
                ],
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                textShadow: { duration: 2.5, repeat: Infinity },
              }}
            >
              My Personal Library 📚
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.8, delay: 3.3 }}
            style={styles.subtitle}
          >
            Manage your favorite books in style! Store them in your own Library.
          </motion.p>

          {/* Explore Library Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/library" passHref legacyBehavior>
              <a style={styles.button}>📖 Explore Library</a>
            </Link>
          </motion.div>

          {/* Footer with LinkedIn Logo and Let's Connect */}
          <motion.div
            style={styles.creditContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Glowing Black Text with White Glow */}
            <p className="white-glow-text">Made by Bilal Waseem</p>

            <div style={styles.connectWrapper}>
              <p style={styles.connectText}>Let&apos;s Connect 👉</p>

              <motion.a
                href="https://www.linkedin.com/in/bilal-waseem-b44006338"
                target="_blank"
                rel="noopener noreferrer"
                animate={controls}
                onClick={handleClick}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: '0 0 40px rgba(0, 119, 181, 1)',
                  transition: { duration: 0.8, ease: 'easeInOut' },
                }}
                style={{
                  ...styles.logoContainer,
                  boxShadow: glow
                    ? '0 0 25px rgba(0, 119, 181, 0.9)'
                    : '0 0 10px rgba(194, 47, 47, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/logo.webp"
                  alt="LinkedIn Logo"
                  width={80}
                  height={80}
                  style={styles.logo}
                />
                <div style={styles.shine}></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Global CSS for Glow Text and Shine Effect */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(25deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%) rotate(25deg); opacity: 0; }
        }

        @keyframes whiteGlow {
          0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff; }
          100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff; }
        }

        .white-glow-text {
          color: #000; /* Black text */
          font-size: 18px;
          font-weight: 800;
          font-family: Arial, sans-serif;
          animation: whiteGlow 2s infinite alternate;
        }
      `}</style>
    </>
  );
}

const styles = {
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    overflow: 'hidden',
    padding: '20px',
    background: 'linear-gradient(135deg, rgb(235, 97, 210), #0077b5)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    maxWidth: '1000px',
    width: '100%',
    padding: '20px',
  },
  heading: {
    fontSize: '5.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  brand: {
    color: '#4CAF50',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '1rem',
    borderRadius: '50px',
    boxShadow: '0 50px 50px rgba(211, 43, 43, 0.2)',
    textDecoration: 'none',
    transition: 'transform 2.3s ease, box-shadow 2.3s ease',
  },
  creditContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '30px',
  },
  connectWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  connectText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
  },
  logoContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'box-shadow 0.6s ease, transform 0.6s ease',
  },
  logo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    zIndex: 1,
  },
  shine: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-150%',
    width: '200%',
    height: '100%',
    background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
    transform: 'translateX(-100%) rotate(25deg)',
    animation: 'shine 2.5s infinite',
    zIndex: 2,
  },
};
