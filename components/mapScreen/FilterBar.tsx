//@ts-nocheck
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import FilterIcon from "@/components/mapScreen/FilterIcon";
import {Theme} from "@/styles/theme";
import {ScreenConst} from "@/constants/screenconst";


export default function FilterBar({ filters, selectedTypes, onToggle }) {
  return (
    <View style={styles.container}>
      {filters.map(filter => {
        const focused = selectedTypes.includes(filter.type);
        return (
          <View style={styles.item} key={filter.type}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onToggle(filter.type)}
            >
              <FilterIcon
                library={filter.library}
                name={filter.icon}
                size={28}
                color={focused ? Theme.colors.primary : '#777'}
              />
            </TouchableOpacity>
            <Text style={[styles.label, { color: focused ? Theme.colors.primary : '#666' }]}>
              {filter.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: ScreenConst.window.height * 0.015
  },
  item: { alignItems: 'center' },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ScreenConst.window.width * 0.15
  },
  label: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center'
  }
});