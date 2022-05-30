import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button
} from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  const renderItem = ({ item }) => (
    <Item title={item.text} />
  );

  return (
    <View>
      <Text style={styles.text}>Set a goal</Text>
      <TextInput
        style={styles.input}
        onChangeText={
          (eventText) => {
            setText(eventText);
          }
        }
        value={text}
      />
      <View style={styles.buttonView}>
        <Button
          title="Press Me"
          color='#B601B8'
          onPress={
            () => {
              goals.unshift({
                timestamp: new Date(),
                text: text
              });
              setGoals(goals);
              setText('');
            }
          }
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={goals}
        renderItem={renderItem}
        keyExtractor={item => item.timestamp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
    height: 350,
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    color: '#000000'
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#B601B8',
    padding: 10,
  },
  buttonView: {
    maxWidth: 150,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default Goals;
