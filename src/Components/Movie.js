import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { scale } from './Exports';

const Movie = ({title, uri, select, id}) => {
    return (
        <TouchableOpacity  onPress={() => select(id)} >
            <View style={{width:scale(160), height:scale(160), backgroundColor:'orange', marginLeft:scale(10), justifyContent:'center', alignItems:'center'}} >
                <Image style={{ position:"absolute", top:0, left:0, right:0, bottom:0 }} source={{ uri }} />
                <Text style={{color:'white', fontSize:scale(16), paddingHorizontal:scale(10)}} >{title}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default Movie;