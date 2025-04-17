//@ts-nocheck
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export const LIVE_MAP = {
  initalCamera: {
    center: { latitude: 42.369612686017334, longitude: -87.93551392606179 },
    heading: 155,
    pitch: 50,
    altitude: 250,
  },
  outerPolygon: [
    { latitude: 45, longitude: -90 },
    { latitude: 45, longitude: -80 },
    { latitude: 35, longitude: -80 },
    { latitude: 35, longitude: -90 },
    { latitude: 45, longitude: -90 }
  ],
  highlightedArea: [
    { latitude: 42.37058316442822, longitude: -87.93615378725066 }, // Front Gate
    { latitude: 42.37034100483456, longitude: -87.93654443249251 },
    { latitude: 42.37007065365263, longitude: -87.93685390845990 },
    { latitude: 42.36980920285843, longitude: -87.93711616471013 },
    { latitude: 42.36936995205276, longitude: -87.93735588512612 },
    { latitude: 42.36936974889223, longitude: -87.93784282970820 },
    { latitude: 42.36945578958357, longitude: -87.93833762390841 },
    { latitude: 42.3693556288242, longitude: -87.9389379534037 },
    { latitude: 42.3692669096555, longitude: -87.9394724979026 },
    { latitude: 42.3690974055188, longitude: -87.9401230833047 },
    { latitude: 42.3685376945189, longitude: -87.9399641523215 },
    { latitude: 42.3681594354126, longitude: -87.9398028393023 },
    { latitude: 42.3677295693346, longitude: -87.9395751175099 },
    { latitude: 42.367041432901, longitude: -87.9393058608049 },
    { latitude: 42.366648442389, longitude: -87.9392633735686 },
    { latitude: 42.3658794244495, longitude: -87.9387727763085 },
    { latitude: 42.3653130535527, longitude: -87.9385556356421 },
    { latitude: 42.3646846966401, longitude: -87.9382736663322 },
    { latitude: 42.3642378848884, longitude: -87.9380455762898 },
    { latitude: 42.3642885734302, longitude: -87.9373210022983 },
    { latitude: 42.3643420710401, longitude: -87.9367623265126 },
    { latitude: 42.3643464239067, longitude: -87.9358515212995 },
    { latitude: 42.36431260635, longitude: -87.9350456057718 },
    { latitude: 42.3643361222449, longitude: -87.9341341532386 },
    { latitude: 42.3643308574929, longitude: -87.9329556935192 },
    { latitude: 42.3642476462414, longitude: -87.9318003873143 },
    { latitude: 42.3646873744751, longitude: -87.9316240151639 },
    { latitude: 42.3650832380894, longitude: -87.9313607640546 },
    { latitude: 42.365497158485, longitude: -87.9311559392789 },
    { latitude: 42.3658930640606, longitude: -87.9310126219204 },
    { latitude: 42.3663691254855, longitude: -87.9307000180464 },
    { latitude: 42.3668508579749, longitude: -87.9304562086554 },
    { latitude: 42.3673492556948, longitude: -87.9300517587924 },
    { latitude: 42.3676971519685, longitude: -87.9298028572181 },
    { latitude: 42.367932687522, longitude: -87.9298932715201 },
    { latitude: 42.3682174661496, longitude: -87.9302151798024 },
    { latitude: 42.3685107747427, longitude: -87.9304308214857 },
    { latitude: 42.3687886457541, longitude: -87.9306330334482 },
    { latitude: 42.369092029496, longitude: -87.9308501494725 },
    { latitude: 42.3695699377972, longitude: -87.9311653399851 },
    { latitude: 42.3700072339266, longitude: -87.9314769377859 },
    { latitude: 42.3702313039943, longitude: -87.9317443358423 },
    { latitude: 42.3704504833586, longitude: -87.9323567612972 },
    { latitude: 42.3708716734232, longitude: -87.9327080776272 },
    { latitude: 42.3711070703089, longitude: -87.93307392043 },
    { latitude: 42.3715864681016, longitude: -87.9340353243182 },
    { latitude: 42.3716910148828, longitude: -87.9343740376007 },
    { latitude: 42.3713851205792, longitude: -87.9348707653177 },
    { latitude: 42.370782877372, longitude: -87.9351578114928 },
    { latitude: 42.3706934902056, longitude: -87.9357164186951 },
    { latitude: 42.37058316442822, longitude: -87.93615378725066 }, // Front Gate
  ],
  mask: "rgba(200,200,200,0.7)",
};

export const FILTERS = [
  { type: 'ride', label: 'Rides', icon: 'attractions', library: 'MaterialIcons' },
  { type: 'dining', label: 'Dining', icon: 'fast-food', library: 'Ionicons' },
  { type: 'shop', label: 'Shops', icon: 'gift', library: 'Ionicons' },
  { type: 'restroom', label: 'Restroom', icon: 'family-restroom', library: 'MaterialIcons' },
];

export const ICON_LIBRARIES = {
  FontAwesome,
  Ionicons,
  MaterialIcons,
};