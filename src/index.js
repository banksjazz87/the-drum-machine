import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.html';


function playMedia(soundFile){
  const x = document.getElementById(soundFile);
  x.play();
}


class Title extends React.Component{
  render(){
    return(
      <div>
        <h1 id="title">The Drum Machine</h1>
        <p id="instructions">Push any button to begin, or try pushing the associated keys on your keyboard.</p>
      </div>
    )
  }
}
  class DrumButton extends React.Component{
    constructor(props){
      super(props);
      this.state = {

      }  
    }
    render(){
      return(
        <div tabIndex="0" 
              onKeyDown={this.props.mediaOnKeyDown}>
          <button
            class="buttons"
            onClick={() => {this.props.buttonOnClick(this.props.soundMaker);
            playMedia(this.props.label);}} 
          >
            {this.props.label}

                <audio className="clip" id={this.props.label}>
                    <source src={this.props.media} type={this.props.mediaType}/>
                    Your browser does not support the audio element.
                </audio>
          </button>
        </div>
      );
    }
  }
  
  class TextDisplay extends React.Component{
    render(){
      return(
        <div onKeyDown={this.props.globalOnKeyDown}>
          <h1 class="text-display">{this.props.content}</h1>
        </div>
      )
    }
  }

  class DrumPad extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        drum:""
      }
  
      this.handleOnClick = this.handleOnClick.bind(this);
      this.handlingOnKeyDown = this.handlingOnKeyDown.bind(this);
    }

    handleOnClick(type){
      this.setState({
        drum: type
      });
    }

    handlingOnKeyDown = (event) => {
      // eslint-disable-next-line
      switch(event.keyCode) {
        case 81 :
          playMedia("Q");
          this.setState({
            drum: "Conga" 
          });
          break;
        case 87 :
          playMedia("W");
          this.setState({
            drum: "Crash"
          });
          break;
        case 69:
          playMedia("E");
          this.setState({
           drum: "Fall-Fx"
          });
          break;
        case 65:
          playMedia("A");
          this.setState({
            drum: "Hi-Hat"
          });
          break;
        case 83:
          playMedia("S");
          this.setState({
            drum: "Kick"
          });
          break;
        case 68:
          playMedia("D");
          this.setState({
            drum: "Tom"
          });
          break;
        case 90:
          playMedia("Z");
          this.setState({
            drum: "Snare"
          });
          break;
        case 88:
          playMedia("X");
          this.setState({
            drum: "Syh-Tom"
          });
            break;
        case 67:
          playMedia("C");
          this.setState({
            drum: "Synth-Tom"
          });
            break;
      }
    };

    componentDidMount(){
      document.addEventListener("keyDown", this.handlingOnKeyDown);
    }

    componentWillUnmount(){
      document.removeEventListener("keyDown", this.handlingOnKeyDown)
    }

    render(){
      return(
    <div id="project">
          <Title />
        <div id="drum-machine" >
          <DrumButton 
            class="drum-pad" 
            label="Q" 
            soundMaker="Conga" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/Conga_1.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="W" 
            soundMaker="Crash" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/Crash_2.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="E" 
            soundMaker="Fall-Fx" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/Fall_FX14.WAV" mediaType="audio/WAV"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

      
          <DrumButton 
            class="drum-pad" 
            label="A" 
            soundMaker="Hi-Hat" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/Hihat4_closed.wav" 
            mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="S" 
            soundMaker="Kick" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/Kick.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="D" 
            soundMaker="Tom" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/N-Tom1.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="Z" 
            soundMaker="Snare" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/Snare.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="X" 
            soundMaker="Syh-Tom" 
            buttonOnClick={this.handleOnClick} 
            media="/index.drum-kit-sounds/SyhTom01.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />

          <DrumButton 
            class="drum-pad" 
            label="C" 
            soundMaker="Synth-Tom" 
            buttonOnClick={this.handleOnClick} media="index.drum-kit-sounds/SynthTom01.wav" mediaType="audio/wav"
            mediaOnKeyDown={this.handlingOnKeyDown}
          />
         <div id="sound-descriptor">
          <TextDisplay 
            globalOnKeyDown={this.handlerOnKeyDown}
            id="display" 
            content={this.state.drum} />
          </div>
        </div>
      </div>
      );
    }
  }

  ReactDOM.render(
    <DrumPad />,
    document.getElementById('root')
  ); 