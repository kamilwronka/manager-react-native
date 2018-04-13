import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { employeeFetch } from '../actions';
import { Container, Content } from 'native-base';

class EmployeeList extends Component {
    componentWillMount() {
       this.props.employeeFetch();
    }
    renderRow(item) {
        return (
            <Text>{item.name}</Text>
        );
    }
    render() {
        return (
                <Content>
                    <FlatList
                        data={this.props.employee}
                        renderItem={({ item }) => this.renderRow(item)}
                        keyExtractor = {(item, index) => index.toString()}
                        />
                </Content>
        );
    }
}

const mapStateToProps = (state) => {
    const employee = _.map(state.employee, (val, uid) => {
        return { ...val, uid };
    });
    return { employee };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);