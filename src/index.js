import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAeZbQTi7hqlXcaVB2GXS_PXyZ0EuVl-48';



// Create a component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({key:API_KEY, term:'Mass Effect'}, (videos) => {
      this.setState({videos});

    });
  }
  render(){
    return(
      <div>
       <SearchBar />
       <VideoList videos={this.state.videos} />
      </div>
     );
  }
}

// Take this component and put it inside the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
