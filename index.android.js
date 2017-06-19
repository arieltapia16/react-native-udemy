//   Index.android.js - Place code in here for Android

//  Import a library to help us create a Component

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component

const App = () => (
  <Text>Some Text</Text>
);

//  Render it to device
AppRegistry.registerComponent('albums', () => App);
