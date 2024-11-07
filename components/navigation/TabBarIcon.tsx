// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import COLORS from '@/configs/colors';
import Feather from '@expo/vector-icons/Feather';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

interface CustomIconProps extends React.ComponentProps<typeof Feather> {
  focused?: boolean; // Aquí agregas la propiedad personalizada
}

export function TabBarIcon({ style, focused, ...rest }: CustomIconProps) {
  return <Feather size={28} style={[{ marginBottom: -3 }, style]} color={focused ? COLORS.PRIMARY : COLORS.TEXT_LIGHT} {...rest} />;
}
