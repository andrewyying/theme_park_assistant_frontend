//@ts-nocheck
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { ScreenConst } from '../../constants/screenconst';
import { Theme } from '../../styles/theme';

const TAB_BAR_HEIGHT = ScreenConst.window.height * 0.08;
const CUSTOM_BUTTON_SIZE = ScreenConst.window.width * 0.15; 
const CUSTOM_BUTTON_OFFSET = -TAB_BAR_HEIGHT * 0.3; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: TAB_BAR_HEIGHT
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'map-sharp' : 'map-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="plantrip"
        options={{
          title: 'Plan Trip',
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

function CustomTabButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.customButtonWrapper}
      activeOpacity={0.9}
    >
      <View style={styles.customButton}>
        <Ionicons name="planet" size={28} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButtonWrapper: {
    top: CUSTOM_BUTTON_OFFSET,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: CUSTOM_BUTTON_SIZE,
    height: CUSTOM_BUTTON_SIZE,
    borderRadius: CUSTOM_BUTTON_SIZE / 2,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
  },
});
