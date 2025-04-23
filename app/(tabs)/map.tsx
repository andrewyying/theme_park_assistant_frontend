// @ts-nocheck
import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import * as Location from 'expo-location';
import {ScreenConst} from '@/constants/screenconst';
import {Theme} from "@/styles/theme";
import PopupCard from "@/components/mapScreen/PopupCard";
import {LIVE_MAP, FILTERS} from "@/constants/mapconst";
import {LOCAL_HOST} from "@/constants/connection";
import FilterBar from "@/components/mapScreen/FilterBar";
import MapMarkers from "@/components/mapScreen/MapMarkers";
import FloatingButton from "@/components/mapScreen/FloatingButton";

const HEIGHT = ScreenConst.window.height;
const WIDTH = ScreenConst.window.width;
const initialCamera = LIVE_MAP.initalCamera;

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);
  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [trackView, setTrackView] = useState(true);

  // Wait for page rendering 80ms
  useEffect(() => {
    const timer = setTimeout(() => setTrackView(false), 60);
    return () => clearTimeout(timer);
  }, []);

  // Get location data from backend
  useEffect(() => {
    const url = `http://${LOCAL_HOST}:8080/locations`;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => setPlaces(data))
      .catch(console.error);
  }, []);

  // Toggle filter bar (different location types)
  const handleToggleType = type => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  // Resets camera to initial view
  const handleResetCamera = () => {
    mapRef.current?.animateCamera(initialCamera, {duration: 800});
  };

  // Track user location
  const handleTrackUserLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Location permission is required.');
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    const heading = (await Location.getHeadingAsync()).trueHeading || 0;
    mapRef.current?.animateCamera(
      {center: loc.coords, heading},
      {duration: 800}
    );
  };


  return (
    <View style={styles.container}>
      {/* Top of the screen: Filter Bar*/}
      <FilterBar
        filters={FILTERS}
        selectedTypes={selectedTypes}
        onToggle={handleToggleType}
      />

      {/* Shows the map below the filter bar */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialCamera={initialCamera}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        followsUserLocation={false}
        mapType={"satelliteFlyover"}
      >
        {/* Use a mask to gray out places outside the park */}
        <Polygon
          coordinates={LIVE_MAP.outerPolygon}
          holes={[LIVE_MAP.highlightedArea]}
          fillColor={LIVE_MAP.mask}
          strokeWidth={1}
          strokeColor={Theme.colors.primary}
          zIndex={1}
        />
        {/* Put customized markers on the map */}
        <MapMarkers
          places={places}
          selectedTypes={selectedTypes}
          onSelect={setSelected}
        />
      </MapView>

      {/* Pop-up cards when clicked on specific locations */}
      <PopupCard spot={selected} onClose={() => setSelected(null)}/>

      {/* Two buttons: camera reset & user location recenter */}
      <FloatingButton icon="navigate-circle" onPress={handleTrackUserLocation} position="right"/>
      <FloatingButton icon="refresh-circle" onPress={handleResetCamera} position="left"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HEIGHT * 0.065,
    backgroundColor: 'white'
  },
  map: {
    flex: 1
  },
});
