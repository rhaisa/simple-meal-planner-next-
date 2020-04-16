import React, { useState } from 'react';
import Layout from '../components/Layout';
import Calendar from '../components/Calendar';
import Link from 'next/link';
import moment from 'moment';

const MealPlanner = () => {
  const [now] = useState(moment());
  const [monday, setMonday] = useState(now.clone().weekday(1));
  const [sunday, setSunday] = useState(now.clone().weekday(7));
  const tuesday = monday.clone().add(1, 'day');
  const wednesday = tuesday.clone().add(1, 'day');
  const thursday = wednesday.clone().add(1, 'day');
  const friday = thursday.clone().add(1, 'day');
  const saturday = friday.clone().add(1, 'day');
  const daysOfTheWeek = [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  ];

  return (
    <Layout>
      <Calendar
        monday={monday}
        sunday={sunday}
        setMonday={setMonday}
        setSunday={setSunday}
      />

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {daysOfTheWeek.map(day => {
            const urlDate = day.format('DD-MM-YYYY');
            console.log(urlDate);
            return (
              <tr key={day.format()}>
                <td className="letter">{day.format('dd')}</td>
                <td>
                  <Link href={`/add-meal?type=breakfast&date=${urlDate}`}>
                    <a>New Meal</a>
                  </Link>
                </td>
                <td>
                  <Link href={`/add-meal?type=lunch&date=${urlDate}`}>
                    <a>New Meal</a>
                  </Link>
                </td>
                <td>
                  <Link href={`/add-meal?type=dinner&date=${urlDate}`}>
                    <a>New Meal</a>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <style jsx>{`
        table {
          width: 100%;
          text-align: center;
          font-family: Text Me One;
        }
        thead {
          border-bottom: 1px solid #222;
        }
        tr {
          height: 68px;
        }
        tr:nth-child(odd) {
          background-color: #fff;
        }
        tr:nth-child(even) {
          background-color: #222;
          color: white;
          justify-content: center;
        }
        .letter {
          text-align: center;
        }
        link {
        }
      `}</style>
    </Layout>
  );
};
export default MealPlanner;
