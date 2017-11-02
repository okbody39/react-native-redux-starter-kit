import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Badge,
} from 'native-base';

import styles from './styles';

class BadgeTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Badge</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Badge>
						<Text>2</Text>
					</Badge>
					<Badge primary>
						<Text>2</Text>
					</Badge>
					<Badge success>
						<Text>2</Text>
					</Badge>
					<Badge info>
						<Text>2</Text>
					</Badge>
					<Badge warning>
						<Text>2</Text>
					</Badge>
					<Badge danger>
						<Text>2</Text>
					</Badge>
					<Badge primary>
						<Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
					</Badge>
					<Badge style={{ backgroundColor: 'black' }}>
						<Text style={{ color: 'white' }}>1866</Text>
					</Badge>
				</Content>
			</Container>
		);
	}
}

export default BadgeTest;
