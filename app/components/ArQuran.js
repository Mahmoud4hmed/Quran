'use client';
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import DOMPurify from 'dompurify';

function ArQuran() {

    const [surah, setSurah] = useState([]);

    const getSurah = async () => {
        const url = 'https://al-qur-an-all-translations.p.rapidapi.com/v1/quran/quran-simple-clean';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f34b2f1501msh6df66d700d84d19p156a3fjsn3cdd161b07be',
                'X-RapidAPI-Host': 'al-qur-an-all-translations.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setSurah(result.data.surahs);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSurah();
    }, []); 
    
    return (
    <div>

        {surah.map((surah) => (
            <div key={surah.number} className="border mb-4 text-xl hover:shadow-2xl hover:text-[#edecdc] hover:scale-105 shadow-[#81b29a] shadow-sm text-center rounded-xl hover:bg-[#81b29a] cursor-pointer duration-300 border-[#81b29a] p-2">
                <Link href={`surah/${DOMPurify.sanitize(surah.number)}`}>
                <h1> <span className='bg-[#81b29a] p-2 m-3 rounded-full'>{DOMPurify.sanitize(surah.number)}</span> {DOMPurify.sanitize(surah.name)} </h1>
                    <h1>{DOMPurify.sanitize(surah.englishName)} | {surah.englishNameTranslation}</h1>
                </Link>
            </div>
        ))}
        
    </div>
  )
}

export default ArQuran
