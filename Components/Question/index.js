import React, {Component} from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

export default class Question extends Component {
    static propTypes = {
        question: PropTypes.string,
        choices: PropTypes.array,
        onClickChoice: PropTypes.func
    }

    static defaultProps = {
        question: "",
        choices: []
    }

    createOnClickFunction = (choice) => {
        return () => {
            this
                .props
                .onClickChoice(choice);
        };
    };

    renderChoices() {
        return this
            .props
            .choices
            .map(choice => {
                return (
                    <View style={[s.row, styles.choice]} key={choice}>
                        <TouchableOpacity onPress={this.createOnClickFunction(choice)}>
                            <Text style={[s.btn, s.btnOutlineDark, styles.choiceButton]}>{choice}</Text>
                        </TouchableOpacity>
                    </View>
                );
            });
    }

    render() {
        return (
            <View style={styles.questionCard}>
                <View style={[s.row, styles.question]}>
                    <Text style={[styles.question]}>{this.props.question}</Text>
                </View>
                <View style={[s.row, styles.choices]}>
                    {this.renderChoices()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    questionCard: {},
    question: {
        fontSize: 100,
        fontWeight: "bold",
        textAlign: "center"
    },
    choice: {
        margin: 5
    },
    choiceButton: {
        fontSize: 50,
        textAlign: "center"
    }
});
