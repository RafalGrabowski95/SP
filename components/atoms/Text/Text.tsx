import { styled } from 'nativewind';
import { Text as NativeText } from 'react-native';
import classnames from 'classnames';

type FontSize = keyof typeof FontSizes;

interface TextProps {
  children: React.ReactNode;
  styles?: string;
  fontSize?: FontSize;
  uppercase?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tetriary?: boolean;
  bold?: boolean;
}

const StyledText = styled(NativeText);

export const Text = ({
  children,
  styles,
  fontSize = 'regular',
  uppercase,
  primary = true,
  secondary,
  tetriary,
  bold,
}: TextProps) => {
  return (
    <StyledText
      className={classnames(
        `font-titilium-semibold`,
        styles,
        FontSizes[fontSize],
        {
          uppercase: uppercase,
          'text-text-1': primary,
          'text-text-2': secondary,
          'text-text-3': tetriary,
          'font-titilium-bold': bold,
        },
      )}
    >
      {children}
    </StyledText>
  );
};

export enum FontSizes {
  xs = 'text-xs',
  sm = 'text-sm',
  regular = 'text-base',
  lg = 'text-lg',
  xl = 'text-xl',
  xxl = 'text-2xl',
  xxxl = 'text-3xl',
}
