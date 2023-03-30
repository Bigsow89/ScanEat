import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Dimensions,
  Text,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Profile = () => {
  const [position, setPosition] = useState(new Animated.ValueXY());
  const [swipeableAreaHeight, setSwipeableAreaHeight] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dy: position.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dy > swipeableAreaHeight * 0.4) {
        Animated.timing(position, {
          toValue: { x: 0, y: SCREEN_HEIGHT },
          duration: 250,
          useNativeDriver: false,
        }).start(() => setIsFullScreen(true));
      } else {
        Animated.timing(position, {
          toValue: { x: 0, y: 0 },
          duration: 250,
          useNativeDriver: false,
        }).start(() => setIsFullScreen(false));
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.swipeableContainer,
          {
            transform: [{ translateY: position.y }],
          },
          isFullScreen && styles.fullScreenContainer,
        ]}
        {...panResponder.panHandlers}
        onLayout={(e) => setSwipeableAreaHeight(e.nativeEvent.layout.height)}
      >
        <Text>Cat</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeableContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fullScreenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default Profile;
