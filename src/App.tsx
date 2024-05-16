import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [txt , updtTxt] = useState("..");
  const [txtList , updTxtList] = useState<any>([]);
  const del = (i : any)=>{
    txtList.splice( i , 1);
    updTxtList([...txtList]);
}
  const updat = (i : any)=>{
   console.log(txtList[i]);
   let userInp = prompt("EDIT IT...");
   txtList[i]= userInp;
   updTxtList([...txtList]);
}
  const deleteAll = () => {
   updTxtList([]);
}

  return (
    <div className="App">
      <div className="container">
        <div className="bk-wall">
          <div className="p-5">
            <h2 className='p-4'>TODO APP</h2>
            <div className="inp-content d-flex">
              <input className='m-3 border-0 border-bottom border-secondary-subtle bg-transparent'
               onChange={(e)=>{updtTxt(e.target.value)}} type="text" placeholder='ADD SOMETHING....' />
              <div className="inp-btns m-4">
                <button className='add-btn mx-2 py-2 bg-transparent'
                 onClick={()=>{
                  txtList.push(txt);
                  updTxtList([...txtList])}} >ADD</button>
                <button className='delAll-btn mx-2 py-2 bg-transparent'
                 onClick={deleteAll} >DELETE ALL</button>
              </div>
            </div>
            <div className="userInp my-3 w-50">
              <div className=" p-1">
                {txtList.map((x: any , i: any)=>{
                  return <p className='userInp-bg text-capitalize' key={i}>{x}<button className='delAll-btn ms-5 mx-2 py-2 bg-transparent'
                   onClick={()=>{del(i)}} >REMOVE</button>
                   <button className='edit-btn ms-3 mx-2 py-2 bg-transparent' onClick= {()=>{updat(i)}}>EDIT</button></p>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
