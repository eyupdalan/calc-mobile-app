import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

export default class Timer extends Component {
    static propTypes = {
        time: PropTypes.number,
        decreaseTimer: PropTypes.func,
        timerEndHandler: PropTypes.func
    }

    componentDidMount() {
        this.timer = setInterval(this.props.decreaseTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <View>
                <Text style={[s.btn, s.btnDanger, styles.timer]}>
                    {this.props.time}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    timer: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    }
});