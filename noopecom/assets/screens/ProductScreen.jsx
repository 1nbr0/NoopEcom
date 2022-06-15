import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import Product from "../../src/components/Product";
import products from "../../data/products";

export const ProductScreen = () => {
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
