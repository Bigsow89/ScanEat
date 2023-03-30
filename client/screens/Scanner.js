import React from "react";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDisclose } from "native-base";
import { Actionsheet } from "native-base";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState();
  const [text, setText] = useState();
  const { isOpen, onOpen, onClose } = useDisclose();
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
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/products/scan/${data}`
      );
      setProductData(response.data); // set the response data to a new state variable
      console.log("Type: " + type + "\nData: " + data);
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
            <Button
              title={"Scan again"}
              onPress={() => setScanned(false)}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
      {productData && (
        <Center>
          <Button onPress={onOpen}>Actionsheet</Button>

          <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
            <Actionsheet.Content>
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  Albums
                </Text>
              </Box>
              <Actionsheet.Item>Delete</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
