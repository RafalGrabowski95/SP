import React from 'react';
import { SafeAreaView } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { Navigation } from './components/organisms/Navigation';
import { Text } from './components/atoms/Text';

const App = () => {
  return (
    <Navigation>
      <SafeAreaView>
        <Text className='font-titilium text-2xl'>
          asdsad
        </Text>

      </SafeAreaView>
    </Navigation>
  );
};

export default withExpoSnack(App);
