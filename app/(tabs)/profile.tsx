import { Text, View, StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/common';

export default function ProfileScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Profile screen</Text>
    </View>
  );
}