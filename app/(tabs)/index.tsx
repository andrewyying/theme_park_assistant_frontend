//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { ScreenConst } from '../../constants/screenconst';
import GreetingCard from '../../components/GreetingCard';
import MyPlan from '../../components/MyPlan';
import EventCard from '../../components/EventCard';

export default function Index() {
  const [events, setEvents] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch('http://10.0.0.174:8080/events')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  const handlePress = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <FlatList
      data={events}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={() => (
        <>
          <GreetingCard />
          <MyPlan />
          <Text style={styles.subtitle}>Upcoming Events</Text>
        </>
      )}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => handlePress(item.id)}
          style={{ opacity: 1 }}
        >
          <EventCard event={item} expanded={item.id === expandedId} />
        </Pressable>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: ScreenConst.window.height * 0.04,
    marginBottom: ScreenConst.window.height * 0.02,
    marginHorizontal: ScreenConst.window.width * 0.01,
    fontSize: 23,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  listContainer: {
    paddingHorizontal: ScreenConst.window.width * 0.05,
    paddingVertical: ScreenConst.window.height * 0.02,
  },
});
