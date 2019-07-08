import React, {Component} from 'react'
import AppointmentComponent from './Components/Appointment/AppointmentComponent'
import './App.css'
class App extends Component  {

  constructor() {
    super()
    this.state = {
      appointments : []
    }
  }

  addAppointment = (appointment) => {
    this.setState(prevState => { 
        return(
          {
            appointments: [...prevState.appointments, appointment]
          }
        ) 
        
      })
  }

  render() {
    return (
      <div className = "calendar-wrapper">
          <div className = "calendar-block">
              <h3 className = "calendar-title"> Appointment Tracker</h3>
              <p>Use the form  below to create and appointment</p>
              <AppointmentComponent appointments = {this.state.appointments} addAppointment = {this.addAppointment} />
        </div>
      </div>
    );
  }
}
  
export default App;
