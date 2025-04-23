//@ts-nocheck
import {ScreenConst} from "@/constants/screenconst";
import {Ionicons} from "@expo/vector-icons";
import {Theme} from "@/styles/theme";
import {TouchableOpacity} from "react-native";


export default function FloatingButton({ icon, onPress, position }) {
  const style = [
    {
      position: 'absolute',
      bottom: ScreenConst.window.height * 0.04,
      backgroundColor: 'white',
      borderRadius: 30,
      padding: 2
    },
    position === 'left' ? { left: ScreenConst.window.width * 0.04 } : { right: ScreenConst.window.width * 0.04 }
  ];

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={icon} size={48} color={Theme.colors.primary} />
    </TouchableOpacity>
  );
}
