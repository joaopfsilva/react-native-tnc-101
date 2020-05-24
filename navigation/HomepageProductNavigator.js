import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomepageScreen from '../screens/HomepageScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsListScreen from '../screens/ProductsListScreen';

const HomepageProductNavigator = createStackNavigator({
  Homepage: HomepageScreen,
  ProductDetail: ProductDetailScreen,
  ProductsList: ProductsListScreen,
});

export default createAppContainer(HomepageProductNavigator);