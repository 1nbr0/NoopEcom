import { View, FlatList, Dimensions, ActivityIndicator } from "react-native";
import Product from "../../components/Product";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../db";

export const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const collectionList = async () => {
      setLoading(true);
      const productRef = collection(database, "Produits");
      const productDocuments = await getDocs(productRef); //retourne un objet associé à la collection

      const productList = productDocuments.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setLoading(false);
    };

    return () => collectionList();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

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
