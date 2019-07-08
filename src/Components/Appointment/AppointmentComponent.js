import React,  {Component} from 'react';
import AppointmentItem from './AppointmentItem'
import AppointmentForm from './AppointmentForm'
import defaultDatePicker from '../Utils/AppointmentUtils'
import shortid from 'shortid';
import './AppointmentList.css';
class AppointmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          input_appt_title : 'Team StandUp meeting',
          input_appt_time: defaultDatePicker()
        }
    }

    
    handleUserInput = (input_appointment) => {
        this.props.addAppointment(input_appointment)
    }
  
    render () {
        return (
            <div>
                <div >
                    <AppointmentForm 
                    input_appt_title={this.state.input_appt_title} 
                    input_appt_time={this.state.input_appt_time} 
                    onUserInput = {this.handleUserInput}
                    />
                </div>
                <div >
                        {
                            this.props.appointments.map(appointment => 
                                {
                                    return ( 
                                    <AppointmentItem
                                    title={appointment.input_appt_title} 
                                    time={appointment.input_appt_time.format("ddd, MMM Do YY, h:mm a")} 
                                    key= {shortid.generate()}
                                    />)
                                }
                            )
                        }
                </div>
            </div>
        ) 
    }

}

export default AppointmentComponent;