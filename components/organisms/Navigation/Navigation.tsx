import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreatorTreningsScreen } from '../../screens/CreatorTreningsScreen';
import { Main } from '../../screens/MainScreen';
import { ExerciseScreen } from '../../screens/ExerciseScreen';
import { TreningsListScreen } from '../../screens/TreningsListScreen';

interface NavigationProps {
  children: React.ReactNode;
}

const Stack = createNativeStackNavigator();

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExerciseScreen"
          component={ExerciseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatorTreningsScreen"
          component={CreatorTreningsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TreningsListScreen"
          component={TreningsListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};
