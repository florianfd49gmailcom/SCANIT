import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À Propos</Text>
      <Text style={styles.description}>
        Bienvenue dans notre application ScanIT! Cette application vous permet de scanner des codes QR et des codes-barres, de générer des codes QR et de les partager, de consulter l'historique des codes QR scannés et générés, ainsi que de nous contacter.
      </Text>
      <Text style={styles.description}>
        Notre objectif est de vous offrir une expérience conviviale et pratique pour toutes vos besoins liés aux codes QR. N'hésitez pas à explorer les différentes fonctionnalités de l'application et à nous contacter si vous avez des questions ou des commentaires.
      </Text>
      <Text style={styles.description}>
      Yann s’est occupé de la conception et du maquettage ainsi que le CSS de l’application. Florian quant à lui s'est principalement occupé du développement des fonctionnalités complexes puis de leurs intégrations en React Native.      </Text>
      <Text style={styles.signature}>L'équipe ScanIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  signature: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default About;
