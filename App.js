import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from "./src/screens/CompenentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorChanging from "./src/screens/ColorChanging";
const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        List:ListScreen,
        Image:ImageScreen,
        Counter:CounterScreen,
        Color:ColorScreen,
        ColorChanging:ColorChanging
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
);

export default createAppContainer(navigator);
