import { styled } from 'nativewind';
import { ReactElement, useRef, useState } from 'react';
import { FlatList, Pressable, Modal, StyleSheet } from 'react-native';
import { Text } from 'components/atoms/Text';
import { View } from 'components/atoms/View';
import { ArrowDown } from 'components/atoms/icons';
import classnames from 'classnames';

const TouchableOpacityStyled = styled(Pressable);
const ModalStyled = styled(Modal);

export type Option = { label: string; value: string };

interface SelectProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: Option) => void;
  width: number;
}

export const Select = ({ label, data, onSelect, width }: SelectProps) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Option | undefined>(undefined);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any): ReactElement => (
    <TouchableOpacityStyled
      className="p-2 flex flex-row justify-center"
      onPress={() => onItemPress(item)}
    >
      <Text styles="text-text-2">{item.label}</Text>
    </TouchableOpacityStyled>
  );

  const renderButton = () => (
    <>
      <Text styles="flex-1 text-center text-text-2 pl-12">
        {(!!selected && selected.label) || label}
      </Text>
      <View className={classnames('px-4', { 'rotate-180': visible })}>
        <ArrowDown />
      </View>
    </>
  );

  const renderDropdown = (): ReactElement => {
    return (
      <ModalStyled visible={visible} transparent className="">
        <TouchableOpacityStyled
          className={`w-full w-${width}`}
          onPress={() => setVisible(false)}
        >
          <View className="bg-white h-12 w-full rounded-t-3xl absolute"></View>
          <View className="flex flex-row items-center h-12 bg-main-1 rounded-full">
            {renderButton()}
          </View>
          <View className="bg-white w-full rounded-b-3xl">
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.label}
            />
          </View>
        </TouchableOpacityStyled>
      </ModalStyled>
    );
  };

  return (
    <TouchableOpacityStyled
      ref={DropdownButton as any}
      onPress={toggleDropdown}
      className={classnames(
        `flex flex-row items-center h-12 z-10 relative bg-main-1 rounded-full w-${width}`,
      )}
    >
      {renderDropdown()}
      {renderButton()}
    </TouchableOpacityStyled>
  );
};
