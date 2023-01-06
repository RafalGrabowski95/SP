import React from 'react';
import { Text } from 'components/atoms/Text';


interface LabelProps {
    text: string;
}

export const Label = ({ text }: LabelProps) => {
    return (
        <Text>{text}</Text>
    );
};
