'use strict'

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button,
} from 'react-native'

export default class About extends Component<{}> {

    componentWillMount() {
        this.props.navigator.setTitle({ title: 'HUBUNGI KAMI' })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aboutcontainer}>
                    <Text style={styles.about}>
                        Grand Slipi Tower, Jl. Letjen S. Parman, RT 1/RW 4, Palmerah, Kota jakarta Barat, daerah Khusus Ibukota Jakarta 11480
				</Text>
                </View>
            </View>
        );
    }
}

About.navigatorStyle = {
    statusBarColor: '#222222',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#0a0a0a',
    navBarTextColor: '#777777',
    navBarButtonColor: '#777777',
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#222222',
        alignItems: 'flex-start',
    },
    aboutcontainer: {
        margin: 20,
    },
    about: {
        color: 'white'
    },
});
