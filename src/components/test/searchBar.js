import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Item, Input,
} from 'native-base';

import styles from './styles';

class SearchBarTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header searchBar rounded>
					<Item>
						<Icon name="ios-search" />
						<Input placeholder="Search" />
						<Icon name="ios-people" />
					</Item>
					<Button transparent>
						<Text>Search</Text>
					</Button>
				</Header>

				<Content padder>
					<Button
						onPress={() =>
							this.props.navigation.goBack()
						}
					>
						<Text>Go Back!!!</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default SearchBarTest;
