// @ts-nocheck
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { FILTERS, ICON_LIBRARIES } from '@/constants/mapconst';
import { Theme } from "@/styles/theme";

export default function CustomMarker({ type, name}) {
  const target = FILTERS.find(item => item.type === type);
  if (!target) return null;
  const Icon = ICON_LIBRARIES[target.library];
  const pinColor = Theme.colors.primary;

  return (
    <View style={styles.wrapper}>
      {/* Pin */}
      <Svg width={32} height={42} viewBox="0 0 32 42">
        <Path
          d="M16,0 C9,0 2,7 2,14 C2,22 16,36 16,36 C16,36 30,22 30,14 C30,7 23,0 16,0 Z"
          fill={pinColor}
        />
        <Circle cx={16} cy={14} r={11} fill="#fff" />
      </Svg>
      {/* Icon */}
      <Icon
        name={target.icon}
        size={16}
        color={pinColor}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 6,
  },
});
