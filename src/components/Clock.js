import {Center, Text, VStack} from '@chakra-ui/react';
import React, { Component} from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount() {   
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { this.setState({date: new Date()}); }
    render() {
        return (
            <div>
                <Center>
                    <VStack spacing={0}>
                        <Text fontSize={'xl'}>{this.state.date.toLocaleTimeString()}</Text>
                        <Text fontSize={'xl'}>{this.state.date.toDateString()}</Text>
                    </VStack>
                </Center>
                 
            </div>
           
        )
    }
}

export default Clock;