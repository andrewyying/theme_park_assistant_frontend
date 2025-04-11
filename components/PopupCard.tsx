//@ts-nocheck
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenConst } from "@/constants/screenconst";

const HEIGHT = ScreenConst.window.height;
const WIDTH = ScreenConst.window.width;

export default function PopupCard({ spot, onClose }) {
  if (!spot) return null;

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close" size={20} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>{spot.name}</Text>
      <Text style={styles.desc}>{spot.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: HEIGHT * 0.12,
    left: WIDTH * 0.04,
    right: WIDTH * 0.04,
    paddingHorizontal: WIDTH * 0.04,
    paddingVertical: HEIGHT * 0.01,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 4,
    zIndex: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 12 },
  desc: { fontSize: 14, marginVertical: 8 },
});
