// @ts-nocheck
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FILTERS, ICON_LIBRARIES } from '@/constants/mapconst';
import { Theme } from "@/styles/theme";

export default function CustomMarker({ type }) {
  const targetFilter = FILTERS.find((item) => item.type === type);

  if (!targetFilter) return null;

  const IconComponent = ICON_LIBRARIES[targetFilter.library];
  const iconName = targetFilter.icon;

  return (
    <View style={styles.marker}>
      <IconComponent name={iconName} size={24} color= {Theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
