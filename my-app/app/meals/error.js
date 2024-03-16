'use client';
import React from 'react'

function Error({error}) {
  return (
   <main className='error'>
    <h1>An error occured!</h1>
    <p>Failed to fetch meal data</p>
    </main>
  );
}

export default Error

