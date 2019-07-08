import React from 'react'; 
import './AppointmentList.css';
function AppointmentItem (props) {
    return (
        //<div className ='appointment-item'>
        <div>
             <h3>{props.title}</h3>
             <p>{props.time}</p>
        </div>
    )
}

export default AppointmentItem;