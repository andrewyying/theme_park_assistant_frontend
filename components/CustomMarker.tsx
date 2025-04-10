import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CustomMarker({ icon = 'map-marker', color = '#5D5FEF' }) {
  return (
    <View style={styles.marker}>
      <FontAwesome icon={icon} size={30} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
