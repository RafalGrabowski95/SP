import { Text } from 'components/atoms/Text';
import { Input } from 'components/atoms/Input';

export const Settings = () => {
  return (
    <>
      <Text primary styles="bg-white dark:bg-red-500">
        Settings
      </Text>
      <Input placeholder="elo" suffix="kg" />
    </>
  );
};
