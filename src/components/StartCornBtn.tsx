'use client'
import React from 'react'
import {useState} from 'react'

export const StartCornBtn = () => {
  
  const [corn, setcorn] = useState(0)

  let startCorn = () => {
    // make fetch to server every second to get corn number and set corn state client
 
    fetch('http://localhost:8080/startcorn')


    let getcorns = () => {
      fetch('http://localhost:8080/corns')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setcorn(data.corns);
        })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }

    setInterval(getcorns, 2000);

  }


  let stopCorn = () => {
    
  }


  return (
    <div className='flex justify-center mt-20'>
      <div>
      <div className='flex justify-center mb-10 font-bold text-3xl'>{corn}</div>
      <button onClick={startCorn} className='border-2 border-green-500 rounded px-5 py-2 font-bold hover:bg-green-900 transition'>
        Start Corns
      </button>
      </div>
    </div>
  )
}
