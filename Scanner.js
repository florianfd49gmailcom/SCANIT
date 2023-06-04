// Scanner.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = ({ addScannedQRCode }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // Demande la permission d'accéder à la caméra au chargement du composant
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Gère le scan d'un code QR
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`Code QR scanné - Type: ${type}`, `Données: ${data}`, [
      {
        text: 'OK',
        onPress: () => {
          setScanned(false);
          addScannedQRCode({ type, data });
        },
      },
    ]);
  };

  if (hasPermission === null) {
    return <Text>Demande de permission d'accès à la caméra...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès à la caméra non autorisé</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Text style={styles.scanText}>Scanning en cours...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scanText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
});

export default Scanner;
