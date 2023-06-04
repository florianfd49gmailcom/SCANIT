import React from 'react';
import { View, Image, Text, StyleSheet, BackHandler } from 'react-native';

const Accueil = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/background.png')} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/favicon.png')} style={styles.logo} />
          <Text style={styles.appName}>ScanIT</Text>
        </View>
        <View style={styles.sloganContainer}>
          <Text style={styles.sloganText}>Scanner et Générer en toute simplicité</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start', // Aligner le contenu à gauche
    justifyContent: 'flex-start', // Aligner le contenu en haut
    paddingTop: 50, // Décaler le contenu vers le haut
    paddingRight: 150, // Décaler le contenu vers la gauche
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#999',
    marginTop: 10,
  },
  sloganContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  sloganText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
});

export default Accueil;
