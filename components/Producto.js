import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Producto = ({ foto, nombreP, precio, horas, colorFondo = '#ffffff' }) => {
  return (
    <View style={styles.container}>
      {/* contenedor de  color */}
      <View style={[styles.imagenContainer, { backgroundColor: colorFondo }]}>
        <Image source={foto} style={styles.imagen} />
      </View>
      
      {/* contenedor blanco */}
      <View style={styles.textoContainer}>
        <Text style={styles.precio}>{precio}</Text>
        <Text style={styles.nombre}>{nombreP}</Text>
        <Text style={styles.tiempo}>{horas} hours ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%', 
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  imagenContainer: {
    padding: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imagen: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  textoContainer: {
    padding: 12,
    backgroundColor: 'white',
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  nombre: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  tiempo: {
    fontSize: 12,
    color: '#666',
  },
});

export default Producto;