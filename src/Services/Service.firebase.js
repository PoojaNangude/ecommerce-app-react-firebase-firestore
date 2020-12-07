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
  const usr = data.docs.map((doc) => {
    if (doc.data()["password"] === password) {
      return doc.data();
    }
  });
  return usr;
};

export const AddItemToCart = async (id, userId) => {
  const db = firebase.firestore();
  let msg = "";
  await db
    .collection("users")
    .where("id", "==", userId)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        if (doc.data()["cart"].includes(id)) {
          msg = "Item already exists in cart.";
        } else {
          doc.ref.update({ cart: [...doc.data()["cart"], id] });
          msg = "Product added to cart.";
        }
      });
    });
  return msg;
};

export const fetchUserId = async (userid) => {
  const db = firebase.firestore();

  const users = await db.collection("users").where("id", "==", userid).get();

  const prod = await db.collection("products").get();

  const prod_data = users.docs.map((doc) => {
    if (doc.data()["wishlist"].length === 0) {
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

  return prod_data;
};

export const fetchProductFromId = async (id) => {
  const db = firebase.firestore();

  const prod = await db.collection("products").where("id", "==", id).get();
  const prod_data = prod.docs.map((prod) => prod.data());

  return prod_data[0];
};

export const removeItem = async (userid, id) => {
  const db = firebase.firestore();
  let msg = "";
  await db
    .collection("users")
    .where("id", "==", userid)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach((doc) => {
        if (doc.data()["wishlist"].includes(id)) {
          doc.ref.update({
            wishlist: firebase.firestore.FieldValue.arrayRemove(id),
          });
          msg = "wishlist is updated";
        }
      });
    });
  return msg;
};

export const updateList = async (userid, prodid) => {
  const db = firebase.firestore();

  let msg = "";
  await db
    .collection("users")
    .where("id", "==", userid)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach((doc) => {
        if (doc.data()["wishlist"].includes(prodid)) {
          msg = "Item already exists in wishlist.";
        } else {
          doc.ref.update({ wishlist: [...doc.data()["wishlist"], prodid] });

          msg = "Product added to wishlist.";
        }
        //doc.ref.update({ wishlist: [] });
      });
    });

  return msg;
};

export const fetchDeals = async () => {
  const db = firebase.firestore();
  const data = await db.collection("deals").get();
  const s = data.docs.map((doc) => doc.data());
  return s;
};

export const FetchUserCart = async (userId) => {
  const db = firebase.firestore();
  const users = await db.collection("users").where("id", "==", userId).get();
  const prod = await db.collection("products").get();

  const cartfetch = users.docs.map((doc) => {
    if (doc.data()["cart"].length === 0) {
      return null;
    } else {
      let cart = [];
      for (let id of doc.data()["cart"]) {
        prod.docs.map((prod) => {
          if (prod.data()["id"] === id) cart.push(prod.data());
        });
      }
      return cart;
    }
  });
  return cartfetch;
};

export const RemoveItemFromCart = async (id, userId) => {
  const db = firebase.firestore();
  let msg = "";
  await db
    .collection("users")
    .where("id", "==", userId)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        if (doc.data()["cart"].includes(id)) {
          doc.ref.update({
            cart: firebase.firestore.FieldValue.arrayRemove(id),
          });
          msg = "Item deleted from cart";
        }
      });
    });
  return msg;
};
