import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {selectMovie} from '../Actions/getMovies';
import { scale, verticalScale, w } from '../Components/Exports';

class Details extends React.Component{
  render()
  {
     return (
       <View style={{flex:1, backgroundColor:'white'}} >
            <ScrollView>
                 <View style={{width:w, height:verticalScale(350), backgroundColor:'crimson', justifyContent:'center', alignItems:'center', alignContent:'center'}} >
                      <Text style={{color:'white', fontSize:scale(18),}} >{this.props.movie.title}</Text>
                 </View>
                 <View style={{height:verticalScale(20)}} />
                <Text style={{marginLeft:scale(15), color:'black', marginBottom:verticalScale(10)}} >Ratings : {this.props.movie.vote_average}</Text>
                <Text style={{marginLeft:scale(15), color:'black', marginBottom:verticalScale(10)}} >Overview : {this.props.movie.overview}</Text>
                <Text style={{marginLeft:scale(15), color:'black', marginBottom:verticalScale(10)}} >Released at : {this.props.movie.release_date}</Text>
            </ScrollView>
       </View>
     )
  }
}

const mapStateToProps = state => {
    console.log("from detail screen");
    console.log(state.selection.movie);
    return{
        movie : state.selection.movie,
    }
}

export default connect( mapStateToProps)(Details);