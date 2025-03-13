import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Info, Book } from 'lucide-react';

const Header = () => {
  return (
    <header style={styles.header}>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={styles.navContainer}
      >
        <Link href="/" passHref legacyBehavior>
          <a style={styles.navLink}>
            <Home style={styles.icon} /> Home
          </a>
        </Link>
        
        <Link href="/about" passHref legacyBehavior>
          <a style={styles.navLink}>
            <Info style={styles.icon} /> About
          </a>
        </Link>
        
        <Link href="/library" passHref legacyBehavior>
          <a style={styles.navLink}>
            <Book style={styles.icon} /> Library
          </a>
        </Link>
      </motion.nav>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    padding: '10px 20px',
    position: 'fixed', // Fixed at the top
    top: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center', // Center the nav container
    alignItems: 'center', // Center vertically
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(5px)',
  },
  navContainer: {
    display: 'flex',
    gap: '30px', // Space between links
  },
  navLink: {
    color: '#fff',
    fontSize: '1.4rem',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    cursor: 'pointer',
    transition: 'color 1.3s ease',
    textDecoration: 'none', // Ensure no underline
  },
  icon: {
    width: '30px',
    height: '30px',
  },
};

export default Header;