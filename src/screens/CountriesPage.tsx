import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { countriesData } from '../data/countriesData';
import { Country } from '../models/Country';
import { ListRenderItem } from 'react-native';

type CountriesPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Countries'>;
};

export default function CountriesPage({ navigation }: CountriesPageProps) {
  const renderCountryItem: ListRenderItem<Country> = ({ item }) => (
    <TouchableOpacity
      style={styles.countryCard}
      onPress={() => navigation.navigate('CountryDetail', { country: item })}
    >
      <Image source={item.flagAsset} style={styles.flag} />
      <View style={styles.countryInfo}>
        <Text style={styles.countryName}>{item.nom}</Text>
        <Text style={styles.countryCapital}>{item.capitale}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={countriesData}
        renderItem={renderCountryItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    padding: 16,
  },
  countryCard: {
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
    elevation: 3,
  },
  flag: {
    width: 60,
    height: 45,
    borderRadius: 8,
    marginRight: 16,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  countryCapital: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
  },
});