import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface HeaderProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ isDarkTheme, setIsDarkTheme }: HeaderProps) {
  const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);
  
  return (
    <View style={[styles.header, isDarkTheme && darkTheme.header]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>

      <Switch
          trackColor={{ false: "#767577", true: "#FFF" }}
          thumbColor={isDarkTheme ? "#222" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkTheme}
          style={styles.themeSwitch}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  themeSwitch: {
    position: 'absolute',
    right: 20,
    top: 4,
    transform: [{ scaleX: .6 }, { scaleY: .6 }],
  }
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#3E3E3E',
  },
  header: {
    backgroundColor: '#3E3E3E'
  }
})
