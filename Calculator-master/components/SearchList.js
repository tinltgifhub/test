import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Dimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function SearchList(props) {
    const { dataSource } = props
    return (
        <ScrollView
            onPress={props.onPress}
            style={styles.container}
            >
            <View style={styles.subContainer}>
                {
                    dataSource.length ?
                        dataSource.map(item => {
                            return (
                                <View style={styles.itemView}>
                                    <TouchableOpacity>
                                        <Text style={styles.itemText}>{item.expr}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.itemText}>{item.tol}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                        :
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No search items matched</Text>
                        </View>
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

});