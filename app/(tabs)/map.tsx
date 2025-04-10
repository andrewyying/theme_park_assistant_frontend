// @ts-nocheck
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { ScreenConst } from '@/constants/screenconst';
import { Theme } from "@/styles/theme";
import FilterIcon from "@/components/FilterIcon";
import CustomMarker from "@/components/CustomMarker";
import PopupCard from "@/components/PopupCard";

const HEIGHT = ScreenConst.window.height;
const WIDTH = ScreenConst.window.width;

const FILTERS = [
  { type: 'attractions', label: 'Attractions', icon: 'magic', library: 'FontAwesome' },
  { type: 'rides', label: 'Rides', icon: 'attractions', library: 'MaterialIcons' },
  { type: 'dining', label: 'Dining', icon: 'restaurant', library: 'Ionicons' },
  { type: 'restroom', label: 'Restroom', icon: 'family-restroom', library: 'MaterialIcons' },
];

export default function MapScreen() {
  const [selected, setSelected] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const attractions = [
    {
      id: 1,
      name: 'Example Ride 1',
      description: 'Some roller coaster. Waiting time to be provided by the backend',
      coordinate: { latitude: 42.36570825462933, longitude: -87.93372524277262 },
      type: 'rides',
    },
    {
      id: 2,
      name: 'Restaurant',
      description: 'Restaurant Information',
      coordinate: { latitude: 42.36917329350974, longitude: -87.93609662108737 },
      type: 'dining',
    },
  ];

  const handleToggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {FILTERS.map((filter) => {
          const focused = selectedTypes.includes(filter.type);
          return (
            <TouchableOpacity
              key={filter.type}
              style={styles.filterButton}
              onPress={() => handleToggleType(filter.type)}
            >
              <FilterIcon
                library={filter.library}
                name={filter.icon}
                size={28}
                color={focused ? Theme.colors.primary : '#777'}
              />
              <Text style={[styles.label, { color: focused ? '#5D5FEF' : '#666' }]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <MapView
        style={styles.map}
        initialCamera={{
          center: { latitude: 42.368140769353516, longitude: -87.93421773095362 },
          heading:150,
          altitude: 1300,
          zoom: 13
        }}
      >
        {attractions.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={spot.coordinate}
            onPress={() => setSelected(spot)}
          >
            <CustomMarker />
          </Marker>
        ))}
      </MapView>
      <PopupCard spot={selected} onClose={() => setSelected(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: WIDTH * 0.05,
    paddingTop: HEIGHT * 0.01,
    paddingBottom: HEIGHT * 0.06,
    backgroundColor: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: HEIGHT * 0.03,
  },
  filterButton: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
  map: {
    flex: 1,
    borderRadius: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
