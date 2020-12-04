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
};

export const AddItemToCart = async (id,userId) => {
  const db = firebase.firestore();
let usr=firebase.firestore().collection("users").where("id", "==", userId)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          if((doc.data()["cart"]).includes(id)==false){
          doc.ref.update({ cart: [...doc.data()["cart"], id] });}
      });
 })
}

export const FetchCart = async (userId) =>{
  const db = firebase.firestore();
  let data = await db.collection("users").where("id","==",userId).get();
  const usr= data.docs.map((doc) =>{
      return(doc.data());
  })
  return(usr);
}

export const FetchCartItems = async (cartid) =>{
  // console.log("in")
  const db = firebase.firestore();
  let data = await db.collection("products").where("id","==",cartid).get();
  const prd= data.docs.map((doc) =>{
      return(doc.data());
    
  })
  return(prd);

}

export const fetchDeals = async () => {
  const db = firebase.firestore();
  const data = await db.collection("deals").get();
  const s = data.docs.map((doc) => doc.data());
  return s;
};
