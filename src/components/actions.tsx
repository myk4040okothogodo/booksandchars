import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from '@expo/vector-icons';

// Some actions to map over
const actions = [
  {
    title: 'Send',
    icon: <FontAwesome name="send" size={24} color="white" />,
    color: '#ff9500',
    onPress: () => {},
  },
  {
    title: 'Receive',
    icon: <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />,
    color: '#5856d6',
    onPress: () => {},
  },
  {
    title: 'Transactions',
    icon: <Feather name="clock" size={24} color="white" />,
    color: '#34c759',
    onPress: () => {},
  },
];

// Actions including the trigger button
const Actions = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setExpanded(!expanded)}
        style={[styles.button, { backgroundColor: '#007bff' }]}>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </Pressable>
      <AnimatePresence>
        {expanded && (
          <>
            {actions.map((action, i) => (
              <Action key={i} action={action} index={i} />
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// A pressable that animates in and out
const Action = ({ action, index }) => (
  <MotiView
    transition={{ delay: index * 100, damping: 15 }}
    from={{
      opacity: 0,
      translateY: 0
    }}
    animate={{
      opacity: 1,
      translateY: -60 * (index + 1),
    }}
    exit={{
      opacity: 0,
      translateY: 0
    }}>
      <Pressable
          onPress={action.onPress}
          style={[
            styles.button,
            {
              backgroundColor: action.color,
              shadowColor: action.color,
            },
          ]}
        >
        {action.icon}
      </Pressable>
  </MotiView>
);
  
export default Actions

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
  },
});
