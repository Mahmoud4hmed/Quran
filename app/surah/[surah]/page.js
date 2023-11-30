'use client';
import React, { useState, useEffect } from 'react'

function Surah({ params }) {

    const [ayah, setAyah] = useState([]);

    const getAyah = async () => {
        
        const url = `https://al-quran1.p.rapidapi.com/${params.surah}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f34b2f1501msh6df66d700d84d19p156a3fjsn3cdd161b07be',
                'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setAyah(result);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getAyah();
    }, [])

  return (
    <>
      <h1 className='text-xl p-10 text-black'>{ayah.description}</h1>
    </>
  )
}

export default Surah
