import './style/style.css'
import React, { Component } from 'react'


class DateTitle extends Component {

    render() {
        const date = new Date();
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return (
            <div className="dateTime">
                <h1>{date.getUTCDate()}</h1>
                <h3>{months[date.getMonth()]}</h3>
                <h3>{date.getFullYear()}</h3>
            </div>
        )
    }
}


export default DateTitle;

