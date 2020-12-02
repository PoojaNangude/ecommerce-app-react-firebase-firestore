import React, {useEffect, useState} from "react";
import firebase from '../firebase';

function Data() {
  const [users,setUsers] = useState([]);
  const [products,setProducts]=useState([]);
  const [deals,setDeals] =useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map(doc => doc.data()));
    }
    fetchData();
  },[])

  return (
    <div>
      <ul>
      {users.map((user)=>{
        return <li key={user.id}>{user.username}
        
        </li>
      })}
      </ul>
    </div>
  );
}

export default Data;
