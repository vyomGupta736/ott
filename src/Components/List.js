import React from 'react';
import {View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { scale, verticalScale } from './Exports';
import Movie from './Movie';

const List = ({data, title, onPress}) => {
    return (
         <View>
            <Text style={{fontSize:scale(15), marginVertical:verticalScale(10), marginLeft:scale(10)}} >{title}</Text>
            <FlatList  
                data={data}
                keyExtractor={(movie) => movie.id}   
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(movie) => {
                    return <Movie title={movie.item.title} id={movie.item.id} uri={"https://api.themoviedb.org"+movie.item.poster_path} select={(id) => onPress(id)} />
                }}
            />
         </View>
    )
}

export default List;