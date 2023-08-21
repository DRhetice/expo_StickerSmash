import { View, Text, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

export default function Button({ label, theme , onPress }) {
  if (theme === "primary"){
 return (
    <View className="w-[320px] h-[68px] items-center justify-center p-[3px] border-4 border-[#ffd33d] rounded-[18px]  ">
      <Pressable
        className="rounded-2xl w-full h-full items-center bg-white justify-center flex-row"
        onPress={onPress}
      >
         <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            className="pr-[8px] "
          />
        <Text className="text-[16px] text-[#25292e] ">{label}</Text>
      </Pressable>
    </View>
  );
  }
 return (
  <View className="w-[320px] h-[68px] items-center justify-center p-3 ">
      <Pressable
        className="rounded-2xl w-full h-full items-center justify-center flex-row"
        onPress={() => alert("Button Pressed")}
      >
        <Text className="text-[16px] text-[#fff] " onPress={onPress}>{label}</Text>
      </Pressable>
    </View>
 )
}
