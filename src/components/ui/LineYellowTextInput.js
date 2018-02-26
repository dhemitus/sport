'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class LineYellowTextInput extends Component<{}> {
	render() {
		let { style, ...restProps } = this.props
		let textstyle = styles.inputstyle;
		textstyle = StyleSheet.flatten([textstyle, style]);
		return (
			<View style={textstyle}>
				<TextInput
					{...restProps}
					placeholderTextColor={'#777777'}
					underlineColorAndroid={'transparent'}
					style={styles.text}
					selectionColor={'#e4ff64'}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputstyle: {
		marginTop: 25,
		paddingHorizontal: 10,
		backgroundColor: '#222222',
		borderColor: '#e4ff64',
		borderWidth: 1,
		borderRadius: 10,
	},
	text: {
		color: 'white',
	},
})