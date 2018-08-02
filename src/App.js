import React, { Component } from 'react'
import rainbow from './rainbow.svg'
import './App.css'
import redheart from './redheart.svg'
import Image from 'react-image-resizer';

const rgbToHex = require('rgb-to-hex');
const hexToRgb = require('hex-to-rgb');

function randint(range){
  return Math.floor(Math.random() * range)
}
class Rainbow extends Component {
  constructor(props){
    super(props);
    this.state = {
      r: 34,
      g: 34,
      b: 34,
      rgb: 'rgb(34, 34, 34)'
    }
  }
  rainbowClick() {
    var rx = (randint(255));
    var gx = (randint(255));
    var bx = (randint(255));
    var rgbx = ('rgb(' + rx + ', ' + gx + ', ' + bx + ')');
    this.setState({
      r: rx,
      g: gx,
      b: bx,
      rgb: 'rgb(' + this.state.r + ", " + this.state.g + ", " + this.state.b + ')'
    })
    document.body.style.background = rgbx;
    document.getElementById("inputbox2").value = rgbToHex(rgbx);
    document.getElementById("myRange1").value = rx;
    document.getElementById("myRange2").value = gx;
    document.getElementById("myRange3").value = bx;
    document.getElementById("r1").value = rx;
    document.getElementById("r2").value = gx;
    document.getElementById("r3").value = bx;
  }

  hexCheck() {
    if (document.getElementById("inputbox2").value.length === 6){
    var rgba = hexToRgb(document.getElementById("inputbox2").value)
     this.setState({
        r: rgba[0],
        g: rgba[1],
        b: rgba[2],
        rgb: 'rgb(' + this.state.r + ", " + this.state.g + ", " + this.state.b + ')'

      })

      document.body.style.background = "#" + document.getElementById("inputbox2").value;
      // console.log("red:",this.state.rgb[0]);
      document.getElementById("myRange1").value = rgba[0];
      document.getElementById("myRange2").value = rgba[1];
      document.getElementById("myRange3").value = rgba[2];
      document.getElementById("r1").value = rgba[0];
      document.getElementById("r2").value = rgba[1];
      document.getElementById("r3").value = rgba[2];

    }
  }

  rgbSlide() {
    this.setState({
      r: document.getElementById("myRange1").value,
      g: document.getElementById("myRange2").value,
      b: document.getElementById("myRange3").value,
      rgb: 'rgb(' + this.state.r + ", " + this.state.g + ", " + this.state.b + ')'
    })
    document.body.style.background = 'rgb(' + document.getElementById("myRange1").value + ', ' + document.getElementById("myRange2").value + ', ' + document.getElementById("myRange3").value + ')';
    document.getElementById("inputbox2").value = rgbToHex(this.state.rgb);
    document.getElementById("r1").value = document.getElementById("myRange1").value;
    document.getElementById("r2").value = document.getElementById("myRange2").value;
    document.getElementById("r3").value = document.getElementById("myRange3").value;
  }

  overSlide(){
    if (document.getElementById("r1").value > 255) {
      document.getElementById("r1").value = this.state.r;
      return;
    }
    else if (document.getElementById("r2").value > 255) {
      document.getElementById("r2").value = this.state.g;
      return;
    }
    else if (document.getElementById("r3").value > 255) {
      document.getElementById("r3").value = this.state.b;
      return;
    }
    else if (document.getElementById("r1").value < 0) {
      document.getElementById("r1").value = 0;
    }
    else if (document.getElementById("r2").value < 0) {
      document.getElementById("r2").value = 0;
    }
    else if (document.getElementById("r3").value < 0) {
      document.getElementById("r3").value = 0;
    }
  if(document.getElementById("r1").value.length==0){
    document.getElementById("r1").value=0;
  }
  if(document.getElementById("r2").value.length==0){
    document.getElementById("r2").value=0;
  }
  if(document.getElementById("r3").value.length==0){
    document.getElementById("r3").value=0;
  }
  if(document.getElementById("r1").value.charAt(0)=='0' && document.getElementById("r1").value.length > 1){
    document.getElementById("r1").value = parseInt(document.getElementById("r1").value);
  }
  if(document.getElementById("r2").value.charAt(0)=='0' && document.getElementById("r2").value.length > 1){
    document.getElementById("r2").value = parseInt(document.getElementById("r2").value);
  }
  if(document.getElementById("r3").value.charAt(0)=='0' && document.getElementById("r3").value.length > 1){
    document.getElementById("r3").value = parseInt(document.getElementById("r3").value);
  }
    document.body.style.background = 'rgb(' + document.getElementById("r1").value + ', ' + document.getElementById("r2").value + ', ' + document.getElementById("r3").value + ')'
    this.setState({
      rgb:'rgb(' + document.getElementById("r1").value + ', ' + document.getElementById("r2").value + ', ' + document.getElementById("r3").value + ')',
      r: document.getElementById("r1").value,
      g: document.getElementById("r2").value,
      b: document.getElementById("r3").value

    })
    document.getElementById("myRange1").value = document.getElementById("r1").value;
    document.getElementById("myRange2").value = document.getElementById("r2").value;
    document.getElementById("myRange3").value = document.getElementById("r3").value;
    document.getElementById("inputbox2").value = rgbToHex('rgb(' + document.getElementById("r1").value + ', ' + document.getElementById("r2").value + ', ' + document.getElementById("r3").value + ')')

}


  render(){
    return(
      <div>
      <img onClick={() => this.rainbowClick()} src={rainbow} className="App-logo" alt="rainbow" />
      <br/><br/><br/><br/>
      <div><input id="inputbox2" type="text" onChange={() => this.hexCheck()} maxLength="6"/></div>
      <div className="rgbslider">
      <br/><br/><br/>
      <input type="range" onChange={() => this.rgbSlide()} min={0} max={255} defaultValue={34} id="myRange1" />
      <input type="number" onChange={() => this.overSlide()} min={0} max={255} id="r1"/> <br/><br/>
      <input type="range" onChange={() => this.rgbSlide()} min={0} max={255} defaultValue={34} id="myRange2" />
      <input type="number" onChange={() => this.overSlide()} min={0} max={255} id="r2"/> <br/><br/>
      <input type="range" onChange={() => this.rgbSlide()} min={0} max={255} defaultValue={34} id="myRange3" />
      <input type="number" onChange={() => this.overSlide()} min={0} max={255} id="r3"/> <br/><br/>
      </div>
      </div>
    )

  }

}

class App extends Component {

  componentDidMount(){
    document.body.style.background = "#222";
    document.title = "Colorize";
  }

  render() {
    return (
      <body>
      <div className="App">
        <p className="colorize">Colorize</p>
        <div><Rainbow /></div>
        <br/>
        <br/>
        <br/>

      </div>


      <div className="foot" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', fontSize: 15}}><span>made with&nbsp;</span><span><Image src={redheart} alt="redheart" height={23} width={23}/></span><span>&nbsp;in new york</span></div>
      </body>
    );
  }
}

export default App;
