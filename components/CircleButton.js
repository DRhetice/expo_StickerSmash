import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ onPress }) {
  return (
    <View className="w-[84px] h-[84px] mx-[60px] border-4 border-[#ffd33d] rounded-[42px] p-[3px] ">
      <Pressable className="flex-1 justify-center items-center rounded-[42px] bg-white" onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}
