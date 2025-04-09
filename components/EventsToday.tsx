//@ts-nocheck
import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import Card from './Card';
import { ScreenConst } from '../constants/screenconst';

export default function EventsToday({ events }) {
  return (
    <>
      <Text style={styles.subtitle}>Events Today</Text>
      <Card>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card style={styles.queued_event}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.startTime}</Text>
            </Card>
          )}
        />
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: ScreenConst.window.height * 0.02,
    marginBottom: ScreenConst.window.height * 0.01,
    marginHorizontal: ScreenConst.window.width * 0.03,
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  queued_event: {
    marginBottom: 10,
  },
});
