import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'components/atoms/Text';

export type ScreensList = {
  CreatorTreningsScreen: undefined;
  Main: undefined;
};

export const Main = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>Main 2</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('CreatorTreningsScreen', { name: 'Jane' })
        }
      />
    </>
  );
};
