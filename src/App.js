import './index.css';
import { MyPRs } from './MyPRs';
import { useEffect, useState } from 'react';
import { getAllPRs, addPR, editPR, deletePR } from './FetchPRs';
import Image1 from './payment.jpg';


function App() {

  const [myPR, setPR] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [PRId, setPRId] = useState("");


  useEffect(() => {
    getAllPRs(setPR)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setPRId(_id)
  }


  return (
    <div>
      <div>
        <img src={Image1} alt='topPic'/>
              </div>
    <div className='text'> 
      <h1> PAYMENT REMINDER </h1>

      <input
      type='text'
      placeholder='Add a payment'
      value = {title} 
      onChange={(e) => setTitle(e.target.value)}
      />

      <button className='btn'
      disabled={!title}
      onClick =
      {editing ? () => editPR(PRId, title, setTitle, setPR, setEditing) : () => addPR(title, setTitle, setPR)}> 
      {editing ? "Edit" : "ADD"}
      </button>
    
      {myPR.map((PR) => 
      <MyPRs text={PR.title} key={PR._id}
      updatingInInput={() => updatingInInput(PR._id, PR.title)}
      deletePR={() => deletePR(PR._id, setPR)}
      />
      )}
    </div>
    </div>
  );
}

export default App;