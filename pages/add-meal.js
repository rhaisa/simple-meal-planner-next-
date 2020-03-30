import Layout from '../components/Layout';
const addMeal = () => {
  return (
    <Layout>
      <input className="inputbox" placeholder="Type Here" />
      <button>Add Meal</button>
      <style jsx>{`
        .inputbox {
          display: flex;
          border: none;
          border-bottom: 1px solid #222;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          font-family: Text Me One;
        }
        button {
          display: flex;
          margin-top: 40px;
          margin-left: auto;
          margin-right: auto;
          width: 150px;
          background-color: #222;
          border-radius: 70px;
          color: #fff;
          justify-content: center;
          font-family: Text Me One;
        }
      `}</style>
    </Layout>
  );
};
export default addMeal;
