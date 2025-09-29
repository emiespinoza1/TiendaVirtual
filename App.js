import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PantallaTienda from './pantallas/PantallaTienda';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <PantallaTienda />
    </SafeAreaView>
  );
}