import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';

const Calendar = () => {
  const [now, setNow] = useState(moment());
  const [monday, setMonday] = useState(now.clone().weekday(1));
  const [sunday, setSunday] = useState(now.clone().weekday(7));

  const leftArrow = () => {
    console.log('leftArrow');
    setMonday(monday.clone().subtract(7, 'days'));
    setSunday(monday.clone().subtract(1, 'day'));
  };

  const rigthArrow = () => {
    console.log('rigthArrow');
    setMonday(sunday.clone().add(1, 'day'));
    setSunday(sunday.clone().add(7, 'day'));
  };

  return (
    <div className="calender">
      <div>
        <button onClick={leftArrow}>
          <img className="arrow" src="/arrow-left.svg" />
        </button>
      </div>
      {monday.format('DD.MM - ') + sunday.format('DD.MM')}
      <div>
        <button onClick={rigthArrow}>
          <img className="arrow" src="/arrow-right.svg" />
        </button>
      </div>
      <style jsx>{`

      .calender{
          display: flex;
          width:250px;
          border 1.8px solid #222;
          border-radius:50px;
          font-size:15px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 50px;
          justify-content:center;
          font-family:Text Me One;
          
        }
        .arrow {
          display: flex;
          width: 15px;
          margin-left: 20px;
          margin-right: 20px;
        }

        button {
          background: none;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Calendar;

// 'DD.MM'
