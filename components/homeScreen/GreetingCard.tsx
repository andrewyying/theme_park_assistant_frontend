import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from '../Card';
import { ScreenConst } from '../../constants/screenconst';

const WIDTH = ScreenConst.window.width;
const HEIGHT = ScreenConst.window.height;

export default function GreetingCard() {
  return (
    <Card style={styles.greeting_card}>
      <Text style={{ fontSize: 15 }}>WELCOME,</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Andrew!</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  greeting_card: {
    paddingHorizontal: WIDTH * 0.04,
    paddingVertical: HEIGHT * 0.02,
    minHeight: HEIGHT * 0.125,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
