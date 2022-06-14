import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Title } from "./Title";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";

export default function Product() {
  const bottomSheet = useRef();
  const bottomSheetSideBar = useRef();

  return (
    <>
      <View style={styles.container}>
        <Title>Product Titl ezek, scv nedk jvndkj</Title>
        <View style={styles.BottomContainer}>
          <View style={styles.sideBar}>
            <Pressable>
              <AntDesign name="heart" size={36} color="black" />
              <Text>123</Text>
            </Pressable>
            <SafeAreaView style={styles.modalBottomSheetSideBar}>
              <BottomSheet
                hasDraggableIcon
                ref={bottomSheetSideBar}
                height={350}
              />
              <TouchableOpacity
                onPress={() => bottomSheetSideBar.current.show()}
              >
                <FontAwesome5 name="comment-dots" size={36} color="black" />
                <Text>123</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View style={styles.DescContainer}>
            <Text>Description</Text>
            <SafeAreaView style={styles.modalBottomSheet}>
              <BottomSheet
                hasDraggableIcon
                ref={bottomSheet}
                height={350}
                // sheetBackgroundColor={"transparent"}
              >
                <Text>Test</Text>
              </BottomSheet>
              <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                <Text style={styles.boldText}>Voir plus</Text>
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
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "space-between",
  },
  BottomContainer: {
    padding: 10,
    backgroundColor: "white",
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
    backgroundColor: "green",
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
});
