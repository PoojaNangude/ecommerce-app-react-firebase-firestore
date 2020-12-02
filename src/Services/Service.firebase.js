import firebase from '../firebase';

export const fetchProducts = async () =>{
      const db = firebase.firestore();
      const data = await db.collection("products").get();
      const s=data.docs.map(doc => doc.data())
      return s;
    }

export const fetchUsers = async () =>{
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      const s=data.docs.map(doc => doc.data())
      return s;
}

export const fetchDeals = async () =>{
      const db = firebase.firestore();
      const data = await db.collection("deals").get();
      const s=data.docs.map(doc => doc.data())
      return s;
}
