import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const History = ({ scannedQRCodes, generatedQRCodes }) => {

  const addQRCodeToHistory = (qrCode, isGenerated) => {
    if (isGenerated) {
      setGeneratedQRCodes((prevCodes) => [...prevCodes, qrCode]);
    } else {
      setScannedQRCodes((prevCodes) => [...prevCodes, qrCode]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique des QR Codes Générés</Text>
      {generatedQRCodes.length === 0 ? (
        <Text style={styles.emptyText}>Aucun QR Code généré.</Text>
      ) : (
        <FlatList
          data={generatedQRCodes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.qrCodeItem}>
              <Text style={styles.qrCodeData}>{item.data}</Text>
              <Text style={styles.qrCodeText}>{item.qrCode}</Text>
            </View>
          )}
        />
      )}

      <Text style={styles.title}>Historique des QR Codes Scannés</Text>
      {scannedQRCodes.length === 0 ? (
        <Text style={styles.emptyText}>Aucun QR Code scanné.</Text>
      ) : (
        <FlatList
          data={scannedQRCodes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.qrCodeItem}>
              <Text style={styles.qrCodeData}>{item.data}</Text>
              <Text style={styles.qrCodeText}>{item.qrCode}</Text>
            </View>
          )}
        />
      )}
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
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  qrCodeItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  qrCodeText: {
    fontSize: 16,
  },
});

export default History;
