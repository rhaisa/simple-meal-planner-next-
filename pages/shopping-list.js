import Layout from '../components/Layout';
const shoppingList = () => {
  return (
    <Layout>
      <div>
        <p>Planned Meals Items</p>
        <button>Clear all items</button>
      </div>
      <div>
        <p>Other Items </p>
        <div>
          <input className="inputbox" placeholder="Type Here" />
          <button className="add">Add</button>
        </div>
        <button>Clear all items</button>
      </div>

      <style jsx>{`
        p {
          font-size: 25px;
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
        .inputbox {
          display: flex;
          border: none;
          border-bottom: 1px solid #222;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          font-family: Text Me One;
        }
        .add {
          width: 60px;
        }
      `}</style>
    </Layout>
  );
};
export default shoppingList;
