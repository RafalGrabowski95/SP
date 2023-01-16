import { Text } from 'components/atoms/Text';
import { Input } from 'components/atoms/Input';
import { Label } from 'components/atoms/Label';

export const Settings = () => {
  return (
    <>
      <Text primary styles="bg-white dark:bg-red-500">
        Settings
      </Text>
      <Input placeholder="elo" suffix="kg" />
      <Label text='test' color='secondary' textAlign='center' textUppercase></Label>
    </>
  );
};
