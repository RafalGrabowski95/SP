import {Text} from '../../atoms/Text';
import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreensList} from '../../../constans/index';

export const Main = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>Main</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('CreatorTreningsScreen', {name: 'Jane'})
        }
      />
    </>
  );
};
