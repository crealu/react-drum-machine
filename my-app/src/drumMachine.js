// DrumPads
import React from "react";

const drumPadStyle = {
  position: 'relative',
  width: '65px',
  height: '65px',
  border: '2px solid lightblue',
  fontSize: 20,
  background: 'none',
  textAlign: 'center',
  borderRadius: '6px'
};

const buttonPadStyle = {
  background: 'none',
  border: 'none',
  width: '60px',
  height: '60px'
};

const padLiStyle = {
  position: 'relative',
  display: 'inline-block',
  padding: '6px',
  listStyleType: 'none'
};

const ulStyle = {
  listStyleType: 'none',
  display: 'block'
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li style={padLiStyle}>
        <div style={drumPadStyle} className="drum-pad" onClick={this.props.onPlaySound} onKeyPress={this.props.onKeyPress} id={this.props.letter}>
          <button className="clip-btn" style={buttonPadStyle}>{this.props.letter}</button>
          <audio className="clip" src={this.props.sound1}></audio>
        </div>
      </li>
    );
  }
};

// PowerButton
const powerImgStyle = {
  position: 'relative',
  display: 'inline-block',
  margin: '0 auto',
  width: '40px',
  padding: '4px'
};

const greenLight = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: 'green',
  opacity: '0.5',
  position: 'relative',
  padding: '4px',
  left: '10px',
  top: '5px',
  display: 'inline-block'
};

const redLight = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  padding: '4px',
  background: 'red',
  opacity: '0.5',
  position: 'relative',
  paddingRight: '6px',
  top: '5px',
  left: '20px',
  display: 'inline-block'
};

class PowerButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img onClick={this.props.onTurnOn} src="https://images.vexels.com/media/users/3/131799/isolated/preview/58f48ca730925348c9fb03c19b862bc7-power-button-icon-by-vexels.png" id="power" style={powerImgStyle}/>
        <div style={redLight} id="redLight"></div>
      </div>
    );
  }
}

// DisplayBox
const displayBoxStyle = {
  padding: '6px 18px 6px 18px',
  backgroundColor: '#d5d5d5',
  color: 'white',
  fontSize: 20,
  borderRadius: 6,
  height: '45px',
  width: '80%',
  position: 'realtive',
  display: 'block',
  margin: '0 auto'
};

class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p style={displayBoxStyle} id="display">{this.props.soundNow}</p>
    );
  }
};

// VolumeRange
const volumeRangeStyle = {
  width: '80%',
  position: 'relative',
  display: 'block',
  margin: '0 auto'
}
const volumeInpStyle = {
  width: '80%',
  position: 'relative',
  float: 'left'
};

const volumePStyle = {
  position: 'relative',
  width: '20%',
  float: 'left'
};

class VolumeRange extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={volumeRangeStyle}>
        <input
          id="volRange"
          onChange={this.props.onVolumeChange}
          type="range"
          max="100"
          min="0"
          style={volumeInpStyle}/>
        <p style={volumePStyle}>{this.props.volume}</p>
      </div>
    )
  }
}

// DrumMachine
const drumMachineStyle = {
  position: 'relative',
  top: '100px',
  border: '1px solid yellow',
  display: 'block',
  width: '650px',
  boxShadow: '4px 4px 8px 0px',
  margin: '0 auto',
  padding: '8px'
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pads1: [
        {
          letter: 'Q',
          sound1: 'https://actions.google.com/sounds/v1/tools/ratchet_wrench_slow.ogg',
          name: 'Wrench'
        },
        {
          letter: 'W',
          sound1: 'http://soundbible.com/mp3/service-bell_daniel_simion.mp3',
          name: 'Service Bell'
        },
        {
          letter: 'E',
          sound1: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
          name: 'Short Beep'
        }
      ],
      pads2: [
        {
          letter: 'A',
          sound1: 'https://actions.google.com/sounds/v1/impacts/glass_drop_and_roll.ogg',
          name: 'Glass Drop'
        },
        {
          letter: 'S',
          sound1: 'https://actions.google.com/sounds/v1/impacts/dumpster.ogg',
          name: 'Dumpster'
        },
        {
          letter: 'D',
          sound1: 'https://actions.google.com/sounds/v1/impacts/crash_impact_sweetener.ogg',
          name: 'Crash'
        }
      ],
      pads3: [
        {
          letter: 'Z',
          sound1: 'https://actions.google.com/sounds/v1/water/air_woosh_underwater.ogg',
          name: 'Air Woosh'
        },
        {
          letter: 'X',
          sound1: 'https://actions.google.com/sounds/v1/sports/driver_club_hitting_golf_ball.ogg',
          name: 'Driver Club'
        },
        {
          letter: 'C',
          sound1: 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg',
          name: 'Boing'
        }
      ],
      on: false,
      currentSound: '',
      volume: 50
    };
    this.turnOn = this.turnOn.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.volumeChange = this.volumeChange.bind(this);
  }
  turnOn() {
    let redLight = document.getElementById('redLight');
    let pads = document.getElementsByClassName("drum-pad");

    if (!this.state.on) {
      this.setState({
        on: true,
        currentSound: 'Power On'
      });
      redLight.style.background = 'green';
      let onSound = document.getElementById('E').children[1];
      onSound.play();
      for (let i = 0; i < pads.length; i++) {
        pads[i].addEventListener("keypress", this.handleKeyPress);
      }
      pads[0].focus();
    } else {
        this.setState({
          on: false,
          currentSound: 'Power Off'
        });
      redLight.style.background = 'red';
    }
  }
  /*componentDidMount() {
    let pads = document.getElementsByClassName("drum-pad");
    for (let i = 0; i < pads.length; i++) {
      pads[i].addEventListener("keypress", this.handleKeyPress);
    }
  }*/
  handleKeyPress(event) {
    let upper = event.key.toUpperCase();
    for (let i = 0; i < this.state.pads1.length; i++) {
      if (upper == this.state.pads1[i].letter) {
          this.playSound(this.state.pads1[i]);
      } else if (upper == this.state.pads2[i].letter) {
          this.playSound(this.state.pads2[i]);
      } else if (upper == this.state.pads3[i].letter) {
          this.playSound(this.state.pads3[i]);
      }
    }
  }
  playSound(e) {
    this.setState({
      currentSound: e.name
    });
    let selectedPad = document.getElementById(e.letter);
    selectedPad.children[1].play();
  }
  volumeChange(e) {
    this.setState({
      volume: e.target.value
    });
    let audioElements = document.querySelctorAll(".clip");
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].volume = e.target.value;
    }
  }
  render() {
    const row1 = this.state.pads1.map( e =>
                  <DrumPad
                    letter={e.letter}
                    sound1={e.sound1}
                    onPlaySound={() => this.playSound(e)}
                    />
    );
    const row2 = this.state.pads2.map( e =>
                  <DrumPad
                    letter={e.letter}
                    sound1={e.sound1}
                    onPlaySound={() => this.playSound(e)}
                    />
    );
    const row3 = this.state.pads3.map( e =>
                  <DrumPad
                    letter={e.letter}
                    sound1={e.sound1}
                    onPlaySound={() => this.playSound(e)}
                    />
    );

    return (
      <div id="drum-machine" style={drumMachineStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1>Drum Machine</h1><br/>
            </div>
            <div className="col-6">
              <ul style={ulStyle}>{row1}</ul>
              <ul style={ulStyle}>{row2}</ul>
              <ul style={ulStyle}>{row3}</ul>
            </div>

            <div className="col-6 text-center">
              <PowerButton onTurnOn={this.turnOn}/><br/><br/>

              <DisplayBox soundNow={this.state.currentSound}/><br/><br/>

              <VolumeRange onVolumeChange={this.volumeChange} volume={this.state.volume}/>


            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DrumMachine;
