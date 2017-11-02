import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	List, ListItem, SwipeRow, View,
} from 'native-base';

import styles from './styles';

const datas = [
	'Simon Mignolet',
	'Nathaniel Clyne',
	'Dejan Lovren',
	'Mama Sakho',
	'Alberto Moreno',
	'Emre Can',
	'Joe Allen',
	'Phil Coutinho',
];

class SwipableListTest extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			basic: true,
			listViewData: datas,
		};
	}

	deleteRow(secId, rowId, rowMap) {
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId, 1);
		this.setState({ listViewData: newData });
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
						<Title>Swipable List</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<List
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={data =>
							<ListItem>
								<Text> {data} </Text>
							</ListItem>}
						renderLeftHiddenRow={data =>
							<Button full onPress={() => alert(data)}>
								<Icon active name="information-circle" />
							</Button>}
						renderRightHiddenRow={(data, secId, rowId, rowMap) =>
							<Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
								<Icon active name="trash" />
							</Button>}
						leftOpenValue={75}
						rightOpenValue={-75}
					/>
					<SwipeRow
						leftOpenValue={75}
						rightOpenValue={-75}
						left={
							<Button success onPress={() => alert('Add')}>
								<Icon active name="add" />
							</Button>
						}
						body={
							<View>
								<Text>SwipeRow Body Text</Text>
							</View>
						}
						right={
							<Button danger onPress={() => alert('Trash')}>
								<Icon active name="trash" />
							</Button>
						}
					/>
				</Content>
			</Container>
		);
	}
}

export default SwipableListTest;
