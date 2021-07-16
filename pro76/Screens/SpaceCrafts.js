import React ,{Component} from 'react'
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native'

export default class SpaceCraftsScreen extends Component{
    render(){
        return(
            <View style={styles.homeBar}>
                <Text>  Space Crafts Screen </Text>
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
 