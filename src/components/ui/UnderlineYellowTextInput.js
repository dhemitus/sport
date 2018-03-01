'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class UnderlineYellowTextInput extends Component<{}> {
	render() {
		let { leftSide, rightSide, style, ...restProps } = this.props
		let textstyle = styles.text;
		textstyle = StyleSheet.flatten([textstyle, style]);
		return (
			<View style={styles.container}>
				{leftSide}
				<TextInput
					{...restProps}
					style={textstyle}
					placeholderTextColor={'#777777'}
					underlineColorAndroid={'#e4ff64'}
					selectionColor={'#e4ff64'}
				/>
				{rightSide}
			</View>
		)
	}
}
UnderlineYellowTextInput.propTypes = {
	leftSide: PropTypes.object,
	rightSide: PropTypes.object,
}

UnderlineYellowTextInput.defaultProps = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	text: {
		flex: 1,
		color: 'white',
	},
})