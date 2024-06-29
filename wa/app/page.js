"use client"
import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import weather from './component/weather.jsx'
import spinner from '../../public/images/Interwind-1s-200px.gif'
import './fade.css'

export default function Home() {
  let imgNumber;
  
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [randomImage, setRandomImage] = useState("");

  const getRandomImage = () => {
    const images = [0,1,2,3,4]
      imgNumber = images[Math.floor(Math.random() * images.length)];
      setRandomImage(`/images/${imgNumber}.webp`)
      
  }

  useEffect(() => {
    getRandomImage(); // setting image ONCE, as a DOM renders
  }, []);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=cc3022c02942dde8f35195e4d0955ee5&units=metric`
  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      
    })
    setCity('')
    setLoading(false)
  }

  if(loading) {
    return (
      <div>
        {<Spinner/>}
      </div>
    )
  }else {
    
    return (
      <>
      
      
    
        <main>
          <div>
            <Head>
              <title>Weather Next App</title>
              <meta name="description" content="Weather app created with nextjs"></meta>
              <link rel="href" href="./favicon.ico"/>
            </Head>
            
            {/*Overlay object */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10'/>
            {/*Bacground image /images/0.jpg*/ }
            <div className='w-full h-full fadeInImg'>
              {randomImage &&<Image src={randomImage} fill={true} className='object-cover' alt="A beautiful nature image"/>}
            </div>
            
            {/*Search schema */}
            <div className='relative flex justify-between items-center max-w-[600px] w-full m-auto pt-4 text-white z-10'>
              <form onSubmit={fetchWeather} className='relative flex justify-between items-center w-full m-auto bg-transparent border border-gray-300 p-3  text-white rounded-2xl'> 
                <div>
                  <input onChange={(e)=> setCity(e.target.value)} className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white" type="text" placeholder='Enter city'/>
                </div>
                <button onClick={fetchWeather}><BsSearch size={20}/></button>
              </form>
            </div>
              {/*Data display */}
            {weather.main && <Weather data={weather} />}
          </div>
          
          
        </main>
    </>
  )

  }
  }