import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as questionActions from "../../redux/actions/questionActions";
import Question from "../Question";
import Timer from "../Timer";

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

class Game extends Component {
    componentWillMount() {
        this
            .props
            .actions
            .createQuestion();
    }

    componentWillUnmount() {
        this
            .props
            .actions
            .resetGame();
    }

    timerEndHandler = () => {
        // if (this.props.question.time === 0) {     this         .props .history
        // .push("/");     return; }

        this
            .props
            .actions
            .decreaseTimer();
    };

    render() {
        return (
            <View style={s.grid}>
                <View style={[styles.gameStatButtonContainer]}>
                    <Text style={[s.btn, s.btnPrimary, styles.gameStatButton]}>
                        Point: {this.props.question.point}
                    </Text>

                    <Text style={[s.btn, s.btnPrimary, styles.gameStatButton]}>
                        Step: {this.props.question.step}
                    </Text>
                </View>
                <View style={[s.row, styles.timer]}>
                    <Timer time={this.props.question.time} decreaseTimer={this.timerEndHandler}/>
                </View>
                <View style={s.row}>
                    <Question
                        question={this.props.question.question}
                        choices={this.props.question.choices}
                        onClickChoice={this.props.actions.checkAnswer}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({question: state.questionsReducer});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...questionActions
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

const styles = StyleSheet.create({
    gameStatButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gameStatButton: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        margin: 10,
        flex: 1
    },
    timer: {
        marginTop: 25
    }
});