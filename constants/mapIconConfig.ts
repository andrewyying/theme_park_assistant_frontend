import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export const FILTERS = [
  { type: 'attractions', label: 'Attractions', icon: 'star', library: 'FontAwesome' },
  { type: 'rides', label: 'Rides', icon: 'attractions', library: 'MaterialIcons' },
  { type: 'dining', label: 'Dining', icon: 'fast-food', library: 'Ionicons' },
  { type: 'restroom', label: 'Restroom', icon: 'family-restroom', library: 'MaterialIcons' },
];

export const ICON_LIBRARIES = {
  FontAwesome,
  Ionicons,
  MaterialIcons,
};
