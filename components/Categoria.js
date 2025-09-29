import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Categoria = ({ nombre, icono }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icono} size={24} color="black" />
      <Text style={styles.texto}>{nombre}</Text>
    </View>
  );
};

//Este compponente usa un icono arriba y un texto abajo con un diseño centrado y espaciado
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',  // Centra los iconos y el texto horizontalmente
    marginHorizontal: 10,   //  Espacio entre categorías (izquierda/derecha)
    paddingVertical: 8,     // Espacio interno arriba/abajo
  },
  texto: {
    marginTop: 4,  // Separa el texto del ícono
    fontSize: 12,  // Tamaño de fuente pequeño
  },
});

export default Categoria;