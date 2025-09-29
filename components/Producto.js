import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Producto = ({ precio, nombre, tiempo, imagen, colorFondo = '#ffffff' }) => {
  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen con color de fondo */}
      <View style={[styles.imagenContainer, { backgroundColor: colorFondo }]}>
        <Image source={imagen} style={styles.imagen} />
      </View>
      
      {/* Contenedor del texto  */}
      <View style={styles.textoContainer}>
        <Text style={styles.precio}>${precio}</Text>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.tiempo}>{tiempo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginBottom: 15,
    width: '47%', 
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