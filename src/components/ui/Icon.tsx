import { View, Text } from 'react-native';
import React, { FC, ReactNode } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  color?: string;
  size: number;
  name: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons';
}

const Icon: FC<IconProps> = ({ iconFamily, name, size, color }) => {
  return (
    <>
      {iconFamily == 'Ionicons' && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {iconFamily == 'MaterialIcons' && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
      {iconFamily == 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
    </>
  );
};

export default Icon;
