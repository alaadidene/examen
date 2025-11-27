import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function AboutPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🌍</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Atlas Géographique</Text>
        <Text style={styles.version}>Version 1.0.0</Text>

        {/* Description */}
        <View style={styles.card}>
          <Text style={styles.description}>
            Atlas Géographique est une application mobile interactive permettant
            de découvrir et d'explorer les informations géographiques des pays du
            monde.
          </Text>
          <Text style={styles.description}>
            Cette application a été développée dans le cadre de l'examen pratique
            de Développement Mobile Cross-Plateforme.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresCard}>
          <Text style={styles.featuresTitle}>Fonctionnalités :</Text>
          <FeatureItem text="Liste des pays avec drapeaux" />
          <FeatureItem text="Informations détaillées par pays" />
          <FeatureItem text="Navigation intuitive" />
          <FeatureItem text="Interface moderne et responsive" />
        </View>
      </View>
    </ScrollView>
  );
}

const FeatureItem = ({ text }: { text: string }) => (
  <View style={styles.featureItem}>
    <Text style={styles.featureIcon}>✓</Text>
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#1E88E5',
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  icon: {
    fontSize: 64,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  featuresCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 20,
    width: '100%',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    fontSize: 18,
    color: '#1E88E5',
    marginRight: 12,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 14,
    color: '#1565C0',
  },
});