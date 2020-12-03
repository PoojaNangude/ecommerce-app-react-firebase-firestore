import firebase from "../Components/Firebase/firebase";

export const fetchData = async () => {
  const db = firebase.firestore();
  const data = await db.collection("products").get();
  let parsed_data = data.docs.map((doc) => doc.data());

  return parsed_data;
};
