import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="h-[25%] w-full bg-[#25292e] rounded-t-[18px] absolute bottom-0 ">
        <View className="h-[16%] bg-[] rounded-t-[10px] px-[20px] flex-row items-center justify-between " >
          <Text className="text-white text-[16px]">Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
