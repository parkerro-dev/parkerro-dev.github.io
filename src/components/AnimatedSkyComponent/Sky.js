import {useState, useEffect} from 'react'


import { motion, 
        useTime,
        useTransform,
        useMotionValue } from "framer-motion";


export default function Sky(props) {
    //Checking what time of day it is

    console.log(props.type)
    
    if (props.type === "daytime"){
        return <DayTime sunrise={props.sunrise} sunset={props.sunset}/>;
    }

    if (props.type === "nighttime"){
        return <NightTime sunrise={props.sunrise} sunset={props.sunset}/>;
    }

    if (props.type === "error"){
        //first have to decide if its day or night
        //going to set sunrise to 6am and sunset to 6pm
        /* 
            const today = new Date()
            const sunrise = today.setHours(6, 0, 0, 0);
            const sunset = today.setHours(18, 0, 0, 0);

            const currentTimeMsec = new Date()
            const timeRespectiveToSunset = sunset - currentTimeMsec;

            const sunriseSec = Math.floor(sunrise.getTime()/1000)
            const sunsetSec = Math.floor(sunset.getTime()/1000)

            if (timeRespectiveToSunset > 0) {
                return <DayTime sunrise={sunriseSec} sunset={sunsetSec} />
            }
            else if (timeRespectiveToSunset < 0) {
                return <NightTime sunrise={sunriseSec} sunset={sunsetSec}/>
            }
        */
        }

        
    
}


function DayTime(props){
    const timeOfDayMs = () => {return (props.sunset - props.sunrise)*1000;}

    // the timeOffsetOfDay function calculates how far into daylight the user
    // already is and returns the percentage of the day completed, this is
    // then used to set the x position of he sun in the animation function
    const timeOffsetOfDay = () => {
        const unixHrsOfDayLight = props.sunset-props.sunrise;
        const timeUnix = new Date();
        const timeStanpInSeconds = Math.floor(timeUnix.getTime() / 1000);
        const unixHrsOfDayConsumed = timeStanpInSeconds - props.sunrise;
        return(unixHrsOfDayConsumed/unixHrsOfDayLight)
    }
    const dimensionOfDiv = {height: 300, width: 600};
    const dimensionOfAnimDiv = {height: 50, width: 50, radius: 50};

    // the scaling factor is used to scale the vertex y position of the 
    // parabolic trajectory in which the sun takes, as without the square root
    // cannot compute for large widths and low heights
    var scalingFactor = ((dimensionOfDiv.width - dimensionOfDiv.height)/100)*25;

    // the c in the quadratic equation used to find the y position is just
    // a scaling factor based on the roots and height of the parabola
    // the 7/8 are so it doesnt take up 100% 0f the box
    const cInQuadratic = ((2*(Math.sqrt(4*((7/8)*(((dimensionOfDiv.height+
        scalingFactor))))**2 - (dimensionOfDiv.width-50)**2))/
        (dimensionOfDiv.width-50)**2));
    console.log(cInQuadratic);
    
    // the motion for the sun element
    const time = useTime();
    const x = useTransform(time, 
        [0,(timeOfDayMs())], 
        [(timeOffsetOfDay())*(dimensionOfDiv.width-25), 
        dimensionOfDiv.width-25], 
        { clamp: true });
    const y = useTransform(x, 
        value => cInQuadratic*(value**2 - (dimensionOfDiv.width-50)*value))

    
    
    //colours for background
    const skyColor = dimensionOfDiv.width/5
    const background = useTransform(x, [0,skyColor, 2*skyColor, 3*skyColor, 4*skyColor, 5*skyColor], 
        [("linear-gradient(195deg, rgba(83,105,246,1) 0%, rgba(16,153,185,1) 25%, rgba(255,201,0,1) 100%)"),
        ("linear-gradient(195deg, rgba(83,105,246,1) 0%, rgba(16,153,185,1) 25%, rgba(255,201,0,1) 100%)"), 
        ("linear-gradient(180deg, rgba(159,171,246,1) 0%, rgba(38,211,251,1) 25%, rgba(0,255,231,1) 100%)"),
        ("linear-gradient(180deg, rgba(159,171,246,1) 0%, rgba(38,211,251,1) 25%, rgba(0,255,231,1) 100%)"),
        ("linear-gradient(150deg, rgba(112,131,247,1) 0%, rgba(41,181,213,1) 25%, rgba(4,170,190,1) 100%)"),
        ("linear-gradient(160deg, rgba(31,52,182,1) 0%, rgba(25,112,176,1) 25%, rgba(190,91,4,1) 100%)")],
        { clamp: true });
    console.log(background.current);
    return (
        <>
            <motion.div style={{background, 
                                'height': dimensionOfDiv.height, 
                                'width': dimensionOfDiv.width, 
                                'display': 'table-cell',
                                'vertical-align': 'bottom', 
                                'overflow': 'hidden'}}>
                
                <div>
                    <motion.div style={{x, y, 'background': 'rgb(253, 250, 212)',
                            'height': '50px',
                            'width': '50px', 
                            'border-radius': '50px'}}></motion.div>
                </div>
            </motion.div>

        </>
    )
}

function NightTime(props) {

    // to find the length of the night, the length of daylight is determined and
    // the length of night is found by subtracting 24hrs (in seconds)

    const nightLength = () => {
        const dayLightLengthInMsec = (props.sunrise - props.sunset)*1000;
        const twentyFourHoursInMsec = 86400000;
        return twentyFourHoursInMsec - dayLightLengthInMsec;
    }

    const nightTimeOffset = () => {
        const timeUnix = new Date();
        const currentTimeSec = Math.floor(timeUnix.getTime() / 1000);;
        const timeSinceSunsetSec = currentTimeSec - props.sunset;
        const percentageOfNightCompleted = timeSinceSunsetSec/(nightLength()/1000);
        return percentageOfNightCompleted;
    }


    const dimensionOfDiv = {height: 300, width: 600};
    const dimensionOfAnimDiv = {height: 50, width: 50, radius: 50};

    var scalingFactor = ((((dimensionOfDiv.width/100 - dimensionOfDiv.height/100)*25)));
    // the 7 and /8 are so it doesnt take up 100% 0f the box
    const cInQuadratic = ((2*(Math.sqrt(4*((7/8)*(((dimensionOfDiv.height+scalingFactor))))**2 - (dimensionOfDiv.width-50)**2))/(dimensionOfDiv.width-50)**2));
    console.log(cInQuadratic);
    
    // the motion for the sun element
    const time = useTime();
    const x = useTransform(time, 
        [0,(nightLength())], 
        [(nightTimeOffset())*(dimensionOfDiv.width-25), dimensionOfDiv.width-25], 
        { clamp: true });
    const y = useTransform(x, 
        value => cInQuadratic*(value**2 - (dimensionOfDiv.width-50)*value))

    
    
    //colours for background
    const skyColor = dimensionOfDiv.width/5
    
    const background = useTransform(x, [0,skyColor, 2*skyColor, 3*skyColor, 4*skyColor, 5*skyColor], 
        [("linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,3,1) 35%, rgba(0,0,0,1) 100%)"),
        ("linear-gradient(195deg, rgba(83,105,246,1) 0%, rgba(16,153,185,1) 25%, rgba(255,201,0,1) 100%)"), 
        ("linear-gradient(180deg, rgba(159,171,246,1) 0%, rgba(38,211,251,1) 25%, rgba(0,255,231,1) 100%)"),
        ("linear-gradient(180deg, rgba(159,171,246,1) 0%, rgba(38,211,251,1) 25%, rgba(0,255,231,1) 100%)"),
        ("linear-gradient(150deg, rgba(112,131,247,1) 0%, rgba(41,181,213,1) 25%, rgba(4,170,190,1) 100%)"),
        ("linear-gradient(160deg, rgba(31,52,182,1) 0%, rgba(25,112,176,1) 25%, rgba(190,91,4,1) 100%)")],
        { clamp: true });
    console.log(background.current);
    return (
        <>
            <motion.div style={{'background': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,3,1) 35%, rgba(0,0,0,1) 100%)', 
                                'height': dimensionOfDiv.height, 
                                'width': dimensionOfDiv.width, 
                                'display': 'table-cell',
                                'vertical-align': 'bottom', 
                                'overflow': 'hidden'}}>
                
                <div>
                    <motion.div style={{x, y, 'background': 'rgb(255, 245, 245)',
                            'height': '50px',
                            'width': '50px', 
                            'border-radius': '50px'}}/>
                </div>
            </motion.div>

        </>
    )
}

function PercentageOfDay(props){
    const [percentageOfDay, setPercentageOfDay] = useState(0)

    const timeOffsetOfDay = () => {
        const unixHrsOfDayLight = props.sunset-props.sunrise;
        const timeUnix = new Date();
        const timeStanpInSeconds = Math.floor(timeUnix.getTime() / 1000);
        const unixHrsOfDayConsumed = timeStanpInSeconds - props.sunrise;

        setPercentageOfDay(unixHrsOfDayConsumed/unixHrsOfDayLight)
    }

    useEffect(() =>{
        const timerId = setInterval(timeOffsetOfDay, 1000);
        return function cleanup(){
            clearInterval(timerId);
        }
    })

    return(
        <div>sunrise was at: {new Date(props.sunrise*1000).toLocaleTimeString()}, {percentageOfDay.toFixed(8)*100}% through the day, sunset will be at: {new Date(props.sunset*1000).toLocaleTimeString()}</div>

    )
    
}