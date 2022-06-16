import { View, FlatList, Dimensions } from "react-native";
import Product from "../../src/components/Product";

import { useState, useEffect } from "react";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { database } from "../../db";
// import products from "../../data/products";

export const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  const collectionList = async () => {
    const productRef = collection(database, "Produits");
    const productDocuments = await getDocs(productRef); //retourne un objet associé à la collection

    return productDocuments.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  collectionList().then((productsList) => {
    console.log(productsList);
    products = productsList;
  });

  return (
    <>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={({ item }) => <Product product={item} />}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get("window").height - 49}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
        />
      </View>
    </>
  );
};
