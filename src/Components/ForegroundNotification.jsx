import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import colors from "../configs/colors";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Foundation";
import Toast from "react-native-toast-message";

const ForegroundNotification = ({ notification }) => {
  if (!notification) {
    return null;
  }

  // Extract necessary data from the notification object
  const { title, body } = notification?.request?.content || {};
  const [close, setclose] = React.useState(false);
  return (
    <View
      style={[
        styles.foregroundNotification,
        { display: close ? "none" : "flex" },
      ]}
    >
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationBody}>{body}</Text>
      <TouchableOpacity
        onPress={() => setclose(true)}
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: 10,
          top: 10,
        }}
      >
        <Icon1 name="close-sharp" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  foregroundNotification: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "lightgray",
    marginHorizontal: 15,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  notificationBody: {
    fontSize: 14,
  },
});

export default ForegroundNotification;
