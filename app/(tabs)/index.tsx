//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { ScreenConst } from '../../constants/screenconst';
import GreetingCard from '../../components/GreetingCard';
import MyPlan from '../../components/MyPlan';
import Card from '../../components/Card'

export default function Index() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://10.0.0.174:8080/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => (
        <>
          <GreetingCard />
          <MyPlan />
          <Text style={styles.subtitle}>Events Today</Text>
        </>
      )}
      renderItem={({ item }) => (
        <Card style={styles.queued_event}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.startTime}</Text>
        </Card>
      )}
      contentContainerStyle={{ padding: 20 }}
    />

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