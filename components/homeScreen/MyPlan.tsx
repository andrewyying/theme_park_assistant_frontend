import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Card from '../Card';
import {ScreenConst} from '../../constants/screenconst';

const WIDTH = ScreenConst.window.width;
const HEIGHT = ScreenConst.window.height;

export default function MyPlan() {
  return (
    <>
      <Text style={styles.title}>My Plan</Text>
      <Card style={styles.my_plan_card}>
        <Card style={styles.queued_event}>
          <Text style={{fontSize: 18}}>Queued Event 1</Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize: 18}}>Queued Event 2</Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize: 18}}>Queued Event 3</Text>
        </Card>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: HEIGHT * 0.04,
    marginBottom: HEIGHT * 0.02,
    marginHorizontal: WIDTH * 0.01,
    fontSize: 23,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  queued_event: {
    marginVertical: 5,
    paddingVertical: HEIGHT * 0.01,
    paddingHorizontal: WIDTH * 0.01,
  },
  my_plan_card: {
    paddingHorizontal: WIDTH * 0.04,
    paddingVertical: HEIGHT * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});