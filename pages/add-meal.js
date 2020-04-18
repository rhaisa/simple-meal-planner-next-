import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import Layout from '../components/Layout';
import { weekdays } from 'moment';

const AddMeal = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  // is to keep the object in the memory of React - I'm saying: save in the memory it for me please.
  const [draft, setDraft] = useState({
    id: uuid(), //following the library instructions
    name: '',
  });
  const [meal, setMeal] = useState({
    id: uuid(),
    date: router.query.date,
    mealType: router.query.type,
  });
  // Here the Draft is replaced by a new version (name: event.target.value) -I'm saying: get this new information and save.
  const handleChange = (event) => {
    const newDraft = {
      ...draft, //is geting of the draft object (id and name)
      name: event.target.value,
    };
    setDraft(newDraft); // this replace the draft to the newDraft
  };
  console.log(meal);

  //The information here will be saved in localStorage(browser). JSON.stringify is to transform the object(item) into a string.
  const addMealItem = () => {
    const newItems = [...items, draft]; //...it deconstructs the list into a new one/ draft is a object.
    setItems(newItems);
    const newItemsString = JSON.stringify(newItems);
    localStorage.setItem('items', newItemsString);
    setDraft({
      id: uuid(),
      name: '',
    });
  };

  function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id); // if item.id is different from the given id, keep the item.
    //I'm saying: setItems please replace the "items" variable with this new list.
    setItems(newItems);
  }

  return (
    <Layout>
      <input
        onChange={handleChange}
        value={draft.name}
        className="inputbox"
        placeholder="Type Here"
      />
      <button className="btn" onClick={addMealItem}>
        Add Meal
      </button>
      <div>
        {items.map((item) => {
          return (
            <div className="list" key={item.id}>
              {item.name}
              <button className="btnDelete" onClick={() => deleteItem(item.id)}>
                <img className="trash" src="/trash.png" />
              </button>
            </div>
          );
        })}
      </div>

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

        .list {
          display: flex;
          width: 200px;
          max-width: 60%;
          border: 1.8px solid #222;
          border-radius: 50px;
          font-size: 15px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          justify-content: space-between;
          text-align: center;
          padding: 0 13px;
          font-family: Text Me One;
          font-size: 16px;
        }

        .btn {
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

        .btnDelete {
          background: none;
          border: none;
        }

        .trash {
          width: 20px;
          margin-left: auto;
        }
      `}</style>
    </Layout>
  );
};
export default AddMeal;
