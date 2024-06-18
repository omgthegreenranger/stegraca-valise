import React, {useState, useEffect } from "react";
import './frames.css';
import {Contact} from '../index'

export default function Frames({ layout, frontNav, setFrontNav }) {
    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds()
      })

      useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          setTime({
            minutes: date.getMinutes(),
            hours: date.getHours(),
            seconds: date.getSeconds()
          })
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])

      const convertToTwoDigit = (number) => {
        return number.toLocaleString('en-US', {
          minimumIntegerDigits: 2
        })
      }

      const nowTime = () => <span>{convertToTwoDigit(time.hours)} {convertToTwoDigit(time.minutes)}{convertToTwoDigit(time.seconds)}</span>

      return(
        <div className="frametop">
            <div className="top-elements top-craft craft" onClick={() => setFrontNav(true)}>CARDIECRAFT.CA</div>
            <div className="top-elements">{convertToTwoDigit(time.hours)}:{convertToTwoDigit(time.minutes)}:{convertToTwoDigit(time.seconds)}</div>
            <div className="top-elements"><Contact position="top" /></div>
        </div>
    )
}