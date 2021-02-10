import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {getMovies, selectMovie} from '../Actions/getMovies';
import { verticalScale,scale } from '../Components/Exports';
import List from '../Components/List';



class MovieScreen extends React.Component{
    async componentDidMount()
    {
        this.props.getMovies("https://api.themoviedb.org/3/movie/top_rated?api_key=f4341c5bdbfa38ae2459a88588a6db10", "toprated");
        this.props.getMovies("https://api.themoviedb.org/3/movie/latest?api_key=f4341c5bdbfa38ae2459a88588a6db10", "latest");
        this.props.getMovies("https://api.themoviedb.org/3/movie/popular?api_key=f4341c5bdbfa38ae2459a88588a6db10", "popular");
        this.props.getMovies("https://api.themoviedb.org/3/movie/upcoming?api_key=f4341c5bdbfa38ae2459a88588a6db10", "upcoming");
    }
    
  render()
  {
     return (
       <View style={{flex:1, backgroundColor:'white'}} >
            <View style={{width:'100%', height: verticalScale(50), backgroundColor:'crimson', justifyContent:'center', alignItems:'center'}} >
                 <Text style={{color:'white', fontWeight:"bold", fontSize:scale(17)}} >MovieTime</Text>
            </View>
            <ScrollView>
                <List title="Top Rated movies" data={this.props.toprated} onPress={(id) => {this.props.selectMovie(id); this.props.navigation.navigate('Details')}} />
                <List title="Latest movies" data={this.props.latest} onPress={(id) => {this.props.selectMovie(id); this.props.navigation.navigate('Details')}} />
                <List title="Popular movies" data={this.props.popular} onPress={(id) => {this.props.selectMovie(id); this.props.navigation.navigate('Details')}} />
                <List title="Upcoming movies" data={this.props.upcoming} onPress={(id) => {this.props.selectMovie(id); this.props.navigation.navigate('Details')}} />
            </ScrollView>
            
       </View>
     )
  }
}


const mapStateToProps = state => {
    console.log("from movie screen");
    return{
        toprated : state.MovieReducer.toprated,
        latest : state.MovieReducer.latest,
        popular : state.MovieReducer.popular,
        upcoming : state.MovieReducer.upcoming
    }
}

export default connect(mapStateToProps, { getMovies, selectMovie })(MovieScreen);