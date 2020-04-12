import Layout from '../components/Layout';
const settings = () => {
  return (
    <Layout>
      <div className="body">
        <h4>Simple Meal Planner</h4>
        <p>
          was created taking into account people who care about their eating
          habits, but do not want or cannot put much time into it.
        </p>
        <p>
          In couple minutes you can plan all your meals for the inteire week,
          and the application generates a shopping list based on your meals.
          Done! you have your meal plan and a shopping list at once.
        </p>
        <p>
          The application also allow you to add other items in your shopping
          list.
        </p>
        <p>
          {' '}
          For suggestion contact us <spam>rhaisaalves@gmail.com</spam>{' '}
        </p>
      </div>
      <style jsx>{`
        .body {
          border: 1.8px solid #222;
          border-radius: 50px;
          font-family: Text Me One;
          margin-left: 20px;
          margin-right: 20px;
          margin-top: 100px;
          padding-bottom: 80px;
          justify-content: center;
        }
        h4 {
          font-size: 25px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 80px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: bold;
        }
        p {
          width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </Layout>
  );
};
export default settings;
