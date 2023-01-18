import classNames from 'classnames';
import { View } from 'components/atoms/View';
import { Text } from 'components/atoms/Text';

interface LabelProps {
  text: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
  textUppercase?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tetriary?: boolean;
  success?: boolean;
  danger?: boolean;
}

export const Label = ({
  text,
  textAlign = 'center',
  textUppercase = false,
  primary = true,
  secondary,
  tetriary,
  success,
  danger,
}: LabelProps) => {
  return (
    <View
      className={classNames('p-3 rounded-full', {
        'bg-surface-1': primary || success || danger,
        'bg-surface-2': secondary,
        'bg-surface-3': tetriary,
      })}
    >
      {text && (
        <Text
          styles={`text-${textAlign}`}
          primary={primary || success || danger}
          secondary={secondary}
          tetriary={tetriary}
          uppercase={textUppercase}
        >
          {text}
        </Text>
      )}
    </View>
  );
};
