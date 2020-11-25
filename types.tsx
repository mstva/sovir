export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewScreen: undefined;
  SaleScreen: undefined;
  DetailScreen: undefined;
  MyOrderScreen: undefined;
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
  description: string,
  cover_image: string,
  product_images: [
    {
      id: string,
      image_name: string,
      path: string
    }
  ],
  price: string,
  rating: string
}

export type ProductsList = {
  label: string,
  description: string,
}

export type HeaderPage = {
  title: string
}

export type CategoryList = {
  id: string,
  name: string,
  image: string
}
