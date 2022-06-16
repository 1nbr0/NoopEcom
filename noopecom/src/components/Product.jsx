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
import { database } from "../../db";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { Title } from "./Title";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";

export default function Product(props) {
  const [product, setProduct] = useState(props.product);
  const [isLiked, setIsLiked] = useState(false);
  const bottomSheet = useRef();
  const bottomSheetSideBar = useRef();

  const onLikesPress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setProduct({
      ...product,
      like_nb: product.like_nb + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const description = product.desc;

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
            uri: product.img,
          }}
          resizeMode={"cover"}
        />
        <Title>{product.name}</Title>
        <View style={styles.BottomContainer}>
          <View style={styles.sideBar}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={onLikesPress}
            >
              <AntDesign
                name="heart"
                size={36}
                color={isLiked ? "red" : "black"}
              />
              <Text style={styles.statsLabel}>{product.like_nb}</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.modalBottomSheetSideBar}>
              <BottomSheet
                hasDraggableIcon
                ref={bottomSheetSideBar}
                height={350}
              >
                <Text>Les commentaires sont ici pour augmenter les stats</Text>
              </BottomSheet>
              <TouchableOpacity
                onPress={() => bottomSheetSideBar.current.show()}
              >
                <FontAwesome5 name="comment-dots" size={36} color="black" />
                <Text>123</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View style={styles.DescContainer}>
            <SafeAreaView style={styles.modalBottomSheet}>
              <BottomSheet hasDraggableIcon ref={bottomSheet} height={350}>
                <Text>{description}</Text>
              </BottomSheet>
              <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                <Text>{descSubstract}</Text>
              </TouchableOpacity>
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
    justifyContent: "space-between",
  },
  sideBar: {
    width: "auto",
    padding: 6,
    height: "45%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  DescContainer: {
    padding: 5,
    width: "100%",
    flexDirection: "row",
  },
  boldText: {
    paddingLeft: 4,
    color: "white",
    fontWeight: "600",
  },
  modalBottomSheet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  statsLabel: {
    alignSelf: "center",
    color: "black",
  },
});
