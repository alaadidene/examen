import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type WelcomePageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export default function WelcomePage({ navigation }: WelcomePageProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Atlas Géographique</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Globe Icon */}
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/images/Capture d\'écran 2025-11-27 092553.png')}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>

        {/* Welcome Text */}
        <Text style={styles.title}>Découvrez les pays du monde</Text>
        <Text style={styles.subtitle}>
          Explorez les informations géographiques de différents pays
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.buttonText}>Explorer</Text>
          <Text style={styles.buttonIcon}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
  },
  header: {
    backgroundColor: '#1565C0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  welcomeImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginRight: 8,
  },
  buttonIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
});