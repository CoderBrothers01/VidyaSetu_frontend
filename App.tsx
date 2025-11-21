import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './src/navigations/AuthNavigation';
import BottomtabNavigation from './src/navigations/BottomtabNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SchoolCode"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomtabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
