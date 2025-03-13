import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Info, Book } from 'lucide-react';

const Header = () => {
  return (
    <header style={styles.header}>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={styles.navContainer}
      >
        {/* Home Link */}
        <Link href="/" passHref legacyBehavior>
          <motion.a
            style={styles.navLink}
            whileHover={{ scale: 1.1, color: '#7C3AED' }} // purple hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <Home style={styles.icon} />
            </motion.div>
            Home
          </motion.a>
        </Link>

        {/* About Link */}
        <Link href="/about" passHref legacyBehavior>
          <motion.a
            style={styles.navLink}
            whileHover={{ scale: 1.1, color: '#7C3AED' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <Info style={styles.icon} />
            </motion.div>
            About
          </motion.a>
        </Link>

        {/* Library Link */}
        <Link href="/library" passHref legacyBehavior>
          <motion.a
            style={styles.navLink}
            whileHover={{ scale: 1.1, color: '#7C3AED' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <Book style={styles.icon} />
            </motion.div>
            Library
          </motion.a>
        </Link>
      </motion.nav>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    padding: '15px 30px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
  navContainer: {
    display: 'flex',
    gap: '40px',
  },
  navLink: {
    color: '#FFFFFF',
    fontSize: '1.4rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  icon: {
    width: '26px',
    height: '26px',
  },
};

export default Header;
