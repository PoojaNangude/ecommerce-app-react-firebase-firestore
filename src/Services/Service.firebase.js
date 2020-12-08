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

// function to fetch all products of a given category
export const fetchProductsAsPerCategory = async (category) => {
  const db = firebase.firestore();
  const data = await db
    .collection("products")
    .where("category", "==", category)
    .get();
  const category_data = data.docs.map((doc) => doc.data());

  return category_data;
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

// function to fetch all products from user's wishlist
export const fetchUserWishlist = async (userid) => {
  const db = firebase.firestore();
  const users = await db.collection("users").where("id", "==", userid).get();
  const products = await db.collection("products").get();

  const prod_data = users.docs.map((doc) => {
    if (doc.data()["wishlist"].length === 0) {
      return null;
    } else {
      let wishlist = [];
      for (let id of doc.data()["wishlist"]) {
        products.docs.map((prod) => {
          if (prod.data()["id"] === id) wishlist.push(prod.data());
        });
      }
      return wishlist;
    }
  });

  return prod_data;
};

// function to fetch a particular product's data given the product id
export const fetchProductFromId = async (id) => {
  const db = firebase.firestore();
  const product = await db.collection("products").where("id", "==", id).get();
  const prod_data = product.docs.map((prod) => prod.data());
  return prod_data[0];
};

// function to remove a particular product from user's wishlist
export const removeItemFromWishlist = async (user_id, product_id) => {
  const db = firebase.firestore();
  let msg = "";
  await db
    .collection("users")
    .where("id", "==", user_id)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach(async (doc) => {
        if (doc.data()["wishlist"].includes(product_id)) {
          doc.ref.update({
            wishlist: await firebase.firestore.FieldValue.arrayRemove(
              product_id
            ),
          });
          msg = "wishlist is updated";
        }
      });
    });
  return msg;
};

// function to add a product to user's wishlist given product id
export const AddItemToWishlist = async (user_id, product_id) => {
  const db = firebase.firestore();
  let msg = "";
  await db
    .collection("users")
    .where("id", "==", user_id)
    .get()
    .then((DocumentSnapshot) => {
      DocumentSnapshot.forEach((doc) => {
        if (doc.data()["wishlist"].includes(product_id)) {
          msg = "Item already exists in wishlist.";
        } else {
          doc.ref.update({ wishlist: [...doc.data()["wishlist"], product_id] });
          msg = "Product added to wishlist.";
        }
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

export const GetProductInformation = async(id) =>{
  const db = firebase.firestore();
  let data = await db
    .collection("products")
    .where("id", "==", id)
    .get();
  const product = data.docs.map((doc) => {
      return doc.data();
  });
  return product;
}