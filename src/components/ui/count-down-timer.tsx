"use client";

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import { calculateTimeLeft } from '@/functions/misc-functions';
import { CountdownTimerProps, TimerState } from '@/types';


const CountdownTimer = ({ timestamp, clockOnly = true }: CountdownTimerProps) => {
  const formattedEndDate = moment.unix(timestamp || Date.now() / 1000).format('MMM DD');
  const [timeLeft, setTimeLeft] = useState<TimerState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: false, // EVENT HAS ENDED
    isLoading: true
  })

  useEffect(() => {
    const intervalId = setInterval(() => setTimeLeft(prevState => ({
      ...prevState,
      ...calculateTimeLeft(timestamp || Date.now() / 1000)
    })), 1000);

    return () => clearInterval(intervalId);
  }, [timestamp])
  
  if(timeLeft.isLoading) return <span>Loading campaign time</span>;
  
  if (timeLeft.completed) return <span>Campaign has ended</span>;
  
  return (
    clockOnly ?
      <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
    :
      <div className="">
        <h6 className="font-light text-sm">Donations end in</h6>
      
        <div className="flex place-content-between items-center">
          <span className='font-medium'>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
          <Badge variant="outline">
            <Image className="inline mr-[10px]"
              src="/img/date.svg"
              width={11}
              height={18}
              alt="Picture of the author"
            />
            {formattedEndDate}
          </Badge>
        </div>
      </div>
  )
};

export default CountdownTimer;
