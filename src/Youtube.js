import React, {Component} from 'react';

const api = 'YOUR-API-KEY'

const max = 40;

const final = `https://www.googleapis.com/youtube/v3/search?key=${api}&q=trap+nation&part=snippet,id&order=date&maxResults=${max}`

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      breach: []
    };

    this.onChange = this.onChange.bind(this);

    this.clicked = this.clicked.bind(this);
  }

  onChange(event){
    const storevalue = event.target.value;
    }

  clicked(){
  fetch(final)
      .then((response) => response.json())
      .then((responseJson) => {
        const breach = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({breach});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    console.log(this.state.breach);

    return(
      <div>
      <div>
        <input type="text" value= "Not Active" ref="myinput" />
      </div>
      <div>
      <h4 id="tail">Click the button below to fetch Youtube Videos</h4>
      </div>
        <button onClick={this.clicked} onChange={this.onChange}>Get youtube videos</button>
          {
            this.state.breach.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen allowAutoPlay></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Youtube;
