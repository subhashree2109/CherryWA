import React from 'react'
import Image from 'next/image'
const Weather = ({data}) => {
    //console.log(data)
    let code = data.weather[0].icon
    var currentdate = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[currentdate.getDay()];
    var datetime = day + " "
    + timeCorrection(currentdate.getHours()) + ":" 
    + timeCorrection(currentdate.getMinutes())

    function timeCorrection(timeC) {
        if(timeC) {
            if(timeC < 10 && timeC > 0) {
                timeC = "0" + timeC
                console.log(typeof timeC)
            }
            if(timeC == 0) {
                timeC = "00"
            }
        }
    
        return timeC
    }
    return (
        <div className='relative flex-col justify-between max-w-[650px] w-full h-[90vh] m-auto text-white z10'>
            {/*top bar */}
            <div className='relative flex justify-between pt-12 text-white'>
                <div className='flex flex-col items-center text-white'>
                    <p className='text-4xl font-semibold text-center pb-6 text-white z-10'>{data.name}</p>
                    <p className='text-2xl text-center pb-6 text-white z-10'>{datetime}{", "}{data.weather[0].main}</p>
                    
                </div>
                <div className='flex flex-row'>
                    <Image src={`https://openweathermap.org/img/wn/${code}@2x.png`} width="100" height="100" alt="/"/>
                    <p className='text-9xl z-10'>{data.main.temp.toFixed(0)}&#176;</p>
                </div>
                
            </div>
            {/*Bottom */}
            <div className='bg-black/50 relative p-8 rounded-md z-10'>
                
                <div className='flex justify-between text-center'>
                    <div>
                        <p className='font-bold text-2xl text-orange-500'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels Like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl text-orange-500'>{data.main.humidity.toFixed(0)}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl text-orange-500'>{data.wind.speed.toFixed(0)}KMH</p>
                        <p className='text-xl'>Winds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather

