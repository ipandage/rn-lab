/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
const Header = require('./header');
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export class List extends Component<Props> {
    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        );
    }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.flex}>
            <List title='宇航员在太空宣布“三体”获奖'></List>
            <List title='NASA发短片纪念火星征程50年'></List>
            <List title='男生连续做一周苦瓜吃吐女友'></List>
            <List title='女童遭鲨鱼袭击又下海救伙伴'></List>
        </View>
    );
  }
}


export class ImportantNews extends Component<Props> {
    show = (title) => {
        alert(title);
    }

    render() {
        const news = [];
        for(const i in this.props.news){
            const text = (
                <Text
                    onPress={this.show.bind(this, this.props.news[i])}
                    numberOfLines={2}
                    style={styles.news_item}>
                    {this.props.news[i]}
                </Text>
            );
            news.push(text);
        }
        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
    list_item_font:{
        fontSize:16
    },
    news_title:{
        fontSize:20,
        fontWeight:'bold',
        color: '#CD1D1C',
        marginLeft:10,
        marginTop:15,
    },
    news_item:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:20,
    }
});