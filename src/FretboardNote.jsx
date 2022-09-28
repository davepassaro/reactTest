import React from 'react'
import {Component} from 'react'
//import styles from './fret.module.css'

class FretboardNote extends Component {
    constructor() {
        super()
        this.state = {
            active : false,
            //displayed : this.props.displayNote
            CmajPent : ["C","D","E","G","A"],
            DmajPent: ["D","E","F#/Gb","A","B"],
            EmajPent :  ["E","F#/Gb","G#/Ab","B","C#/Db"],
            FmajPent : ["F","G","A","C","D"],
            GmajPent : ["G","A","B","D","E"],
            AmajPent : ["A","B","C#/Db","E","F#/Gb"]
        }
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
       // this.noteInScale = this.noteInScale.bind(this)

    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.currentScale != prevProps.currentScale || this.props.currentNote != prevProps.currentNote  ) {
          this.setState({active:false})
        }
      }
 
    render(){

        return(
            <div id= {this.props.id} onClick = {this.props.onClick}/*note={this.props.note}*/ class = {this.props.isActive ? "fretboard-box-green" : "fretboard-box"}>
                <p>{this.props.displayNote ? this.props.note : "       "}</p>
            </div>
         
        )
    }
}
export default FretboardNote



