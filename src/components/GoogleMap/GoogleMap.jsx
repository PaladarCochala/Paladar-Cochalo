import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      zoom:1,
      mapCenter: {
          lat:this.props.ubicacion.split(",")[0],
          lng: this.props.ubicacion.split(",")[1],
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      const style = {
        maxWidth: "700px",
        height: "350px",
        overflowX: "hidden",
        overflowY: "hidden",
        /* zIndex: "99", */
       };
       const containerStyle = {
        maxWidth: "700px",
        height: "350px",
       };
      return (
        <Map google={this.props.google} 
            style={style} containerStyle={containerStyle}            
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            zoom={17}
            >
          <Marker 
            position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
          />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
          
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBsTiWpSYQi1W2-M0iIpVIsGoQdwtyE1pw')
  })(MapContainer)