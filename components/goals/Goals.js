import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DisplayGoals from './display/Display';
import CreateGoal from './create/Create';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  return (
    <View>
      <CreateGoal />
      <DisplayGoals />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Goals;
