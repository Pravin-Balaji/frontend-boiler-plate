import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, StatusBar, Image, Button } from 'react-native';
import Seedphrase from './Seedphrase';

const Stack = createStackNavigator();


// const SeStack = () => {
//   return(
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Seedphrase" component={Seedphrase} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.mainText}>Get the world's first non-custodial cypher card</Text>
                <Text style={styles.helpText}>Explore all Web3 in one place</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.row}>
                <Image style={styles.stretch} source={require('./assets/swap.png')}/>
                Swap to get intant USD
                </Text>
            </View> 
            <View style={styles.content}>
                <Text>
                <Image style={styles.stretch} source={require('./assets/buy.png')}/>
                Buy at affoedable price
                </Text>
            </View>
            <View style={styles.content}>
            <Text>
                <Image style={styles.stretch} source={require('./assets/chain.png')}/>
                9 Chains supported- more coming soon
                </Text>
            </View>
            <View style={styles.content}>
            <Text>
                <Image style={styles.stretch} source={require('./assets/browser.png')}/>
                Accepted all over the world
                </Text>
            </View>
            <View style={styles.fixToText}>
              <Button title="Create New Wallet  >" color="gold" onPress={() => navigation.navigate('Seedphrase')} />
            </View>
            <StatusBar style="auto" />
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

