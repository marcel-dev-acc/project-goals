import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import Title from './components/title/Title';
import Goal from './components/goals/Goals';

const App = () => {
  // Used to define the routes in the project
  return (
    <View>
      <Title />
      <Goal />
    </View>
  );
};

export default App;
