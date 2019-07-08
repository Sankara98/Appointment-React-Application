import React , {Component} from 'react'
import Datetime from 'react-datetime'
class AppointmentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            input_appt_title: this.props.input_appt_title,
            input_appt_time: this.props.input_appt_time,
        }
    } 
    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })

    }
    
    handleFocus = (event) => {
        event.target.select();
      }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onUserInput(this.state)
    }

    setApptTime = (event) => {
        let name = 'input_appt_time'
        this.setState({
            [name]: event
        })
    }

    render() {
        const inputProps = {
            name: 'input_appt_time'
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type ="text"
                        name='input_appt_title' 
                        placeholder='Appointment Title' 
                        defaultValue= {this.state.input_appt_title}  
                        onChange ={this.handleChange} onFocus={this.handleFocus} 
                     />
                        <Datetime 
                            input = {true}
                            open = {true}
                            inputProps = {inputProps}
                            defaultValue= {this.props.input_appt_time}
                            onChange= {this.setApptTime}
                        />

                    <button>
                        Make Appointment
                    </button>

                </form>
            </div>
        )
    }
}

export default AppointmentForm