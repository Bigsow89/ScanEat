import React from "react";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { NativeBaseProvider } from "native-base";
import axios from "axios";
import {
  StyleSheet,
  Image,
  View,
  Modal,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [productData, setProductData] = useState(null);
  const [text, setText] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      
      setScanned(true);
      setText(data);
      console.log(process.env.REACT_APP_SERVER_BASE_URL);
      const response = await axios.get(
        `http://192.168.189.2:8000/api/products/scan/${data}`
      );
      setProductData(response.data);
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>
          <Text style={styles.maintext}>{text}</Text>

          {scanned && (
            <TouchableOpacity style={styles.button}>
              <Button title={"Scan again"} onPress={() => setScanned(false)} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
      {productData && (
        <Modal visible={isOpen} animationType="slide" transparent={false}>
          <SafeAreaView
            style={{
              flex: 1,
              flexDirection: "row",

              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: productData.photos }}
              style={{ height: 120, width: 120 }}
              alt="Product"
            />

            <View style={{ backgroundColor: "#fff", flex: 1 }}>
              <View style={{ paddingLeft: 12, paddingBottom: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {productData.productName}
                </Text>
              </View>
              <View style={{ paddingLeft: 14, paddingBottom: 16 }}>
                <Text style={{ fontSize: 16 }}>{productData.categoryName}</Text>
              </View>
              <View style={{ paddingLeft: 14 }}>
                <Text style={{ fontSize: 16 }}>
                  {productData.countryOrigin}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsOpen(false)}
                style={{ alignSelf: "flex-end", marginRight: 10 }}
              >
                <Text style={{ color: "blue" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      )}
   
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef2e6",
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef2e6",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  subtext: {
    fontSize: 12,
    margin: 14,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 300,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});
