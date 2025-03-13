import { getLibrary, addBook, updateBook, deleteBook } from '@/utils/libraryData';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getLibrary());
  } else if (req.method === 'POST') {
    addBook(req.body);
    res.status(201).json({ message: 'Book added' });
  } else if (req.method === 'PUT') {
    const { index, updatedBook } = req.body;
    updateBook(index, updatedBook);
    res.status(200).json({ message: 'Book updated' });
  } else if (req.method === 'DELETE') {
    const { index } = req.body;
    deleteBook(index);
    res.status(200).json({ message: 'Book deleted' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}