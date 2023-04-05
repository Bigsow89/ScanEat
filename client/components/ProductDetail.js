import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

const ProductDetail = ({ route }) => {
  const { productData } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
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
            {/* Render ingredients and minerals if available */}
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
        {/* Render alternative products if available */}
        {productData.alternativeProducts && (
          <View style={styles.alt}>
            <Text style={styles.sectionTitle}>Alternative Products</Text>
            <FlatList
              horizontal
              data={productData.alternativeProducts}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.image }}
                  style={styles.altProductImage}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
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
      </ScrollView>
    </SafeAreaView>
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
    justifyContent: "space-between",
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
});

export default ProductDetail;
