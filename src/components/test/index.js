import React, { Component } from 'react';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Text,
	Left,
	Body,
	Right,
	List,
	ListItem,
} from 'native-base';

import styles from './styles';

const datas = [
	{
		route: 'ActionSheet',
		text: 'Action Sheet',
	},
	{
		route: 'Badge',
		text: 'Badge',
	},
	{
		route: 'Button',
		text: 'Button',
	},
	{
		route: 'Card',
		text: 'Card',
	},
	{
		route: 'CheckBox',
		text: 'CheckBox',
	},
	{
		route: 'DeckerSwiper',
		text: 'Decker Swiper',
	},
	{
		route: 'FABs',
		text: 'FABs',
	},
	{
		route: 'Form',
		text: 'Form',
	},
	{
		route: 'Icon',
		text: 'Icon',
	},
	{
		route: 'List',
		text: 'List',
	},
	{
		route: 'StickyHeaderList',
		text: 'StickyHeader List',
	},
	{
		route: 'Picker',
		text: 'Picker',
	},
	{
		route: 'RadioButton',
		text: 'RadioButton',
	},
	{
		route: 'SearchBar',
		text: 'SearchBar',
	},
	{
		route: 'Segment',
		text: 'Segment',
	},
	{
		route: 'Spinner',
		text: 'Spinner',
	},
	{
		route: 'SwipableList',
		text: 'Swipable List',
	},
	{
		route: 'Tabs',
		text: 'Tabs',
	},
	{
		route: 'Thumbnail',
		text: 'Thumbnail',
	},
	{
		route: 'Toast',
		text: 'Toast',
	},
];

class Test extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate('DrawerOpen')}
						>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Components</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem
								button
								onPress={() => this.props.navigation.navigate(data.route)}
							>
								<Text>{data.text}</Text>
								<Right>
									<Icon name="arrow-forward" style={{ color: '#999' }} />
								</Right>
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default Test;
