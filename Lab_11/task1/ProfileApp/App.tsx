import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileCard 
          name="Твое Имя" 
          role="React Native Developer" 
          bio="Студент, изучающий кроссплатформенную мобильную разработку на Expo."
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingVertical: 20,
  }
});