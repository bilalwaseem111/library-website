import { useEffect, useState } from 'react';
import BookTable from '@/components/BookTable';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Library() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ Title: '', Author: '', Genre: '', Year: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [filterGenre, setFilterGenre] = useState('All');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch('/api/library');
    const data = await res.json();
    setBooks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = '/api/library';
    const method = editIndex !== null ? 'PUT' : 'POST';
    const body = editIndex !== null
      ? JSON.stringify({ index: editIndex, updatedBook: form })
      : JSON.stringify(form);

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body
    });

    setForm({ Title: '', Author: '', Genre: '', Year: '' });
    setEditIndex(null);
    fetchBooks();
  };

  const handleEdit = (index) => {
    setForm(books[index]);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    await fetch('/api/library', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index })
    });
    fetchBooks();
  };

  const exportCSV = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' +
      ['Title,Author,Genre,Year', ...books.map(book => `${book.Title},${book.Author},${book.Genre},${book.Year}`)].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'my_library.csv');
    document.body.appendChild(link);
    link.click();
  };

  const filteredBooks = filterGenre === 'All' ? books : books.filter(book => book.Genre === filterGenre);

  return (
    <>
      <div style={styles.pageBackground}></div>

      <div style={styles.backContainer}>
        <Link href="/" passHref legacyBehavior>
          <motion.a
            style={styles.backButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🏠 Back to Home
          </motion.a>
        </Link>
      </div>

      <main style={styles.main}>
        <motion.h2
          style={styles.heading}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          📚 Manage Your Library
        </motion.h2>

        <motion.div
          style={styles.filters}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['All', 'Fiction', 'Self-Help', 'Business'].map((genre, idx) => (
            <motion.button
              key={idx}
              onClick={() => setFilterGenre(genre)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...styles.filterButton,
                backgroundColor: filterGenre === genre ? '#005a8d' : '#0077b5'
              }}
            >
              {genre}
            </motion.button>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          style={styles.form}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {['Title', 'Author', 'Genre', 'Year'].map((field, idx) => (
            <motion.input
              key={idx}
              type={field === 'Year' ? 'number' : 'text'}
              placeholder={field}
              value={form[field]}
              onChange={(e) =>
                setForm({
                  ...form,
                  [field]: field === 'Year' ? parseInt(e.target.value) : e.target.value
                })
              }
              required
              style={styles.input}
              whileFocus={{ scale: 1.02 }}
            />
          ))}

          <motion.button
            type="submit"
            style={styles.addButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {editIndex !== null ? 'Update Book' : 'Add Book'}
          </motion.button>
        </motion.form>

        <BookTable books={filteredBooks} onEdit={handleEdit} onDelete={handleDelete} />

        <motion.button
          onClick={exportCSV}
          style={styles.exportButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ⬇️ Export Library as CSV
        </motion.button>
      </main>
    </>
  );
}

const styles = {
  pageBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: 'linear-gradient(135deg, #0077b5, #4CAF50)',
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 15s ease infinite',
  },
  backContainer: {
    padding: '20px',
    textAlign: 'left',
  },
  backButton: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#0077b5',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
  main: {
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    position: 'relative',
    zIndex: 1,
  },
  heading: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '3rem',
    color: '#333',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '12px 20px',
    backgroundColor: '#0077b5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
    padding: '30px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '14px 24px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s ease',
  },
  exportButton: {
    display: 'block',
    margin: '30px auto 0',
    padding: '14px 24px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);