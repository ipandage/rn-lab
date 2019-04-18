/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>網易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        marginTop:25,
        height:50,
        borderBottomColor:'#EF2D36',
        alignItems:'center' /* 使Text组件水平居中*/
    },
    font:{
        fontSize:25,
        fontWeight: 'bold',
        textAlign:'center' /*使文字在Text组件中居中*/
    },
    font_1:{
        color:'#CD1D1C'
    },
    font_2:{
        color:'#FFF',
        backgroundColor:'#CD1D1C',
    }
});