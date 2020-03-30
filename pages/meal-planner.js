import Layout from '../components/Layout';
import Link from 'next/link';

const MealPlanner = () => {
  return (
    <Layout>
      <div className="calender">
        <img className="arrow" src="/arrow-left.svg" />
        23.03 - 29.03
        <img className="arrow" src="/arrow-right.svg" />
      </div>
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
          <tr className="whiteLink">
            <td className="letter">M</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
          <tr className="blackLink">
            <td className="letter">T</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
          <tr className="whiteLink">
            <td className="letter">W</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
          <tr className="blackLink">
            <td className="letter">Th</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
          <tr className="whiteLink">
            <td className="letter">F</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
          <tr className="blackLink">
            <td className="letter">S</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
          <tr className="whiteLink">
            <td className="letter"> Su</td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
            <td>
              <Link href="/add-meal">
                <a>New Meal</a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`

        .calender{
          display: flex;
          width:200px;
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
        .arrow{
          width:15px;
          margin-left: 15px;
          margin-right: 15px;
        }
        
        table{
          width:100%;
          text-align: center;
          font-family:Text Me One;
        
        }
        thead{
         border-bottom: 1px solid #222;
        }
        .whiteLink{
          
          height:68px;
          background-color: #fff;
        }
        .blackLink{
          
          height:68px;
          background-color: #222;
          color:white;
          justify-content:center;
        }
        .letter{
          text-align: center;
        }
        Link{
          
        }


        `}</style>
    </Layout>
  );
};
export default MealPlanner;
