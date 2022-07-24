import {useState, useEffect} from 'react';
import {useQuery } from "react-query";
import Sky from "./Sky";


export default function WeatherQuery (){
    const [intervalMs, setIntervalMs] = useState()
    const [dayOrNight, setDayOrNight] = useState("")
    const lat = 53;
    const lon = -6;

    const timeSetter = () => {
        if(data === undefined){
            return "error"
        }
        // checking whether it is day or night, function returns strings of 
        // day or night respectively

        const timeUnix = new Date();
        const currentTimeSec = Math.floor(timeUnix.getTime() / 1000);

        const timeRespectiveToSunset = data.sys.sunset - currentTimeSec;

        if (timeRespectiveToSunset > 0) {
            return 'daytime';
        }
        else if (timeRespectiveToSunset < 0) {
            return 'nighttime';
        }
        // it should never get here, but should it the function will default to 
        // 12hrs for day and night
        return 'error'
    }
 
    // check if its day or night in this function
    const fetchWeatherData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=53&lon=-7&appid=b2fd62ed2a38300f68d00a9bc71c9ac9`)
        return response.json();
    }

    const {data, status} = useQuery(
        ["repoData"], 
        fetchWeatherData, 
        {refetchInterval: 1000000000, 
        staleTime: Infinity}
        );

    useEffect(() => {
        const timerId = setInterval(setDayOrNight(timeSetter), 10000);
        return function cleanup(){
                clearInterval(timerId);
            }
            })

    
   if (status === "loading"){
    return <div>loading...</div>
   } ;

   
   


   // in the case of an error the 
   if (status === "error"){
    // sets the refetch interval to 1hr
    setIntervalMs(36000000)
    return <Sky type="error"/>
   };

   //if the data is returned we set a refetch interval for when the next sunset/sunrise is to refresh the interface
   
   return(
        <Sky type = {dayOrNight} sunrise={data.sys.sunrise} sunset={data.sys.sunset}/>
    ); 
    }

    function DayOrNight(data){
    }

    function RefetchTime(){
        // check if the time is in day or night then check how long it is until 00:00 then set the stale time to that so that it refreshes the sunrise time
        
    }
    


