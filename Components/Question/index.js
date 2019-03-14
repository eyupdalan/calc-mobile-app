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

    renderChoices() {
        return this
            .props
            .choices
            .map(choice => {
                return (
                    <View style={styles.choice} key={choice}>
                        <TouchableOpacity >
                            <Text style={[s.btn, s.btnOutlineDark, styles.choiceButton]}>{choice}</Text>
                        </TouchableOpacity>
                    </View>
                );
            });
    }

    render() {
        return (
            <View style={[s.card, styles.questionCard]}>
                <View style={[styles.question]}>
                    <Text style={[styles.question]}>{this.props.question}</Text>
                </View>
                <View style={[styles.choices]}>
                    {this.renderChoices()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    questionCard: {
        marginTop: 100,
        marginBottom: 100,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch"
    },
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
