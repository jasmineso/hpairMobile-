import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Landing Page
const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Conference App!</Text>
      <Text style={styles.subtitle}>Get ready for an exciting event.</Text>
      // Add any other necessary components here
    </View>
  );
};

// Setting Page
const SettingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      // Add any necessary settings components here
    </View>
  );
};

// Profile Page
const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      // Add any necessary profile components here
    </View>
  );
};

// Conference Detailed Page
const ConferencePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conference Details</Text>
      // Add any necessary conference details components here
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
      <SettingPage />
      <ProfilePage />
      <ConferencePage />
      // Add any other necessary components here
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
});