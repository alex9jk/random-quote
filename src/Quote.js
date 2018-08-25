import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

class Quote extends Component {

    render() {
        return (
            <Card id="cardStyle">
                <CardBody>
                    <CardTitle style={{ color: this.props.color }}>{this.props.quote}</CardTitle>
                    <div><span style={{ color: this.props.color }}>{this.props.author}</span></div>
                    <div id="qButton">
                        <Button style={{ backgroundColor: this.props.color }}></Button>
                        <Button style={{ backgroundColor: this.props.color }} onClick={this.props.handleClick}>New Quote</Button>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default Quote;