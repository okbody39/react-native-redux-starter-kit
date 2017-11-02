import React, { Component } from 'react';
import { FlatList } from 'react-native';
import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	ListItem,
} from 'native-base';

import styles from './styles';

class StickyListTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Movies', header: true },
				{ name: 'Interstellar', header: false },
				{ name: 'Dark Knight', header: false },
				{ name: 'Pop', header: false },
				{ name: 'Pulp Fiction', header: false },
				{ name: 'Burning Train', header: false },
				{ name: 'Music', header: true },
				{ name: 'Adams', header: false },
				{ name: 'Nirvana', header: false },
				{ name: 'Amrit Maan', header: false },
				{ name: 'Oye Hoye', header: false },
				{ name: 'Eminem', header: false },
				{ name: 'Places', header: true },
				{ name: 'Jordan', header: false },
				{ name: 'Punjab', header: false },
				{ name: 'Ludhiana', header: false },
				{ name: 'Jamshedpur', header: false },
				{ name: 'India', header: false },
				{ name: 'People', header: true },
				{ name: 'Jazzy', header: false },
				{ name: 'Appie', header: false },
				{ name: 'Baby', header: false },
				{ name: 'Sunil', header: false },
				{ name: 'Arrow', header: false },
				{ name: 'Things', header: true },
				{ name: 'table', header: false },
				{ name: 'chair', header: false },
				{ name: 'fan', header: false },
				{ name: 'cup', header: false },
				{ name: 'cube', header: false },
			],
			stickyHeaderIndices: [],
		};
	}

	componentWillMount() {
		var arr = [];
		this.state.data.map(obj => {
			if (obj.header) {
				arr.push(this.state.data.indexOf(obj));
			}
		});
		arr.push(0);
		this.setState({
			stickyHeaderIndices: arr,
		});
	}

	renderItem = ({ item }) => {
		if (item.header) {
			return (
				<ListItem itemDivider>
					<Left />
					<Body style={{ marginRight: 40 }}>
						<Text style={{ fontWeight: 'bold' }}>
							{item.name}
						</Text>
					</Body>
					<Right />
				</ListItem>
			);
		} else if (!item.header) {
			return (
				<ListItem style={{ marginLeft: 0 }}>
					<Body>
						<Text>{item.name}</Text>
					</Body>
				</ListItem>
			);
		}
	};

	render() {
		var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Sticky Header List</Title>
					</Body>
					<Right />
				</Header>

				<FlatList
					data={this.state.data}
					renderItem={this.renderItem}
					keyExtractor={item => item.name}
					stickyHeaderIndices={this.state.stickyHeaderIndices}
				/>

			</Container>
		);
	}
}

export default StickyListTest;
