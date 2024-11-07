import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const SimpleBottomSheet = () => {
  const sheetRef = useRef(null)

  const renderContent = () => (
    <View style={styles.sheetContent}>
      <Text style={styles.sheetText}>This is a simple bottom sheet!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={styles.buttonText}>Close Sheet</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => sheetRef.current.snapTo(0)}
        >
          <Text style={styles.buttonText}>Open Bottom Sheet</Text>
        </TouchableOpacity>

        <BottomSheet
          ref={sheetRef}
          snapPoints={[250, 0]}
          borderRadius={20}
          renderContent={renderContent}
        />
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContent: {
    backgroundColor: '#fff',
    padding: 16,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1F74BA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default SimpleBottomSheet
