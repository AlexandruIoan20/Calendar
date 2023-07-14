'use client'; 

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { generateDate } from '@utils/calendar';
import cn from '@utils/cn';  
import { months } from "@utils/months"; 

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const Home = () => {
  useEffect( () => {   console.log(generateDate());  }, []); 
  const DAYS: string []  = [ "S", "M", "T", "W", "T", "F", "S"]; 
  const CURRENT_DATE = dayjs(); 
  const [ today, setToday ] = useState <dayjs.Dayjs> (CURRENT_DATE); 
  const [ selectedDate, setSelectedDate ] = useState <dayjs.Dayjs>(CURRENT_DATE); 

  return (
    <div className = 'flex w-1/2 h-screen mx-auto divide-x-2 items-center'>
      <div className= 'w-96 h-96'>
        <div className = 'flex justify-between'>
            <h1 className = 'font-semibold'>
              {months[today.month()]}, { today.year()} 
            </h1>
            <div className = 'flex items-center gap-5'>
              <GrFormPrevious className = 'w-5 h-5 curor-pointer' onClick = { () => { setToday(today.month(today.month() - 1))}}/>
              today 
              <GrFormNext className = 'w-5 h-5 cursor-pointer' onClick = { () => { setToday(today.month(today.month() + 1))}}/> 
            </div>
        </div>
        <div className = 'w-full grid grid-cols-7'> 
          { DAYS.map((day, index) => { 
            return  ( 
              <h1 className = 'h-14 grid place-content-center text-sm' key = { index }> { day } </h1>
            )
          })}
        </div>
        <div className= 'w-full grid grid-cols-7'>
          { generateDate(today.month(), today.year()).map( ({ date, currentMonth, today }, index) => {  
            return ( 
              <div key = { index } className = 'h-14 border-t grid place-content-center'> 
                <h1 className= { cn( currentMonth ? "": "text-gray-400", today? "bg-red-600 text-white": "", 
                  "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all duraation-300 cursor-pointer", 
                  selectedDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white": "")}
                  onClick = { () => { setSelectedDate(date)}}>
                  { date.date ()}
                </h1>
              </div>
            )
          })}
        </div>
      </div>
      <div className = 'h-96 mx-4 pl-4 w-96'>
        <h1 className='font-semibold'> Schedule for { selectedDate.toDate().toDateString()} </h1>
        <p> No meetings today </p>
      </div>
    </div>
  )
}

export default Home