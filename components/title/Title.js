import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Title = () => {
  const [title, setTitle] = useState('My Goals');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#B601B8'
  },
  text: {
    fontSize: 50,
    padding: 10,
    color: '#FFFFFF'
  }
});

export default Title;
