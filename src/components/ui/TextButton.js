'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

export default class TextButton extends Component<{}> {
    render() {
        let { leftSide, rightSide, style, text, onPress } = this.props
        return (
            <TouchableOpacity
                style={styles.inputstyle}
                onPress={() => onPress()}
            >
                {leftSide}
                <Text style={style}>{text}</Text>
                {rightSide}
            </TouchableOpacity>
        )
    }
}

TextButton.propTypes = {
    leftSide: PropTypes.any,
    rightSide: PropTypes.any,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

TextButton.defaultProps = {
    leftSide: <View style={{ flex: 1 }} />,
    rightSide: <View style={{ flex: 1 }} />,
    text: '',
    onPress: () => { },
}

const styles = StyleSheet.create({
    inputstyle: {
        flexDirection: 'row',
    }
})