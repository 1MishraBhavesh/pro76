import React ,{Component} from 'react'
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native'

export default class DailyPicScreen extends Component{
    render(){
        return(
            <View style={styles.homeBar}>
                <Text> Daily Pic Screen </Text>
            </View>
        )
    }
}
 const styles=StyleSheet.create({
     homeBar:{
         flex:1,
         justifyContent:"center",
         alignItems:"center"
     }
 })
 