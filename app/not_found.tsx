import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { commonStyles } from '../styles/common';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={commonStyles.container}>
        <Link href="/" style={commonStyles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}