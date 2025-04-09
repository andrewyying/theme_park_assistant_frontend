import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from './Card';
import { ScreenConst } from '../constants/screenconst';

export default function MyPlan() {
  return (
    <>
      <Text style={styles.title}>My Plan</Text>
      <Card>
        <Card style={styles.queued_event}>
          <Text style={{ fontSize: 18 }}>Queued Event 1</Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{ fontSize: 18 }}>Queued Event 2</Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{ fontSize: 18 }}>Queued Event 3</Text>
        </Card>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
    title: {
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