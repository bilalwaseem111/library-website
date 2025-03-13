import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About - My Personal Library</title>
      </Head>

      <main style={styles.mainWrapper}>
        {/* Back Button */}
        <div style={styles.backButtonContainer}>
          <Link href="/" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={styles.backButton}
            >
              🏠 Back to Home
            </motion.a>
          </Link>
        </div>

        {/* Content Area */}
        <div style={styles.contentWrapper}>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={styles.heading}
            className="glow-text"
          >
            ℹ️ About This Library
          </motion.h1>

          {/* Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={styles.paragraph}
          >
            Welcome to <strong>Bilal Waseem's Personal Library</strong>! 📚 An app designed to simplify how you manage and track your personal book collection.
          </motion.p>

          {/* Developer Info Section */}
          <motion.section style={styles.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h2 style={styles.sectionHeading}>👨‍💻 Developer Info</h2>
            <ul style={styles.list}>
              <li>🎉 Created On: <strong>March 2024</strong></li>
              <li>🧑‍💻 Developer: <strong>Bilal Waseem</strong></li>
            </ul>
          </motion.section>

          {/* Features Section */}
          <motion.section style={styles.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <h2 style={styles.sectionHeading}>✨ Features</h2>
            <ul style={styles.list}>
              <li>✅ Add, Edit, Delete Books</li>
              <li>✅ Export Library to CSV</li>
              <li>✅ Search & Filter by Title, Author, or Genre</li>
              <li>✅ Clean & Responsive UI/UX</li>
              <li>✅ Dark Mode Ready</li>
              <li>✅ Data Persistence via Local Storage</li>
            </ul>
          </motion.section>

          {/* What's Next Section */}
          <motion.section style={styles.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <h2 style={styles.sectionHeading}>🚀 What's Next?</h2>
            <ul style={styles.list}>
              <li>🔍 Advanced Search & Filter Options</li>
              <li>📈 Reading Statistics & Progress Tracker</li>
              <li>🌐 Cloud Sync & Multi-Device Access</li>
              <li>📚 Book Cover Uploads & Shelf Views</li>
              <li>🔔 Reading Reminders & Notifications</li>
            </ul>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section style={styles.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <h2 style={styles.sectionHeading}>💡 Tech Stack</h2>
            <ul style={styles.list}>
              <li>⚛️ Next.js (React Framework)</li>
              <li>🎨 CSS + Custom Animations</li>
              <li>📦 Framer Motion for Animations</li>
              <li>🗄️ LocalStorage / API for Data</li>
            </ul>
          </motion.section>

          {/* History Section */}
          <motion.section style={styles.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
            <h2 style={styles.sectionHeading}>📖 A Brief History of Readers</h2>
            <ul style={styles.list}>
              <li>📚 <strong>Ancient Times</strong>: Scrolls and tablets held sacred and epic stories.</li>
              <li>🏛️ <strong>Classical Era</strong>: Libraries like Alexandria preserved human knowledge.</li>
              <li>📜 <strong>Medieval Period</strong>: Monks preserved manuscripts, knowledge was exclusive.</li>
              <li>📖 <strong>Printing Revolution</strong>: Gutenberg made books available to everyone.</li>
              <li>🌐 <strong>Digital Age</strong>: E-books, cloud libraries, and now... personal digital libraries like this!</li>
            </ul>
          </motion.section>

          {/* Quote Section */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={styles.quote}>
            <p>“A reader lives a thousand lives before he dies.” – George R.R. Martin</p>
          </motion.div>
        </div>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0077b5, #4CAF50);
          background-size: 400% 400%;
          animation: gradientBackground 15s ease infinite;
          font-family: Arial, sans-serif;
        }

        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glow {
          0% { text-shadow: 0 0 5px #fff, 0 0 10px #4CAF50; }
          50% { text-shadow: 0 0 20px #fff, 0 0 30px #4CAF50; }
          100% { text-shadow: 0 0 5px #fff, 0 0 10px #4CAF50; }
        }

        .glow-text {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </>
  );
}

const styles = {
  mainWrapper: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
  },
  backButtonContainer: {
    marginBottom: '20px',
    width: '100%',
    textAlign: 'left',
  },
  backButton: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    color: '#0077b5',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'background 0.3s ease, color 0.3s ease',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    padding: '40px',
    color: '#333',
  },
  heading: {
    fontSize: '3.5rem',
    marginBottom: '20px',
    color: '#000',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#333',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
  sectionHeading: {
    fontSize: '1.8rem',
    marginBottom: '15px',
    color: '#0077b5',
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc',
    fontSize: '1rem',
    color: '#333',
  },
  quote: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    marginTop: '50px',
    color: '#333',
    textAlign: 'center',
  },
};
