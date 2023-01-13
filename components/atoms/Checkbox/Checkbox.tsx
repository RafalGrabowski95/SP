import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';
import { Text } from 'components/atoms/Text';
import { styled, useColorScheme } from 'nativewind';
import { View } from 'components/atoms/View';

const StyledTouchableOpacity = styled(NativeTouchableOpacity);

interface CheckboxProps {
  text: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export const Checkbox = ({
  text,
  checked = false,
  setChecked,
}: CheckboxProps) => {
  return (
    <View className="flex flex-row gap-1">
      <StyledTouchableOpacity
        className="flex justify-center items-center w-5 h-5 bg-main-1 mr-1"
        onPress={() => setChecked(!checked)}
      >
        <View className="flex justify-center items-center w-4 h-4 bg-white">
          {checked && <View className="w-3 h-3 bg-main-1"></View>}
        </View>
      </StyledTouchableOpacity>
      <Text primary>{text}</Text>
    </View>
  );
};
