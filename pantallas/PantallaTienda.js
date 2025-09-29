import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import Categoria from '../components/Categoria';
import Producto from '../components/Producto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const PantallaTienda = () => {
  const [busqueda, setBusqueda] = useState('');

  const categorias = [
    { nombre: 'Fashion', icono: 'hanger' },
    { nombre: 'Cars', icono: 'car' },
    { nombre: 'Babies', icono: 'baby-bottle-outline' },
    { nombre: 'Sport', icono: 'basketball' },
  ];

  const productos = [
    { 
      precio: '27', 
      nombre: 'White sneakers', 
      tiempo: '10 hours ago',
      imagen: require('../assets/imagenes/white_sneakers.jpg'),
      colorFondo: '#f3e5f5' 
    },
    { 
      precio: '12', 
      nombre: 'A Room of One\'s Own', 
      tiempo: '4 hours ago',
      imagen: require('../assets/imagenes/room_ones_own.jpg'),
      colorFondo: '#ffebee' 
    },
    { 
      precio: '12', 
      nombre: 'Teddy', 
      tiempo: '17 hours ago',
      imagen: require('../assets/imagenes/teddy.jpg'),
      colorFondo: '#fff3e0' 
    },
    { 
      precio: '50', 
      nombre: 'Wireless headphones', 
      tiempo: '8 hours ago',
      imagen: require('../assets/imagenes/headphones.avif'),
      colorFondo: '#e3f2fd' 
    },
    { 
      precio: '170', 
      nombre: 'Camera - Video & photo', 
      tiempo: '14 hours ago',
      imagen: require('../assets/imagenes/camera.png'),
      colorFondo: '#e8f5e8' 
    },
    { 
      precio: '50', 
      nombre: 'Makeup travel bag', 
      tiempo: '20 hours ago',
      imagen: require('../assets/imagenes/makeup_bag.jpg'),
      colorFondo: '#fce4ec' 
    },
  ];

  //  productos por búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
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

      {/* ScrollView horizontal para categorías - centrado*/}
      <View style={styles.categoriasContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.scrollCategoriasContent}
        >
          {categorias.map((categoria, index) => (
            <Categoria 
              key={index}
              nombre={categoria.nombre} 
              icono={categoria.icono} 
            />
          ))}
        </ScrollView>
      </View>

      {/* Título News */}
      <Text style={styles.tituloSeccion}>News</Text>

      {/* Lista de productos en 2 columnas */}
      <ScrollView style={styles.listaProductos}>
        <View style={styles.gridProductos}>
          {productosFiltrados.map((producto, index) => (
            <Producto
              key={index}
              precio={producto.precio}
              nombre={producto.nombre}
              tiempo={producto.tiempo}
              imagen={producto.imagen}
              colorFondo={producto.colorFondo}
            />
          ))}
        </View>
      </ScrollView>
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
    flex: 1,
  },
  gridProductos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default PantallaTienda;