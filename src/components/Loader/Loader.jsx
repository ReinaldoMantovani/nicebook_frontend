import React from 'react'

import LoaderImg from "../../images/loader.svg";
import "./loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c '>
        <img src={LoaderImg} alt='Loader' />
    </div>
  )
}

export default Loader;
