import { styled } from 'nativewind';
import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';
import classnames from 'classnames';
import { Text } from 'components/atoms/Text';

interface ButtonProps {
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  onPress?: () => void;
  styles?: string;
}

const StyledTouchableOpacity = styled(NativeTouchableOpacity);

export const Button = ({
  text,
  onPress,
  primary,
  secondary,
  success,
  icon,
  styles,
}: ButtonProps) => {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      className={classnames(
        `rounded-3xl p-3`,
        {
          'bg-button-1': primary,
          'bg-button-2': secondary,
          'bg-button-3': success,
        },
        styles,
      )}
    >
      {text && <Text primary>{text}</Text>}
      {icon && icon}
    </StyledTouchableOpacity>
  );
};
