import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabBarLabel from '@/components/navigation/TabBarLabel';
import Crown from '@/assets/icons/Crown';
import COLORS from '@/configs/colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { //todo: poner valores adecuados para el tema
          paddingTop: 10, 
          paddingBottom: 10,
          height: 65
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel title='Home' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='home' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="mypurchases"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel title='Mis compras' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='shopping-bag' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="promotions"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel title='Promociones' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='star' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel title='Member' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            // <TabBarIcon name='home' focused={focused} />
            // <View style={{borderWidth: 2}}>
            <Crown color={focused ? COLORS.PRIMARY : COLORS.TEXT_LIGHT} width={32} height={32} /> //todo: change this to use wp
            // </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel title='Cuenta' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='user' focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}