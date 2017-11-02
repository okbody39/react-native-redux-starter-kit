import React, { Component } from 'react';
import { Image } from 'react-native';
import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	View, DeckSwiper, Card, CardItem, Thumbnail,
} from 'native-base';
const cards = [
	{
		text: 'Card One',
		name: 'One',
		image: { uri: 'http://www.lattetalk.co.kr/images/bn01.png' },
	},
	{
		text: 'Card Two',
		name: 'Two',
		image: { uri: 'http://www.lattetalk.co.kr/images/bn.png' },
	},
];

import styles from './styles';

class DeckerSwiperTest extends Component {
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
						<Title>Decker Swiper</Title>
					</Body>
					<Right />
				</Header>

				<View>
					<DeckSwiper
						ref={(c) => this._deckSwiper = c}
						dataSource={cards}
						renderEmpty={() =>
							<View style={{ alignSelf: 'center' }}>
								<Text>Over</Text>
							</View>
						}
						renderItem={item =>
							<Card style={{ elevation: 3 }}>
								<CardItem>
									<Left>
										<Thumbnail source={item.image} />
										<Body>
											<Text>{item.text}</Text>
											<Text note>NativeBase</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem cardBody>
									<Image style={{ height: 300, flex: 1 }} source={item.image} />
								</CardItem>
								<CardItem>
									<Icon name="heart" style={{ color: '#ED4A6A' }} />
									<Text>{item.name}</Text>
								</CardItem>
							</Card>
						}
					/>
				</View>
				<View style={{
					flexDirection: 'row', flex: 1, position: 'absolute', bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15,
				}}>
					<Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
						<Icon name="arrow-back" />
						<Text>Swipe Left</Text>
					</Button>
					<Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
						<Text>Swipe Right</Text>
						<Icon name="arrow-forward" />
					</Button>
				</View>
			</Container>
		);
	}
}

export default DeckerSwiperTest;
