const moment = require('moment')

const defaultDatePicker = () => {
    let tomorrow  = moment().add(1,'days'),
        timeStr = '09:00',
        time = moment(timeStr, 'HH:mm')

        tomorrow.set({
            hour:   time.get('hour'),
            minute: time.get('minute')
        })
        return (tomorrow)
}

export default defaultDatePicker