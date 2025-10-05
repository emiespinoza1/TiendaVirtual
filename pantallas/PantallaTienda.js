import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import Categoria from '../components/Categoria';
import Producto from '../components/Producto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const PantallaTienda = () => {
  const [busqueda, setBusqueda] = useState('');

  // arrreglo de objetos de categoria
  const categorias = [
    { id: '1', nombre: 'Fashion', icono: 'hanger' },
    { id: '2', nombre: 'Cars', icono: 'car' },
    { id: '3', nombre: 'Babies', icono: 'baby-bottle-outline' },
    { id: '4', nombre: 'Sport', icono: 'basketball' },
  ];

  // Arreglo de objetos de productos
  const productos = [
    { 
      id: '1',
      precio: '$ 27', 
      nombreP: 'White sneakers', 
      horas: '10',
      foto: require('../assets/imagenes/white_sneakers.jpg'),
      colorFondo: '#f3e5f5'
    },
    { 
      id: '2',
      precio: '$ 12', 
      nombreP: 'A Room of One\'s Own', 
      horas: '4',
      foto: require('../assets/imagenes/room_ones_own.jpg'),
      colorFondo: '#ffebee'
    },
    { 
      id: '3',
      precio: '$ 12', 
      nombreP: 'Teddy', 
      horas: '17',
      foto: require('../assets/imagenes/teddy.jpg'),
      colorFondo: '#fff3e0'
    },
    { 
      id: '4',
      precio: '$ 50', 
      nombreP: 'Wireless headphones', 
      horas: '8',
      foto: require('../assets/imagenes/headphones.avif'),
      colorFondo: '#e3f2fd'
    },
    { 
      id: '5',
      precio: '$ 170', 
      nombreP: 'Camera - Video & photo', 
      horas: '14',
      foto: require('../assets/imagenes/camera.png'),
      colorFondo: '#e8f5e8'
    },
    { 
      id: '6',
      precio: '$ 50', 
      nombreP: 'Makeup travel bag', 
      horas: '20',
      foto: require('../assets/imagenes/makeup_bag.jpg'),
      colorFondo: '#fce4ec'
    },
  ];

  // productos por búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.nombreP.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.contenedor}>
      {/* Cuadro de búsqueda */}
      <View style={styles.buscadorContainer}>
        <MaterialCommunityIcons name="magnify" size={20} color="#666" style={styles.iconoBusqueda} />
        <TextInput
          style={styles.buscador}
          placeholder="Buscar productos..."
          value={busqueda}
          onChangeText={setBusqueda}
        />
      </View>

      {/* Categorias con flatList */}
      <View style={styles.categoriasContainer}>
        <FlatList
          horizontal
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Categoria nombre={item.nombre} icono={item.icono} />
          )}
          contentContainerStyle={styles.scrollCategoriasContent}
        />
      </View>

      {/* Título News */}
      <Text style={styles.tituloSeccion}>News</Text>

      {/* Productos  con flatList*/}
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listaProductos}
        columnWrapperStyle={styles.filaProductos}
        renderItem={({ item }) => (
          <Producto
            foto={item.foto}
            nombreP={item.nombreP}
            precio={item.precio}
            horas={item.horas}
            colorFondo={item.colorFondo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  buscadorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 45,
  },
  iconoBusqueda: {
    marginRight: 10,
  },
  buscador: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  categoriasContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollCategoriasContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  listaProductos: {
    paddingHorizontal: 10,
  },
  filaProductos: {
    justifyContent: 'space-between',
  },
});

export default PantallaTienda;