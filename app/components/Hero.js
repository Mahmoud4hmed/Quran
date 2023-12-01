'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import cover from '../assets/bgr.png';
import Image from 'next/image';

function Hero() {

    const [ayat, setAyat] = useState([]);
    const [ayahs, setAyahs] = useState([]);

    const Alfatiha = async () => {
        const url = 'https://al-qur-an-all-translations.p.rapidapi.com/v1/surah/1';
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
            console.log(result.data);
            console.log(result.data.ayahs);
            setAyat([result.data]);
            setAyahs(result.data.ayahs);
        } catch (error) {
            console.error(error);
        } 
    }

    useEffect(() => {
        Alfatiha();
    }, []);

  return (
    <main className='flex flex-col items-center'>
        <Image src={cover} width={400} height={400} alt='picture' className='hover:scale-110 duration-300' />
        <div className="text-center mb-10 shadow-2xl shadow-[#81b29a] w-11/12 md:w-3/4 border-2 border-[#81b29a] rounded-3xl h-auto pb-5 text-[#1b1b1b]">
        {ayat.map((ayat) => (
            <div key={ayat.number}>
                <h3
                className="text-xl mb-5 font-bold justify-around border-b-2 border-[#81b29a] py-2"
                >{ayat.name}</h3>
            </div>
            ))}
            {ayahs.map((ayahs) => (
                <h4 
                key={ayahs.number}
                className='text-3xl pb-3 text-end pr-5 cursor-pointer hover:text-[#81b29a] duration-200 hover:bg-[#edecdc]'>
                {ayahs.text}
                <span className='border border-[#81b29a] rounded-full p-1 text-lg'>{ayahs.number}</span>
                </h4>
            ))}
        </div>
        
    </main>
  )
}

export default Hero
