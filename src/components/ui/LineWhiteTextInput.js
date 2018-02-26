'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    TextInput,
} from 'react-native'

export default class LineWhiteTextInput extends Component<{}> {
    render() {
        let { style, ...restProps } = this.props
        let textstyle = styles.text;
        textstyle = StyleSheet.flatten([textstyle, style]);
        return (
            <TextInput
                {...restProps}
                style={textstyle}
                placeholderTextColor={'#777777'}
                underlineColorAndroid={'white'}
                selectionColor={'#777777'}
            />
        )
    }
}
LineWhiteTextInput.propTypes = {
    text: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
})