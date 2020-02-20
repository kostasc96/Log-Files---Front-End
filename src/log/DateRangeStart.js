//const { DatePicker } = antd;
import { DatePicker } from 'antd';
import React from 'react';

class DateRangeStart extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false
    };

    sendData = () => {
        this.props.parentCallback(this.state.startValue);
    }

    handleLangChange = () => {
        var lang = this.dropdown.value;
        this.props.onSelectLanguage(lang);
    }

    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = value => {
        this.onChange('startValue', value);
    };

    onEndChange = value => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = open => {
        this.setState({ endOpen: open });
    };

    render() {
        const { startValue} = this.state;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={startValue}
                    placeholder="Start"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                    onOk={this.sendData}
                />
            </div>
        );
    }
}

export default DateRangeStart;