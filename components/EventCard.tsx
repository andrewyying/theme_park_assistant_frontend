//@ts-nocheck
import React, { useEffect } from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  LayoutAnimation,
  View,
} from 'react-native';
import Card from './Card';
import { ScreenConst } from '../constants/screenconst';
import { formatDate } from '../utils/dateUtils';

const WIDTH = ScreenConst.window.width;
const HEIGHT = ScreenConst.window.height;

export default function EventCard({ event, expanded }: { event: any, expanded?: boolean }) {
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [expanded]);

  return (
    <Card style={styles.container}>
      <ImageBackground
        source={{ uri: event.image }}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />
      <Text style={styles.date}>{formatDate(event.date)}</Text>
      <Text style={styles.title}>{event.name}</Text>

      {expanded && (
        <View style={styles.expandedSection}>
          <Text style={styles.description}>{event.description}</Text>
        </View>
      )}
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
  expandedSection: {
    marginTop: 8,
    marginHorizontal: 12,
    paddingBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
});
