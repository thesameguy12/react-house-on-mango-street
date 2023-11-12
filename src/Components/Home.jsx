import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate=useNavigate()
    return (
        <div className='home'>
            <h5 className='welcome'>Welcome to The House on Mango Street</h5>
            <div className='details'>
                <p>"The House on Mango Street" is a 1984 novel by Mexican-American author Sandra Cisneros.</p>
                <p>It follows the life of Esperanza Cordero, a 12-year-old Chicana girl in Chicago's Hispanic quarter over a year. The book explores Mexican-American culture, social issues, and gender. It's a Chicano literature classic, with over 6 million copies sold, translated into 20 languages, and a New York Times Best Seller. It has received literary awards and was adapted into a stage play. While facing censorship challenges, it remains a significant coming-of-age novel for young adults.</p>
                
            </div>
            <button className='startReading' onClick={()=>{
                navigate("/story")
            }}>START READING</button>
        </div>
    );
}

export default Home;