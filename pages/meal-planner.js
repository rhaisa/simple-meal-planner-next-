import Layout from '../components/Layout';
import Calendar from '../components/Calendar';
import Link from 'next/link';

const MealPlanner = () => {
  return (
    <Layout>
      <Calendar />

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
        table {
          width: 100%;
          text-align: center;
          font-family: Text Me One;
        }
        thead {
          border-bottom: 1px solid #222;
        }
        .whiteLink {
          height: 68px;
          background-color: #fff;
        }
        .blackLink {
          height: 68px;
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
