import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Dimensions,
} from 'react-native';
import Button from './Button';


export default function SearchList(props) {
    const { dataSource } = props
    const [filter,setfilter] = useState([])
    const handleText=(text)=>{
        setfilter(dataSource)
        if(text){   
            const temp = text.toLowerCase()
            const templist = dataSource.filter(item => {
                if (item.expr.toString().includes(temp)||item.tol.toString().includes(temp))
                return item
            })
            setfilter(templist)
        }
    }

    return (
        <ScrollView
            onPress={props.onPress}
            style={styles.container}>
            <View>
                <TextInput autoFocus={true} placeholder='Click here to view History' onPressOut={()=>handleText('')} style={styles.textInput} onChangeText={(text)=>handleText(text)}></TextInput>
                <Button text={'Clear'} onPress={()=>setfilter([])}></Button>
            </View>
            
            <View style={styles.subContainer}>
                {
                    filter.length ?
                    filter.map(item => {
                            return (
                                <View style={styles.itemView}>
                                    <TouchableOpacity>
                                        <Text style={styles.itemText}>Exp: {item.expr}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.itemText}>Res: {item.tol}</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            )
                        })
                        :null
                    
                        // <View
                        //     style={styles.noResultView}>
                        //     <Text style={styles.noResultText}>No search items matched</Text>
                        // </View>
                }
            </View>
        </ScrollView>
   
        

    )
}

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '10%',
        left: 0, right: 0, bottom: 0,
    },
    subContainer: {
        backgroundColor: '#84DCC6',
        paddingTop: 10,
        //marginHorizontal: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexWrap: 'wrap',

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    itemView: {
        // marginHorizontal: '10%',
        //backgroundColor: 'rgba(52, 52, 52, 0.8)',
        backgroundColor:"white",
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
        alignItems:"center",
    },
    itemText: {
        color: 'black',
        fontSize:30,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
    },
    noResultView: {
        height: screen.height/15,
        marginVertical:screen.height/150,
        paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    noResultText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        justifyContent:'center',
        alignItems:"center",
    },
    textInput: {
        backgroundColor: '#BFBFBF',
        borderRadius: 10,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:screen.width/20,
        paddingHorizontal: 10,
        textAlign: 'center',
        width: '80%'
      },

    clearButton:{
        width:'10%',

    }

});