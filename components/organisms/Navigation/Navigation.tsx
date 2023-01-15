import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreatorTreningsScreen } from '../../screens/CreatorTreningsScreen';
import { Main } from '../../screens/MainScreen';
import { ExerciseScreen } from '../../screens/ExerciseScreen';
import { TreningsListScreen } from '../../screens/TreningsListScreen';
import { Settings } from 'components/screens/Settings';

const navigationOptionsForAll = {
  headerShown: false,
};

interface NavigationProps {
  children: React.ReactNode;
}

export type ScreensList = {
  Main: undefined;
  ExerciseScreen: undefined;
  CreatorTreningsScreen: undefined;
  TreningsListScreen: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ScreensList>();

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={navigationOptionsForAll}
        />
        <Stack.Screen
          name="ExerciseScreen"
          component={ExerciseScreen}
          options={navigationOptionsForAll}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={navigationOptionsForAll}
        />
        <Stack.Screen
          name="CreatorTreningsScreen"
          component={CreatorTreningsScreen}
          options={navigationOptionsForAll}
        />

        <Stack.Screen
          name="TreningsListScreen"
          component={TreningsListScreen}
          options={navigationOptionsForAll}
        />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};
