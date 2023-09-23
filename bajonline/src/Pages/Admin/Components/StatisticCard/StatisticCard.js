import React from 'react'
import "./StatisticCard.css"

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StatisticCard = ({ props }) => {
  return (
    <div className='statistic__card' title='More Info'>
      <div className='left__part'>
        <div className='logo__container'>
          <span className="material-symbols-outlined">
            {props.icon}
          </span>
        </div>
        <h3>{props.mainText}</h3>
        <h1>{props.stat}</h1>
      </div>
      <div className='right__part'>
        <CircularProgressbar value={props.percentage} text={`${props.percentage}%`} strokeWidth={16} styles={buildStyles({ pathColor: "#726bfa", textColor: "#726bfa" })} />
      </div>
    </div>
  )
}

export default StatisticCard