//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { ScreenConst } from '../../constants/screenconst';
import GreetingCard from '../../components/GreetingCard';
import MyPlan from '../../components/MyPlan';
import EventCard from '../../components/EventCard'; // 👈 引入组件

export default function Index() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://10.0.0.174:8080/events')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

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
      renderItem={({ item }) => <EventCard event={item} />}
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
