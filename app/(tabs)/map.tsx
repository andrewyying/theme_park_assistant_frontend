// @ts-nocheck
import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
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
  const mapRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const initialCamera = {
    center: { latitude: 42.368140769353516, longitude: -87.93421773095362 },
    heading: 150,
    altitude: 1300,
    zoom: 13,
  };

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


  const handleResetCamera = () => {
    mapRef.current?.animateCamera(initialCamera, { duration: 800 });
  };

  const handleTrackUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Location permission is required to track your location.');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const headingData = await Location.getHeadingAsync();

    mapRef.current?.animateCamera(
      {
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        heading: headingData.trueHeading || 0,
        zoom: 16,
      },
      { duration: 800 }
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
              <Text style={[styles.label, { color: focused ? '#5D5FEF' : '#666' }]}>{filter.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <MapView
        ref={mapRef}
        style={styles.map}
        initialCamera={initialCamera}
      >
        {attractions
          .filter(
            (spot) => selectedTypes.length === 0 || selectedTypes.includes(spot.type)
          )
          .map((spot) => (
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

      <TouchableOpacity style={styles.locateButton} onPress={handleTrackUserLocation}>
        <Ionicons name="navigate-circle" size={48} color={Theme.colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={handleResetCamera}>
        <Ionicons name="refresh-circle" size={48} color={Theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HEIGHT * 0.065,
    backgroundColor: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: HEIGHT * 0.015,
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
  },
  resetButton: {
    position: 'absolute',
    bottom: HEIGHT * 0.04,
    left: WIDTH * 0.04,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 2,
  },
  locateButton: {
    position: 'absolute',
    bottom: HEIGHT * 0.04,
    right: WIDTH * 0.04,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 2,
  },
});
