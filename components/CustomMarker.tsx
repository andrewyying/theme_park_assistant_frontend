//@ts-nocheck
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CustomMarker({ icon = 'map-marker', color = 'red' }) {
  return (
    <View style={styles.marker}>
      <FontAwesome name={icon} size={30} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
