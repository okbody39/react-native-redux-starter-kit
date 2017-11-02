import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	List, ListItem, Switch, Thumbnail, Separator,
} from 'native-base';

import styles from './styles';

class ListTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

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
						<Title>List</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<List>
						<ListItem itemHeader first>
							<Text>COMEDY</Text>
						</ListItem>
						<ListItem avatar>
							<Left>
								<Thumbnail source={{ uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_UY268_CR43,0,182,268_AL_.jpg' }} />
							</Left>
							<Body>
								<Text>Kumar Pratik</Text>
								<Text note>Doing what you like will always keep you happy . .</Text>
							</Body>
							<Right>
								<Text note>3:43 pm</Text>
							</Right>
						</ListItem>
						<ListItem itemDivider>
							<Text>A</Text>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="plane" />
							</Left>
							<Body>
								<Text>Airplane Mode</Text>
							</Body>
							<Right>
								<Switch value={false} />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="wifi" />
							</Left>
							<Body>
								<Text>Wi-Fi</Text>
							</Body>
							<Right>
								<Text>GeekyAnts</Text>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="bluetooth" />
							</Left>
							<Body>
								<Text>Bluetooth</Text>
							</Body>
							<Right>
								<Text>On</Text>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem itemHeader>
							<Text>ACTION - itemHeader</Text>
						</ListItem>
						<ListItem>
							<Text>Terminator Genesis</Text>
						</ListItem>
					</List>
					<Separator bordered>
						<Text>Separator</Text>
					</Separator>
					<ListItem>
						<Text>Claire Barclay</Text>
					</ListItem>
					<ListItem last>
						<Text>Kelso Brittany</Text>
					</ListItem>
					<Separator bordered>
						<Text>Dynamic Row - Separator</Text>
					</Separator>
					<List dataArray={items}
						renderRow={(item) =>
							<ListItem>
								<Text>{item}</Text>
							</ListItem>
						}>
					</List>
				</Content>
			</Container>
		);
	}
}

export default ListTest;
