import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Alert, Button, Switch, StyleSheet, ToastAndroid } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const showToast = () => {
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  };
  
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (

    <ScrollView>
    <Text>Some text</Text>
    <View style={styles.container}>
      <Text>Some text 2</Text>
      <Image
        source={{
          uri: 'https://i.ytimg.com/vi/ImHOTSkgdiU/maxresdefault.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>

    <View style={styles.container}>

      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity and Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
    
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue="You can type in me"
    />

    <View style={styles.container}>
      <Text>
        Adjust the color in a way that looks standard on each platform. 
        On  iOS, the color prop controls the color of the text. 
        On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#000000"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>

    <View style={styles.container}>
      <Text>Switch</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

  </ScrollView>
  );

}
