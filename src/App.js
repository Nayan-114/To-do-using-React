import React from 'react';
import { useState } from 'react/cjs/react.development';
import ListComponent from './ListComponent';
import './index.css'
const App = () => {

  const [inputList,setInputList] = useState('');
  const [List,setList] = useState([]);
  const changeHandler = (e) =>
  {
    setInputList(e.target.value);
  }
  const eventHandler = () =>
  {
    // const nList = [...List,inputList]
    setList( (prevList) =>
    {
      return [...prevList,inputList];
    });
    setInputList('');
  }

  const deleteItems = (id) =>
    {
        console.log('deleted');
        setList((prevList) =>{
          return prevList.filter((arrElem, index)=>{
            return id !==index;
          })
        });
    }

  return (
    <>
      <div className="main_div">
          <div className = "center_div">
            <br/>
            <h1>To-Do List</h1>
            <br/>
            <input text="text" name = "List" value={inputList} onChange={changeHandler} placeholder = "Add a Item" />
            <button onClick={eventHandler}> + </button>
            <ol>
              {
                List.map( (listValue,index) =>
                {
                  return <ListComponent 
                  key = {index}
                  id = {index} 
                  listVal = {listValue}
                  onSelect = {deleteItems}/>
                })
              }
            </ol>
          </div>
      </div>
    </>
  );
}

export default App;
