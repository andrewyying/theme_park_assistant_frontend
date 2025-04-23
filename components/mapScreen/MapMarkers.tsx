//@ts-nocheck
import { Marker } from "react-native-maps";
import CustomMarker from "@/components/mapScreen/CustomMarker";

export default function MapMarkers ({ places, selectedTypes, onSelect }) {
  return places
    .filter(spot =>
      selectedTypes.length === 0 || selectedTypes.includes(spot.type)
    )
    .map(spot => (
      <Marker
        key={spot.id}
        coordinate={spot.coordinate}
        anchor={{ x: 0.5, y: 1 }}
        onPress={() => onSelect(spot)}
        tracksViewChanges={false}
        zIndex={2}
      >
        <CustomMarker type={spot.type} name={spot.name} />
      </Marker>
    ));
}
