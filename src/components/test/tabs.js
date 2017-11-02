import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Tab, Tabs, TabHeading, ScrollableTab,
} from 'native-base';

import styles from './styles';

class TabTest extends Component {
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
						<Title>Tab</Title>
					</Body>
					<Right />
				</Header>
				<Tabs renderTabBar={()=> <ScrollableTab />}>
					<Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
						<Text>TAB#1</Text>
					</Tab>
					<Tab heading="Tab2">
						<Text>TAB#2</Text>
					</Tab>
					<Tab heading="Tab3">
						<Text>TAB#3</Text>
					</Tab>
					<Tab heading="Tab4">
						<Text>TAB#4</Text>
					</Tab>
					<Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
						<Text>TAB#5</Text>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default TabTest;
