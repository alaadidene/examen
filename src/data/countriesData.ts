import { Country } from '../models/Country';

/**
 * Liste des pays avec leurs informations
 * Les drapeaux proviennent de https://flagcdn.com
 */
export const countriesData: Country[] = [
  {
    id: 1,
    nom: "France",
    capitale: "Paris",
    population: "67 millions",
    superficie: "643 801 km²",
    langue: "Français",
    flagAsset: "https://flagcdn.com/256x192/fr.png"
  },
  {
    id: 2,
    nom: "Tunisie",
    capitale: "Tunis",
    population: "12 millions",
    superficie: "163 610 km²",
    langue: "Arabe",
    flagAsset: require('../../assets/flags/tunisie.png')
  },
  {
    id: 3,
    nom: "Brésil",
    capitale: "Brasília",
    population: "215 millions",
    superficie: "8 515 767 km²",
    langue: "Portugais",
    flagAsset: "https://flagcdn.com/256x192/br.png"
  },
  {
    id: 4,
    nom: "Italie",
    capitale: "Rome",
    population: "59 millions",
    superficie: "301 340 km²",
    langue: "Italien",
    flagAsset: "https://flagcdn.com/256x192/it.png"
  },
  {
    id: 5,
    nom: "Canada",
    capitale: "Ottawa",
    population: "39 millions",
    superficie: "9 984 670 km²",
    langue: "Anglais",
    flagAsset: "https://flagcdn.com/256x192/ca.png"
  },
  {
    id: 6,
    nom: "Australie",
    capitale: "Canberra",
    population: "26 millions",
    superficie: "7 692 024 km²",
    langue: "Anglais",
    flagAsset: "https://flagcdn.com/256x192/au.png"
  },
  {
    id: 7,
    nom: "Allemagne",
    capitale: "Berlin",
    population: "84 millions",
    superficie: "357 022 km²",
    langue: "Allemand",
    flagAsset: "https://flagcdn.com/256x192/de.png"
  },
  {
    id: 8,
    nom: "Espagne",
    capitale: "Madrid",
    population: "47 millions",
    superficie: "505 990 km²",
    langue: "Espagnol",
    flagAsset: "https://flagcdn.com/256x192/es.png"
  },
  {
    id: 9,
    nom: "Afrique du Sud",
    capitale: "Pretoria",
    population: "60 millions",
    superficie: "1 219 090 km²",
    langue: "Afrikaans",
    flagAsset: "https://flagcdn.com/256x192/za.png"
  }
];