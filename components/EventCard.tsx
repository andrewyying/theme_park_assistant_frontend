//@ts-nocheck
import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';
import Card from './Card';
import { ScreenConst } from '../constants/screenconst';
import { formatDate } from '../utils/dateUtils';

const WIDTH = ScreenConst.window.width;
const HEIGHT = ScreenConst.window.height;

export default function EventCard({ event }) {
  return (
    <Card style={styles.container}>
      <ImageBackground
        source={{ uri: event.image }}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />
      <Text style={styles.date}>{formatDate(event.startdate)}</Text>
      <Text style={styles.title}>{event.name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: HEIGHT * 0.015,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: HEIGHT * 0.25,
  },
  date: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    marginTop: HEIGHT * 0.008,
    marginLeft: WIDTH * 0.03,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: HEIGHT * 0.015,
    marginLeft: WIDTH * 0.03,
  },
});
