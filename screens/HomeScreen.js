import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PlaceholderImage = require("../assets/images/background-image.png");

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
    //later
  };
/**
 * Function to handle the closing of a modal
 */
const onModalClose = () => {
  setIsModalVisible(false);
};

  const onSaveImageAsync = () => {};

  const pickImageAsync = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      //mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      delete result.cancelled;
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      //console.log(result)
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <GestureHandlerRootView className="flex-1 items-center bg-[#25292e] ">
      <View className="flex-1 pt-[58px] ">
        <ImageViewer
          placeholderImage={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji!==null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />:null}
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-[80px] ">
          <View className="items-center flex-row ">
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View className="flex-[1/3] items-center ">
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>

      <StatusBar style="auto" />
   </GestureHandlerRootView>
  );
};

export default HomeScreen;
