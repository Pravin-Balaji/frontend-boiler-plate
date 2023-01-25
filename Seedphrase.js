import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, StatusBar, Image, Button } from 'react-native';



export default function Seedphrase ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.mainText}>Your Seed Phrase makes it easy to backup and restore your account</Text>
                <Text style={styles.helpText}>Warning: Never disclose your Secret Recovery Phrase. Anyone with this phrase can take you assets forever</Text>
            </View>
            <View style={styles.cont}>
                <Image source={require('./assets/hide.png')}/>
            </View>
            <View style={styles.cont}>
              <View style={styles.buttonContainer}>
                <Button title="couch"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="happy"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="resource"/>
              </View>
            </View>
            <View style={styles.cont}>
              <View style={styles.buttonContainer}>
                <Button title="pull"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="proposer"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="one"/>
              </View>
            </View>
            <View style={styles.cont}>
              <View style={styles.buttonContainer}>
                <Button title="borrow"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="beauty"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="heart"/>
              </View>
            </View>
            <View style={styles.cont}>
              <View style={styles.buttonContainer}>
                <Button title="divide"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="ahead"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="observe"/>
              </View>
            </View>
            <View style={styles.fixToText}>
              <Button title="Create New Wallet  >" color="gold" onPress={() => {SeStack}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    cont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        paddingRight:100,
    },
    fixToText: {
      resizeMode: 'contain',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stretch: {
      resizeMode: 'contain',
      padding: 1,
      width: 50,
      height: 50,
      resizeMode: 'stretch',
    },
    bannerImage: {
      width: '100%',
      height: '20%',
      resizeMode: 'contain'
    },
    content: {
      padding: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    mainText: {
      fontFamily: 'San-serif',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    helpText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10
    },
    hintText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 15
    }
  });