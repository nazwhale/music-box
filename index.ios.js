// Component is a like a widget
// Create a single component and render to the screen

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header />
);


// Render it to the device - place component on the screen
AppRegistry.registerComponent('albums', () => App);
