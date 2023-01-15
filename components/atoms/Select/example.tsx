import { FC, useState } from 'react';
import { Select, Option } from 'components/atoms/Select';
import { View } from 'components/atoms/View';

export const SelectExample: FC = () => {
  const [, setSelected] = useState<Option | undefined>(undefined);
  const data: Option[] = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

  return (
    <Select label="Select Item" data={data} onSelect={setSelected} width={60} />
  );
};
