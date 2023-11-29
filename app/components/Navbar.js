'use client';
import react, { useState } from 'react';
// import CSS file named styles.css
import './styles.css'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav 
      className='flex flex-col border-b 
      shadow-md mb-3 shadow-[#a8a8a8]
      border-[#a8a8a8] rounded-xl px-10 
      py-3 bg-[#edecdc] text-[#1b1b1b]
     '>
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for a word"
            value={searchQuery}
            onChange={handleSearchChange}
            className='border border-[#a8a8a8] md:px-10 sm:px-3 py-1 rounded-full hover:scale-105 duration-200 focus:scale-105 focus:mr-2 hover:mr-2'
          />
          <button type="submit" className='mx-2 px-2 py-1 hover:font-bold rounded-md text-[#1b1b1b] hover:text-[#3d405b] hover:scale-105 duration-200 bg-[#81b29a]'>Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
