'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

export default class WButton extends Component<{}> {
    render() {
        let { style, onPress, children } = this.props
        let buttonstyle = styles.button;
        buttonstyle = StyleSheet.flatten([buttonstyle, style]);

        return (
            <TouchableOpacity
                style={buttonstyle}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

WButton.propTypes = {
//    leftSide: PropTypes.any,
//    rightSide: PropTypes.any,
//    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

WButton.defaultProps = {
//    leftSide: <View style={{ flex: 1 }} />,
//    rightSide: <View style={{ flex: 1 }} />,
    onPress: () => { console.log('default click') },
}

const styles = StyleSheet.create({
    button: {
        margin: 0,
    }
})