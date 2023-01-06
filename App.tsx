import React from 'react';

import { SafeAreaView } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { Navigation } from 'components/organisms/Navigation';

const App = () => {
  return (
    <Navigation>
      <SafeAreaView></SafeAreaView>
    </Navigation>
  );
};

export default withExpoSnack(App);
