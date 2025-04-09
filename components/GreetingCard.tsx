import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from './Card';
import { ScreenConst } from '../constants/screenconst';

export default function GreetingCard() {
  return (
    <Card style={styles.greeting_card}>
      <Text style={{ fontSize: 20 }}>Good Morning,</Text>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Andrew!</Text>
      <Text> </Text>
      <Text> </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  greeting_card: {
    marginVertical: ScreenConst.window.height * 0.02,
  },
});
