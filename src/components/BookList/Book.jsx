import React from 'react';
import { Link } from 'react-router-dom';
import "./book.css";
import Header from '../Header/Header';

const Book = (book) => {
  //const { books, loading, resultTitle } = useGlobalContext();
  return (
    <div className='book-item flex flex-column flex-sb'>
        <Link to = {`/book/${book.id}`} {...book}>
      <div className='book-item-img'>
        <img  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt ="cover" />
      </div>
      <div className='book-item-info text-center'>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        <div className='btn-book'>
            <a href="" >Avaliar</a>
            <a href="" >Compartilhar</a>
            <a href="" >Comprar</a>

        </div>

      </div>
        </Link>
    </div>
  )
}

export default Book;
