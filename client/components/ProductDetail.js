import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const { productData } = route.params;
  const [newComment, setNewComment] = useState("");
  const [altProducts, setAltProducts] = useState([]);
  const screenHeight = Dimensions.get("window").height;
  const dynamicKeyboardOffset = screenHeight * 0.25;
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("http://192.168.191.159:8000/api/products").then((response) => {
      const filteredProducts = response.data.filter(
        (product) => product._id !== productData._id
      );
      setAltProducts(filteredProducts);
    });
  }, [altProducts]);

  const handleCommentSubmit = async () => {
    try {
      if (newComment.trim() === "") {
        alert("Please enter a comment");
        return;
      }

      const response = await axios.post(
        `http://192.168.191.159:8000/api/products/${productData._id}/comment`,
        { comment: newComment }
      );

      // Update the state with the updated comment list
      productData.comment = response.data.comment;
      setNewComment("");
    } catch (error) {
      console.error("Error submitting the comment:", error);
      alert("There was an error submitting your comment. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      enabled={true}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={dynamicKeyboardOffset}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Image
                  source={{ uri: productData.photos }}
                  style={styles.productImage}
                />
                <View style={styles.headerText}>
                  <Text style={styles.productName}>
                    {productData.productName}
                  </Text>
                  <Text style={styles.countryOfOrigin}>
                    {productData.categoryName}
                  </Text>
                </View>
              </View>
              <Text style={styles.description}>{productData.description}</Text>

              {productData.ingredients && (
                <>
                  <Text style={styles.sectionTitle}>Ingredients</Text>
                  {productData.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.listItem}>
                      {ingredient}
                    </Text>
                  ))}
                </>
              )}
              {productData.minerals && (
                <>
                  <Text style={styles.sectionTitle}>Minerals</Text>
                  {productData.minerals.map((mineral, index) => (
                    <Text key={index} style={styles.listItem}>
                      {mineral}
                    </Text>
                  ))}
                </>
              )}
            </View>
          </View>

          {altProducts && (
            <View style={styles.alt}>
              <Text style={styles.sectionTitle}>Alternative Products</Text>
              <FlatList
                horizontal
                data={altProducts}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ProductDetail", {
                        productData: item,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.photos }}
                      style={styles.altProductImage}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item._id.toString()}
              />
            </View>
          )}
          {productData.comment && (
            <>
              <Text style={styles.sectionTitle}>Comments</Text>
              {productData.comment.map((comments, index) => (
                <Text key={index} style={styles.listItem}>
                  {comments}
                </Text>
              ))}
            </>
          )}
          <View style={styles.addComment}>
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment"
              onChangeText={(text) => setNewComment(text)}
              value={newComment}
            />
            <TouchableOpacity
              onPress={handleCommentSubmit}
              style={{
                backgroundColor: "#0c8079",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  alt: {
    marginVertical: 50,
  },
  safeArea: {
    flex: 1,
    // justifyContent: "space-between",
    backgroundColor: "#eef2e6",
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  headerText: {
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  countryOfOrigin: {
    fontSize: 14,
    fontStyle: "italic",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  altProductImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  addComment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 5,
    paddingVertical: 10,
  },
  submit: {
    backgroundColor: "#0c8079",
    color: "red",
  },
});

export default ProductDetail;
