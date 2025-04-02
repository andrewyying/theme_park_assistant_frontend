import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
import { commonStyles } from '../../styles/common';

export default function Index() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Home screen</Text>
      <Link href="/profile" style={commonStyles.button}>
        Go to Profile screen
      </Link>
    </View>
  );
}