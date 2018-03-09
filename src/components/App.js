'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'
import store from '../redux/store'
//import { actionCreators as appAction } from "../redux/actions"

registerScreens(store, Provider)

const navigatorStyle = {
	statusBarColor: '#222222',
	statusBarTextColorScheme: 'light',
	navBarTitleTextCentered: true,
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: '#777777',
	navBarButtonColor: '#777777',
	drawUnderNavBar: true,
	navBarNoBorder: true,
//	navBarTransparent: false,
	//	tabBarButtonColor: 'red',
	//	tabBarSelectedButtonColor: 'red',
	//	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
//	navBarHideOnScroll: true,
	//	tabBarHidden: true,
//	navBarBlur: true,
	drawUnderTabBar: true
}

export default class App {

	constructor() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'weresport.Front',
				title: 'LAPANGANKU',
				navigatorStyle,
				leftButtons: [
					{
						id: 'sideMenu'
					}
				]
			},
			drawer: {
				left: {
					screen: 'weresport.Drawer'
				}
			},
		})	
	}
}