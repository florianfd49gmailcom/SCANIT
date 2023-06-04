// app.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Accueil from './Accueil';
import Scanner from './Scanner';
import QRCodeGenerator from './QRcodegen';
import History from './History';
import Contact from './Contact';
import About from './About';

const Tab = createBottomTabNavigator();

const App = () => {
  // State pour stocker l'historique des codes QR scannés et générés
  const [scannedQRCodeHistory, setScannedQRCodeHistory] = useState([]);
  const [generatedQRCodeHistory, setGeneratedQRCodeHistory] = useState([]);

  // Fonction pour ajouter un code QR scanné à l'historique
  const addScannedQRCode = (qrCode) => {
    setScannedQRCodeHistory([...scannedQRCodeHistory, qrCode]);
  };

  // Fonction pour ajouter un code QR généré à l'historique
  const addGeneratedQRCode = (qrCode) => {
    setGeneratedQRCodeHistory([...generatedQRCodeHistory, qrCode]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Accueil"
          component={Accueil}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Scanner"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="qr-code-scanner" size={24} color={color} />
            ),
          }}
          initialParams={{ addScannedQRCode, scannedQRCodeHistory }}
        >
          {() => <Scanner addScannedQRCode={addScannedQRCode} />}
        </Tab.Screen>
        <Tab.Screen
          name="QRCodeGenerator"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="qr-code" size={24} color={color} />
            ),
          }}
          initialParams={{ addGeneratedQRCode, generatedQRCodeHistory }}
        >
          {() => <QRCodeGenerator addGeneratedQRCode={addGeneratedQRCode} />}
        </Tab.Screen>
        <Tab.Screen
          name="Historique"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="history" size={24} color={color} />
            ),
          }}
        >
          {() => (
            <History
              scannedQRCodes={scannedQRCodeHistory}
              generatedQRCodes={generatedQRCodeHistory}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="mail" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="A propos"
          component={About}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="info" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
