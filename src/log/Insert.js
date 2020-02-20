import React, { Component } from 'react';
import { Button, notification, Input} from 'antd';
import { withRouter } from 'react-router-dom';
import DateRangeStart from './DateRangeStart';
import Dynamic from './Dynamic';
import Dynamic1 from './Dynamic1';
import { insert } from '../util/APIUtils';

var destinations = [];
var blocks = [];

class Insert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sourceIp: null,
            timestamp: null,
            type: null,
            size: null,
            method: null,
            referer:null,
            resource: null,
            response: null,
            userAgent: null,
            userId: null,
        };
        this.whenSubmit = this.whenSubmit.bind(this);
        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
        this.handleInputChange4 = this.handleInputChange4.bind(this);
        this.handleInputChange5 = this.handleInputChange5.bind(this);
        this.handleInputChange6 = this.handleInputChange6.bind(this);
        this.handleInputChange7 = this.handleInputChange7.bind(this);
        this.handleInputChange8 = this.handleInputChange8.bind(this);
        this.handleInputChange9 = this.handleInputChange9.bind(this);
        this.handleInputChange10 = this.handleInputChange10.bind(this);
    }

    callbackFunction3 = (childStart) => {
        console.log("callBack3")
        this.setState({timestamp: childStart})
    }

    callbackFunction4 = (dests) => {
        console.log("callBack4")
        console.log("come from child " + dests);
        destinations=dests;
        console.log(destinations);
    }

    callbackFunction5 = (blks) => {
        console.log("callBack5")
        console.log("come from child " + blks);
        blocks = blks;
        console.log(blocks);
    }

    handleInputChange1 = (event) => {
        this.setState({ sourceIp: event.target.value})
    }

    handleInputChange2(event) {
        this.setState({ timestamp: event.target.value })
    }

    handleInputChange3(event) {
        this.setState({ type: event.target.value })
    }

    handleInputChange4(event) {
        this.setState({ size: event.target.value })
    }

    handleInputChange5(event) {
        this.setState({ method: event.target.value })
    }

    handleInputChange6(event) {
        this.setState({referer: event.target.value })
    }

    handleInputChange7(event) {
        this.setState({resource: event.target.value})
    }

    handleInputChange8(event) {
        this.setState({response: event.target.value})
    }

    handleInputChange9(event) {
        this.setState({userAgent: event.target.value})
    }

    handleInputChange10(event) {
        this.setState({userId: event.target.value})
    }

    whenSubmit(){
        var filtered = destinations.filter(function (el) {
            return el != null;
        });
        var filtered1 = blocks.filter(function (el) {
            return el != null;
        });
        console.log('You are in when Submit')
        console.log(this.state)
        console.log(filtered)
        console.log(filtered1)
        const insertRequest = {
            sourceIp: this.state.sourceIp,
            timestamp: this.state.timestamp.format(),
            type: this.state.type,
            size: this.state.size,
            method: this.state.method,
            referer: this.state.referer,
            resource: this.state.resource,
            response: this.state.response,
            userAgent: this.state.userAgent,
            userId: this.state.userId,
            destinationIp: filtered,
            blockId: filtered1
        };
        insert(insertRequest)
            .then(response => {
                notification.success({
                    message: 'Log Database App',
                    description: "Insertion completed successfully",
                });
            }).catch(error => {
                notification.error({
                    message: 'Log Database App',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });
            });
    }


    render() {
            return (
                <div className="insert-container">
                    <br/>
                    <h2>Please insert a log:</h2><br/>
                        <Input style ={{width: "200px"}}placeholder="Source Ip" onChange={this.handleInputChange1}/>
                    <br/><br/>
                        <DateRangeStart parentCallback = {this.callbackFunction3} onChange={this.handleChange2}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Type" onChange={this.handleInputChange3}/>
                    <br/><br/>
                    <input placeholder="Size" type="number" onChange={this.handleInputChange4}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Method" onChange={this.handleInputChange5}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Referer" onChange={this.handleInputChange6}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Resource" onChange={this.handleInputChange7}/>
                    <br/><br/>
                    <input placeholder="Response" type="number" onChange={this.handleInputChange8}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="User Agent" onChange={this.handleInputChange9}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="User Id" onChange={this.handleInputChange10}/>
                    <br/><br/>
                    <p>Destination</p>
                    <Dynamic parentCallback = {this.callbackFunction4} />
                    <p>Block</p>
                    <Dynamic1 parentCallback1 = {this.callbackFunction5} />
                    <br/><br/>
                    <Button type="primary" onClick={this.whenSubmit}>Submit All</Button>

                </div>
            );
    }
}

export default withRouter(Insert);