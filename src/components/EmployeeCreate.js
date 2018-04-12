import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Item, Content, Form, Label, Input, Text, Button, Picker } from 'native-base';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return(
            <Content padder>
                <Form>
                    <Item inlineLabel>
                        <Label>Name</Label>
                        <Input 
                            value={this.props.name}   
                            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })} 
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>Phone</Label>
                        <Input 
                            value={this.props.phone}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}     
                        />
                    </Item>
                    <Content padder>
                    <Label>Shift</Label>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                    </Content>
                    <Content padder>
                        <Button full block onPress={this.onButtonPress.bind(this)}>
                            <Text>Create</Text>
                        </Button>
                    </Content>
                </Form>
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);