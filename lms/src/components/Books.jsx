import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import '../css/Books.css';
import PropTypes from 'prop-types';

const Books = ({ role }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:3001/book/books')
            .then((res) => {
                setBooks(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <BookCard key={book.id} book={book} role={role}></BookCard>
                );
            })}
        </div>
    );
};

Books.propTypes = {
    role: PropTypes.string.isRequired,
};
export default Books;
