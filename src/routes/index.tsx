import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {CATEGORIES, QUESTIONS, RESULTS} from '~/shared/constants/routes';

import Categories from '~/shared/views/Categories';
import Results from '~/shared/views/Results';
import Questions from '~/modules/Questions/views/Questions';

const Stack = createStackNavigator();

const RootStack: React.FC = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={CATEGORIES}
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <Stack.Screen
          name={CATEGORIES}
          component={Categories}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={QUESTIONS}
          component={Questions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RESULTS}
          component={Results}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default RootStack;
