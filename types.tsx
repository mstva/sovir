export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};

export type HomeParamList = { HomeScreen: undefined; };
export type CategoryParamList = { CategoryScreen: undefined; };
export type CartParamList = { CartScreen: undefined; };
export type FavoriteParamList = { FavoriteScreen: undefined; };
export type ProfileParamList = { ProfileScreen: undefined; };

export type Product = {
  id: string,
  name: string,
  brand: string,
  image: string,
  price: string,
  rating: string
}

export type ProductsList = {
  label: string,
  description: string,
}

export type WomenCategory = {
  id: string,
  name: string,
  image: string
}
