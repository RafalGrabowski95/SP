import React from 'react';
import { styled } from 'nativewind';
import { Text as NativeText } from 'react-native';
import classNames from 'classnames';
import { View } from 'components/atoms/View';

const StyledText = styled(NativeText);

interface IfLabelProps {
    text?: string;
    textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
    textWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    textAlign?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
    textUppercase?: boolean;
}

export const Label = ({ text='', textSize='base', textWeight='normal', textAlign='left', textUppercase=false }: IfLabelProps) => {
    return (
        <View className="bg-surface-2 p-2 rounded-full">
            <StyledText className={classNames(
                'text-white pl-3 pr-3',
                {
                    [`text-${textSize}`]: true,
                    [`text-${textWeight}`]: true,
                    [`text-${textAlign}`]: true,
                    'uppercase': textUppercase
                }
            )}>
                {text}
            </StyledText>
        </View>
    );
};
