import React from 'react';
import numeral from 'numeral';
import moment from 'moment'

function ElapsedTime(props) {
    const timestampArr = props.post.timestamp.split(' ');
    const dayAsInt = numeral(timestampArr[1])._value > 1 ? `0${numeral(timestampArr[1])._value}` : numeral(timestampArr[1])._value
    const monthAsInt = moment().month(timestampArr[0]).format("MM");
    const yearAsInt = timestampArr[2].split('').filter(index => !isNaN(index)).join('')
    const elapsedTime = moment(`${yearAsInt}${monthAsInt}${dayAsInt}`, "YYYYMMDD").fromNow()
    return (
        <p className='post-elapsed-time'>{elapsedTime}</p>
    );
}

export default ElapsedTime