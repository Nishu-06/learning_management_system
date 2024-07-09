import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookCard = ({ book, role }) => {
    const { name, author, imageUrl, _id } = book;

    return (
        <div className="book-card">
            <img src={imageUrl} alt={name} className="book-image" />
            <div className="book-details">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            {role === 'admin' && (
                <div className="book-actions">
                    <button>
                        <Link to={`/book/${_id}`} className="btn-link">
                            EDIT
                        </Link>
                    </button>
                    <button>
                        <Link to={`/delete/${_id}`} className="btn-link">
                            DELETE
                        </Link>
                    </button>
                </div>
            )}
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
    role: PropTypes.string.isRequired,
};

export default BookCard;
