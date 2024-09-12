import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import "./booklist.css"

import Book from "./Book"
import Loader from '../Loader/Loader';

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const removingUrl = books.map((book) => {
    return {
      ...book,
      id: (book.id).replace("/works/","")
    }
  })

  console.log(removingUrl)

  if(loading) return <Loader />;

  return (
    <section className='booklist'>
      <div className='container-book'>
        <div className='section-title'>
        <h2>{resultTitle}</h2>
          <div className='booklist-content'>
            {removingUrl.slice(0,30).map((item, index) => (
              
              <Book key={index} {...item}/>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default BookList;