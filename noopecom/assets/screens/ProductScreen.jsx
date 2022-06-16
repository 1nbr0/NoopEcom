import { View, FlatList, Dimensions } from "react-native";
import Product from "../../src/components/Product";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { database } from "../../db";

export const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  

    useEffect(() => {
      const collectionList = async () => {
        const productRef = collection(database, "Produits");
        const productDocuments = await getDocs(productRef); //retourne un objet associé à la collection
    
        const productList = productDocuments.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      };
    
    return () => collectionList();
  }, []);

  console.log(products);

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
