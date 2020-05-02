import React, { Component } from 'react';
import {ScrollView,Text, Image,View, StyleSheet, TouchableOpacity } from 'react-native' 
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'

const styles = StyleSheet.create({
 container: {
   // ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   // alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

class Map extends Component {

	  
    render() {
        return (
            <View style={styles.container}>
                
                <MapView
                	style={styles.map}
                	region={{
                		longitude:69.355313,
                		latitude:40.902190,
                		latitudeDelta:0.0922,
                		longitudeDelta:0.0421
                	}}

                >
                <Marker draggable
				    coordinate={this.props.coords}
				    onDragEnd={(e) => this.props.change(e.nativeEvent.coordinate )}
				  />
  	</MapView>
            </View>
        );
    }
}

export default Map;