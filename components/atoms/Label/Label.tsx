import classNames from 'classnames';
import { View } from 'components/atoms/View';
import { Text } from 'components/atoms/Text';

interface IfLabelProps {
  text?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tetriary' | 'success' | 'danger';
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
  textUppercase?: boolean;
}

export const Label = ({
  text = '',
  color = 'primary',
  textAlign = 'left',
  textUppercase = false,
}: IfLabelProps) => {
  const getTextColor = (color: IfLabelProps['color']) => {
    switch (color) {
      case 'secondary':
        return 'text-text-2';
      case 'tetriary':
        return 'text-text-3';
      case 'success':
      case 'danger':
      case 'primary':
      default:
        return 'text-text-1';
    }
  };

  const getBgColor = (color: IfLabelProps['color']) => {
    switch (color) {
      case 'secondary':
        return 'bg-surface-2';
      case 'tetriary':
        return 'bg-surface-3';
      case 'success':
      case 'danger':
      case 'primary':
      default:
        return 'bg-surface-1';
    }
  };

  return (
    <View
      className={classNames('p-3 rounded-full', `${getBgColor(color)}`, {
        uppercase: textUppercase,
      })}
    >
      {text && (
        <Text styles={`text-${textAlign} ${getTextColor(color)}`}>{text}</Text>
      )}
    </View>
  );
};
