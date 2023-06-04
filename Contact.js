import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    if (name && email && message) {
      const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      MailComposer.composeAsync({
        recipients: ['florian.fd49@gmail.com'], // Adresse e-mail de destination
        subject: 'Contact Form Submission',
        body: emailBody,
      })
        .then((result) => {
          if (result.status === 'sent') {
            // E-mail envoyé
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  const handleOpenEmailApp = () => {
    Linking.openURL('mailto:florian.fd49@gmail.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactez-nous</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Nom"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.messageInput}
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Message"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOpenEmailApp}>
        <Text style={styles.buttonText}>Ouvrir l'application de messagerie</Text>
      </TouchableOpacity>
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
  messageInput: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Contact;
