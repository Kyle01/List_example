import React, { Component } from 'react';
import './style.css'

class MyMap extends Component {
    
    render(){
        const google = window.google
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });

        return(
            <div>
                {map}
            </div>
        )
    }
}

export default MyMap