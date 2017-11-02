import React from 'react';

// import { Platform } from 'react-native';
import { Root, StyleProvider } from 'native-base';
import { StackNavigator } from 'react-navigation';

import getTheme from '../../native-base-theme/components';
import material from '../themes/base-theme';
import Drawer from './Drawer';
// import SideBar from '../components/sidebar';
import BasicFooter from '../components/home/basicFooter';
import IconFooter from '../components/home/iconFooter';
import IconText from '../components/home/iconText';
import BadgeFooter from '../components/home/badgeFooter';

import Test from '../components/test';
import ActionSheet from '../components/test/actionSheet';
import Badge from '../components/test/badge';
import Button from '../components/test/button';
import Card from '../components/test/card';
import CheckBox from '../components/test/checkBox';
import DeckerSwiper from '../components/test/deckerSwiper';
import FABs from '../components/test/fabs';
import Form from '../components/test/form';
import Icon from '../components/test/icon';
import List from '../components/test/list';
import StickyHeaderList from '../components/test/stickyHeaderList';
import Picker from '../components/test/picker';
import RadioButton from '../components/test/radioButton';
import SearchBar from '../components/test/searchBar';
import Segment from '../components/test/segment';
import Spinner from '../components/test/spinner';
import SwipableList from '../components/test/swipableList';
import Tabs from '../components/test/tabs';
import Thumbnail from '../components/test/thumbnail';
import Toast from '../components/test/toast';

const AppNavigator = StackNavigator(
	{
		Drawer: { screen: Drawer },

		BasicFooter: { screen: BasicFooter },
		IconFooter: { screen: IconFooter },
		IconText: { screen: IconText },
		BadgeFooter: { screen: BadgeFooter },

		Test: { screen: Test },
		ActionSheet: { screen: ActionSheet },
		Badge: { screen: Badge },
		Button: { screen: Button },
		Card: { screen: Card },
		CheckBox: { screen: CheckBox },
		DeckerSwiper: { screen: DeckerSwiper },
		FABs: { screen: FABs },
		Form: { screen: Form },
		Icon: { screen: Icon },
		StickyHeaderList: { screen: StickyHeaderList },
		List: { screen: List },
		Picker: { screen: Picker },
		RadioButton: { screen: RadioButton },
		SearchBar: { screen: SearchBar },
		Segment: { screen: Segment },
		Spinner: { screen: Spinner },
		SwipableList: { screen: SwipableList },
		Tabs: { screen: Tabs },
		Thumbnail: { screen: Thumbnail },
		Toast: { screen: Toast },

	},
	{
		initialRouteName: 'Drawer',
		headerMode: 'none',
	},
);

export default () =>
	(
		<Root>
			<StyleProvider style={getTheme(material)}>
				<AppNavigator />
			</StyleProvider>
		</Root>
	);
