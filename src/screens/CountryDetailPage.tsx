import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
type Props = NativeStackScreenProps<RootStackParamList, 'CountryDetail'>;

export default function CountryDetailPage({ route }: Props) {
  const { country } = route.params;

  const InfoCard = ({
    icon,
    title,
    value,
    color,
  }: {
    icon: string;
    title: string;
    value: string;
    color: string;
  }) => (
    <View style={styles.infoCard}>
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.infoText}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Flag Section */}
      <View style={styles.flagSection}>
        <Image source={country.flagAsset} style={styles.flag} />
      </View>

      {/* Information Cards */}
      <View style={styles.infoSection}>
        <InfoCard
          icon="🏛️"
          title="Capitale"
          value={country.capitale}
          color="#4CAF50"
        />
        <InfoCard
          icon="👥"
          title="Population"
          value={`${country.population} d'habitants`}
          color="#4CAF50"
        />
        <InfoCard
          icon="📏"
          title="Superficie"
          value={country.superficie}
          color="#9C27B0"
        />
        <InfoCard
          icon="🗣️"
          title="Langue officielle"
          value={country.langue}
          color="#FF9800"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  flagSection: {
    backgroundColor: '#E3F2FD',
    padding: 40,
    alignItems: 'center',
  },
  flag: {
    width: 300,
    height: 200,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  infoSection: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 28,
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});