import React, { Component } from 'react';
import { Image } from 'react-native';
import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Card, CardItem, Thumbnail,
} from 'native-base';

import styles from './styles';

class CardTest extends Component {
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
						<Title>Card</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Card>
						<CardItem header>
							<Text>NativeBase</Text>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									Your text here
								</Text>
							</Body>
						</CardItem>
						<CardItem footer>
							<Text>GeekyAnts</Text>
						</CardItem>
					</Card>
					<Card>
						<CardItem>
							<Icon active name="logo-googleplus" />
							<Text>Google Plus</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</CardItem>
					</Card>
					<Card>
						<CardItem>
							<Left>
								<Thumbnail source={{ uri: 'Image URL' }} />
								<Body>
									<Text>NativeBase</Text>
									<Text note>GeekyAnts</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem cardBody>
							<Image source={{ uri: 'http://www.lattetalk.co.kr/images/bn01.png' }} style={{ height: 200, width: null, flex: 1 }}/>
						</CardItem>
						<CardItem>
							<Left>
								<Button transparent>
									<Icon active name="thumbs-up" />
									<Text>12 Likes</Text>
								</Button>
							</Left>
							<Body>
								<Button transparent>
									<Icon active name="chatbubbles" />
									<Text>4 Comm</Text>
								</Button>
							</Body>
							<Right>
								<Text>11h ago</Text>
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default CardTest;
