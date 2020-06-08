import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Import Materialize
import { Button, Icon, Row, Card, Col } from "react-materialize";
// Import Moment
import moment from 'moment';
// Page Header
import Head from './components/header' 
// Page Footer 
import Tail from './components/footer'



class ClockDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: moment(0).utcOffset(0),
            timing: false,
            finalTime: null,
            stop: false
        };
        this.incrementInterval = null;
    }

    update = () => {
        if (this.state.timing) {
            const currentTime = moment(this.state.currentTime);
            currentTime.add(1, 'seconds');
            this.setState({ currentTime });
        }
    }

    componentWillUnmount() {
        this.refresh();
    }


    start = () => {
        if (!this.state.stop) {
            this.setState({
                timing: true
            });
            this.incrementInterval = setInterval(() => this.update(), 1000);
        }
    }

    refresh = () => {
        this.hour = this.min = this.sec = 0;
        const currentTime = moment(0).utcOffset(0);
        currentTime.set({hour: 0, minute: 0, second: 0});
        clearInterval(this.incrementInterval);
        // this.setState({ currentTime });
        this.setState({
            currentTime: currentTime,
            stop: false,
            finalTime: null
        });
    }

    // Pause the timer
    pause = () => {
        this.setState({
            timing: false
        });
        clearInterval(this.incrementInterval);
    }

    stop = () => {
        this.setState({
            timing: false,
            stop: true
        });
        clearInterval(this.incrementInterval);
        const finalTime = moment(this.state.currentTime);
        this.setState({ finalTime });
    }

    render() {
        const actionItems = [
            <a><Button floating waves="light" style={{ marginRight: '5px' }} onClick={this.start}><Icon left>play_arrow</Icon></Button></a>,
            <a><Button floating waves="light" style={{ marginRight: '5px' }} onClick={this.pause}><Icon left>pause</Icon></Button></a>,
            <a><Button floating waves="light" style={{ marginRight: '5px' }} onClick={this.stop}><Icon left>stop</Icon></Button></a>,
            <a><Button floating waves="light" style={{ marginRight: '5px' }} onClick={this.refresh}><Icon left>refresh</Icon></Button></a>
        ];

        return (
            <Row>
                <Col m={3} s={12}>
                    <Card className="blue-grey darken-1" textClassName="white-text" title="React Timer" actions={actionItems}>
                        <div>
                            <ClockDigits currentTime={this.state.currentTime} finalTIme={this.state.finalTime} />
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const ClockDigits = (props) => {
    if (props.finalTIme !== null) {
        return (
            <div>
                <h3>{props.finalTIme.format('HH:mm:ss').toString()}</h3>
            </div>
        );
    } else {
        return (
            <div>
                <h3>{props.currentTime.format('HH:mm:ss').toString()}</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <div class="Site">
        <Head />
        <div class="Site-content">
            <ClockDisplay />
        </div>
        <Tail />    
    </div>
, document.getElementById("root"));