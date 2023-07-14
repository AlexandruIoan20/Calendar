'use client'; 

import { useEffect } from 'react';

import { generateDate } from '@utils/calendar'; 

const Home = () => {
  console.log(generateDate()); 

  useEffect( () => {   console.log(generateDate());  }, [])
  return (
    <div>Home</div>
  )
}

export default Home