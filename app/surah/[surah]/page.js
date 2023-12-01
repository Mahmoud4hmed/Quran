'use client';
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify';
import Navbar from '../../components/Navbar'

function Surah({ params }) {

    const [surah, setSurah] = useState([]);
    
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
            setSurah([result]);
            const ayahArray = Object.values(result.verses);
            setAyah(ayahArray);
        } catch (error) {
            console.error(error);
        }
        
    }

    useEffect(() => {
        getAyah();
    }, [])

  return (
    <>
    <Navbar />
    <button onClick={() => window.history.back()} className='text-2xl border-2 border-[#81b29a] text-[#1b1b1b] m-5 p-1 rounded-lg shadow-lg shadow-[#81b29a] hover:bg-[#81b29a] hover:text-[#edecdc] duration-200'>👈 عودة</button>
    <div className="flex flex-col items-center">
        {surah.map((surah, index) => (
            <div key={index} className="text-3xl border-2 w-80 border-[#81b29a] font-bold text-center text-[#81b29a] my-10 p-5 rounded-lg">
                <p>{surah.surah_name_ar}</p>
                <p>{surah.surah_name}</p>
            </div>
            
        ))}

        <div className="text-2xl w-11/12 text-end border-2 border-[#81b29a] font-bold text-[#1b1b1b] my-10 p-5 rounded-lg shadow-2xl shadow-[#81b29a]">
            {ayah.map((ayah, index) => (
                <h1 key={index}
                className='cursor-pointer hover:text-[#81b29a] duration-300 mb-5'>
                {ayah.content} <span className='text-sm border border-[#81b29a] rounded-full p-1'>{ayah.id}</span>
                </h1>
            ))}
        </div>
    </div>
    </>
  )
}

export default Surah
