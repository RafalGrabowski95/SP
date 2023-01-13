import { styled } from 'nativewind';
import { TextInput as TextInputNative } from 'react-native';
import { View } from 'components/atoms/View';
import { Text } from 'components/atoms/Text';
import classNames from 'classnames';

const TextInput = styled(TextInputNative);

interface InputProps {
  placeholder?: string;
  suffix?: string;
}

export const Input = ({ placeholder, suffix }: InputProps) => {
  return (
    <View className="flex flex-row items-center bg-surface-2 p-1 pb-2 rounded-full">
      <TextInput
        placeholder={placeholder}
        className={classNames(
          'border-b-2 border-main-1 mx-4 h-10 text-white mb-2 pb-0',
          {
            'w-9/12': suffix,
          },
        )}
        placeholderTextColor="#929090"
      />
      {suffix && (
        <Text styles="font-titilium-light w-3/12 text-text-3 pt-1">
          {suffix}
        </Text>
      )}
    </View>
  );
};
