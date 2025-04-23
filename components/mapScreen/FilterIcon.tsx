//@ts-nocheck
import React from 'react';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';

export default function FilterIcon({ library, name, size, color }) {
  switch (library) {
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} />;
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color} />;
    case 'Material':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    default:
      return null;
  }
}
