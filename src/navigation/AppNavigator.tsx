import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { TouchableOpacity, Text } from 'react-native';

import WelcomePage from '../screens/WelcomePage';
import CountriesPage from '../screens/CountriesPage';
import CountryDetailPage from '../screens/CountryDetailPage';
import AboutPage from '../screens/AboutPage';
import DrawerContent from '../components/DrawerContent';
import { Country } from '../models/Country';

// Types
export type RootStackParamList = {
  Welcome: undefined;
  Main: undefined;
  Countries: undefined;
  CountryDetail: { country: Country };
  About: undefined;
};

export type DrawerParamList = {
  CountriesStack: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function CountriesStack() {
  return (
    <Stack.Navigator
      id="CountriesStackID"
    >
      <Stack.Screen
        name="Countries"
        component={CountriesPage}
        options={({ navigation }) => ({
          title: 'Liste des Pays',
          headerStyle: { backgroundColor: '#1565C0' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 16 }}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>☰</Text>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailPage}
        options={({ route }) => ({
          title: route.params.country.nom,
          headerStyle: { backgroundColor: '#1565C0' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        })}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      id="MainDrawerID"
      drawerContent={(props: DrawerContentComponentProps) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="CountriesStack" component={CountriesStack} />
      <Drawer.Screen
        name="About"
        component={AboutPage}
        options={{
          headerShown: true,
          title: 'À propos',
          headerStyle: { backgroundColor: '#1565C0' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id="RootStackID"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

