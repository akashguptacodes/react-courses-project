import React from 'react';
import '../Spinner.css';
import clsx from 'clsx';


export const Spinner = () => {
  return (
    <div className="spinner-box">
        <div className='spinner'></div>
        <p className="loading">Loading....</p>
    </div>
  )
}


export default Spinner;