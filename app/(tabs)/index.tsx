import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router'; 
import { commonStyles } from '../../styles/common';
import Card from '../../components/card';
import { ScreenConst } from '../../constants/screenconst';

export default function Index() {
  return (
    <ScrollView contentContainerStyle = {{ padding: 20}}>
      <Card 
        style={styles.greeting_card}>
        <Text style={{ fontSize: 20 }}>Good Morning,</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Andrew!</Text>
        <Text> </Text>
        <Text> </Text>
      </Card>
      <Text style={styles.subtitle}> 
        My Plan
      </Text>
      <Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize:18}}> Queued Event 1</Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize:18}}> Queued Event 2</Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize:18}}> Queued Event 3</Text>
        </Card>
      </Card>
      <Text style={styles.subtitle}> 
        Events Today
      </Text>
      <Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize:18}}> Event 1</Text>
          <Text> </Text> 
          <Text> </Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize:18}}> Event 2</Text>
          <Text> </Text> 
          <Text> </Text>
        </Card>
        <Card style={styles.queued_event}>
          <Text style={{fontSize:18}}> Event 3</Text>
          <Text> </Text> 
          <Text> </Text>
        </Card>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greeting_card: { 
    marginVertical: ScreenConst.window.height*0.02, 
  }, 
  subtitle: {
    marginTop: ScreenConst.window.height*0.02,
    marginBottom: ScreenConst.window.height*0.01, 
    marginHorizontal: ScreenConst.window.width*0.03,
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight:'700'
  },
  queued_event:{
    marginBottom: 10
  }
});