import { createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import LoginScreen from './src/pages/LoginScreen';
import ShareValuesScreen from './src/pages/ShareValuesScreen';
import HomeScreen from './src/pages/HomeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Share: ShareValuesScreen,
}
);

//HomeScreen
const Routes = createAppContainer(
  createSwitchNavigator({
    Home: HomeStack,
    Login: LoginScreen,
    ShareValues: ShareValuesScreen,
  })
);

export default Routes;