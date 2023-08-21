import { Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable className="justify-center items-center "  onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text className="text-white mt-[12px]">{label}</Text>
    </Pressable>
  );
}


