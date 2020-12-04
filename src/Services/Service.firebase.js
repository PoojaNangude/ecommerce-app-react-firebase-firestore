import firebase from "../firebase";

export const fetchProducts = async () => {
  const db = firebase.firestore();
  const data = await db.collection("products").get();
  const s = data.docs.map((doc) => doc.data());
  return s;
};

export const fetchUsers = async (username, password) => {
  const db = firebase.firestore();
  let data = await db
    .collection("users")
    .where("username", "==", username)
    .get();

  const s = data.docs.map((doc) => {
    if (doc.data()["password"] === password) {
      return doc.data();
    }
  });
  return s;
};

export const fetchUserId = async (userid) => {
  const db = firebase.firestore();

  const users = await db.collection("users").where("id", "==", userid).get();

  const prod = await db.collection("products").get();

  const prod_data = users.docs.map((doc) => {
    console.log("doc data :", doc.data());
    if (doc.data()["wishlist"].length === 0) {
      console.log("wishlist is empty");
      return null;
    } else {
      let w = [];
      for (let id of doc.data()["wishlist"]) {
        prod.docs.map((prod) => {
          if (prod.data()["id"] === id) w.push(prod.data());
        });
      }
      return w;
    }
  });
  console.log("prod_data : ", prod_data);
  return prod_data;
};

export const updateList = async (userid, prodid) => {
  const db = firebase.firestore();
  console.log(prodid);
  let msg = "";
  await db
    .collection("users")
    .where("id", "==", userid)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        if (doc.data()["wishlist"].includes(prodid)) {
          console.log("Item already exists in wishlist.");
          msg = "Item already exists in wishlist.";
        } else {
          //doc.ref.update({ wishlist: [] });
          doc.ref.update({ wishlist: [...doc.data()["wishlist"], prodid] });
          console.log("Product added to wishlist.");
          msg = "Product added to wishlist.";
        }
      });
    });
  console.log(msg);
  return msg;
};

export const fetchDeals = async () => {
  const db = firebase.firestore();
  const data = await db.collection("deals").get();
  const s = data.docs.map((doc) => doc.data());
  return s;
};
