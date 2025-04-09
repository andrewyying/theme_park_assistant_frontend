// @ts-nocheck
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function MapScreen() {
  const [selected, setSelected] = useState(null);

  const attractions = [
    {
      id: 1,
      name: '🎢 Example Ride 1',
      description: 'Some roller coaster. Waiting time to be provided by the backend',
      coordinate: { latitude: 37.7749, longitude: -122.4194 },
    },
    {
      id: 2,
      name: '🍦 Restaurant',
      description: ' Restaurant Information ',
      coordinate: { latitude: 37.7753, longitude: -122.4184 },
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 42.36883372871387,
          longitude: -87.93507342066869,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {attractions.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={spot.coordinate}
            onPress={() => setSelected(spot)}
          >
            <Callout>
              <View style={{ width: 180 }}>
                <Text style={styles.title}>{spot.name}</Text>
                <Text>{spot.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});