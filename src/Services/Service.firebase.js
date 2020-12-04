import firebase from "../firebase";

export const fetchProducts = async () => {
  const db = firebase.firestore();
  const data = await db.collection("products").get();
  const s = data.docs.map((doc) => doc.data());
  return s;
};

export const fetchUsers = async (username, password) => {
  const db = firebase.firestore();
  let data = await db.collection("users").where("username","==",username).get();
  const usr= data.docs.map((doc) =>{
    if(doc.data()["password"]===password){
      return(doc.data());
    }
  })
  return(usr);

  // const data = db.collection("users").where("username", "==", username)
  //   .get()
  //   .then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //           let usr = doc.data();
  //           console.log("user",usr);
  //           return(usr)
  //       });
  //   })
  //   console.log("data",data);
  //   return (data);

  // console.log(data);
  // const s = data.docs.map((doc) => doc.data());
  // const rec=s.filter(s => s.username===username);
  // console.log(rec[0]);
  // return s;
};

export const fetchDeals = async () => {
  const db = firebase.firestore();
  const data = await db.collection("deals").get();
  const s = data.docs.map((doc) => doc.data());
  return s;
};
