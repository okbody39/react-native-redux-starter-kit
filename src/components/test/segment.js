import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Segment,
} from 'native-base';

import styles from './styles';

class SegmentTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header hasTabs>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Segment>
							<Button first><Text>Puppies</Text></Button>
							<Button last active><Text>Cubs</Text></Button>
						</Segment>
					</Body>
					<Right>
						<Button transparent>
							<Icon name="search" />
						</Button>
					</Right>
				</Header>
				<Segment>
					<Button first>
						<Text>Puppies</Text>
					</Button>
					<Button active>
						<Text>Cubs</Text>
					</Button>
				</Segment>
				<Content padder>
					<Text>Awesome segment</Text>
				</Content>
			</Container>
		);
	}
}

export default SegmentTest;
