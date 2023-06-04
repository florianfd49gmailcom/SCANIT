import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { captureRef } from 'react-native-view-shot';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const QRCodeGenerator = ({ addGeneratedQRCode }) => {
  const [inputText, setInputText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');
  const qrCodeRef = useRef();

  const generateQRCode = () => {
    setQRCodeValue(inputText);
  };

  const handleGenerateQRCode = () => {
    if (inputText.trim() !== '') {
      setQRCodeValue(inputText);
      const generatedQRCode = { data: inputText, qrCode: qrCodeValue };
      addGeneratedQRCode(generatedQRCode);
    }
  };  

  const shareQRCode = async () => {
    try {
      if (!qrCodeValue) {
        // Aucun QR code généré
        return;
      }

      // Capturer la vue du QR code en tant qu'image
      const uri = await captureRef(qrCodeRef.current, {
        format: 'png',
        quality: 1,
      });

      // Partager l'image du QR code
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Demander l'autorisation d'accéder à la galerie de l'appareil
  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error("Autorisation refusée pour accéder à la galerie de l'appareil");
    }
  };

  // Appeler la fonction de demande d'autorisation
  requestGalleryPermission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Générateur de QR Code</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Entrez le texte à encoder"
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
        <Text style={styles.buttonText}>Générer</Text>
      </TouchableOpacity>
      {qrCodeValue !== '' && (
        <View style={styles.qrCodeContainer}>
          <View ref={qrCodeRef}>
            <QRCode value={qrCodeValue} size={200} />
          </View>
          <TouchableOpacity style={styles.shareButton} onPress={shareQRCode}>
            <Text style={styles.shareButtonText}>Partager</Text>
          </TouchableOpacity>
        </View>
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  shareButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRCodeGenerator;
