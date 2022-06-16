import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Title } from "./Title";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { BlurView } from "expo-blur";

export default function Product(props) {
  const [product, setProduct] = useState(props.product);
  const [isLiked, setIsLiked] = useState(false);
  const bottomSheet = useRef();

  const onLikesPress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setProduct({
      ...product,
      Like_Number: product.Like_Number + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const description = product.Description;

  var descSubstract = "";

  if (description.length > 25) {
    descSubstract = description.substring(description, 25) + " ... Voir plus";
  } else {
    descSubstract = description;
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.Image,
          }}
          resizeMode={"cover"}
        />
        <Title>{product.Name}</Title>
        <View style={styles.BottomContainer}>
          <View style={styles.sideBar}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={onLikesPress}
            >
              <View style={styles.likeContainer}>
                <AntDesign
                  name="heart"
                  size={34}
                  color={isLiked ? "red" : "black"}
                />
              </View>
              <BlurView intensity={80} tint="light" style={styles.statsLabel}>
                <Text>{product.Like_Number}</Text>
              </BlurView>
            </TouchableOpacity>
          </View>
          <View style={styles.descContainer}>
            <BlurView intensity={80} tint="light" style={styles.blurContainer}>
              <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                <Text style={styles.description}>{descSubstract}</Text>
              </TouchableOpacity>
            </BlurView>
            <SafeAreaView style={styles.modalBottomSheet}>
              <BottomSheet hasDraggableIcon ref={bottomSheet} height={200}>
                <View style={styles.modalBottomSheetContainer}>
                  <Text style={styles.descriptionInModal}>{description}</Text>
                </View>
              </BottomSheet>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height - 49,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  BottomContainer: {
    padding: 10,
    width: "100%",
    height: "40%",
    justifyContent: "space-around",
  },
  sideBar: {
    width: "auto",
    padding: 10,
    height: "45%",
    alignItems: "flex-end",
    marginRight: 10,
  },
  descContainer: {
    width: "100%",
    flexDirection: "row",
  },
  blurContainer: {
    padding: 5,
    borderRadius: 5,
  },
  descriptionInModal: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    color: "black",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 5,
  },
  modalBottomSheet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBottomSheetContainer: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  iconContainer: {
    alignItems: "center",
  },
  likeContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 55,
    height: 55,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 30,
  },
  statsLabel: {
    marginTop: 10,
    padding: 2,
    alignSelf: "center",
    color: "black",
    borderRadius: 5,
  },
});
