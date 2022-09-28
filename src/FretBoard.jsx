import React,  {useState} from 'react'
import {Component} from 'react'
import FretBoardNote from './FretboardNote'

class FretBoard extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            grade : null,
            startQuiz:false,
            noteSelectionCount:0,
            clickCounter : 0,
            currentNote:"",
            noteColor: "fretboard-box",
            noteColorFound : "fretboard-box-green",
            scaleQuiz : false,
            noteQuiz : false,
            displayNote:false,
            quizOver:false,
            perfectScore: false,
            CmajPent : ["C","D","E","G","A"],
            DmajPent: ["D","E","F#/Gb","A","B"],
            EmajPent :  ["E","F#/Gb","G#/Ab","B","C#/Db"],
            FmajPent : ["F","G","A","C","D"],
            GmajPent : ["G","A","B","D","E"],
            AmajPent : ["A","B","C#/Db","E","F#/Gb"],
            isActive1 : false,
            isActive2 : false,
            isActive3 : false,
            isActive4 : false,
            isActive5 : false,
            isActive6 : false,
            isActive7 : false,
            isActive8 : false,
            isActive9 : false,
            isActive10 : false,
            isActive11 : false,
            isActive12 : false,
            isActive13 : false,
            isActive14 : false,
            isActive15 : false,
            isActive16 : false,
            isActive17 : false,
            isActive18 : false,
            isActive19 : false,
            isActive20 : false,
            isActive21 : false,
            isActive22 : false,
            isActive23 : false,
            isActive24 : false,
            isActive25 : false,
            isActive26 : false,
            isActive27 : false,
            isActive28 : false,
            isActive29 : false,
            isActive30 : false,
            isActive31 : false,
            isActive32 : false,
            isActive33 : false,
            isActive34 : false,
            isActive35 : false,
            isActive36 : false,
            isActive37 : false,
            isActive38 : false,
            isActive39 : false,
            isActive40 : false,
            isActive41 : false,
            isActive42 : false,
            isActive43 : false,
            isActive44 : false,
            isActive45 : false,
            isActive46 : false,
            isActive47 : false,
            isActive48 : false,
            isActive49 : false,
            isActive50 : false,
            isActive51 : false,
            isActive52 : false,
            isActive53 : false,            
            isActive54 : false,
            isActive55 : false,
            isActive56 : false,
            isActive57 : false,
            isActive58 : false,
            isActive59 : false,
            isActive60 : false,
            isActive61 : false,
            isActive62 : false,
            isActive63 : false,
            isActive64 : false,
            isActive65 : false,
            isActive66 : false,
            isActive67 : false,
            isActive68 : false,
            isActive69 : false,
            isActive70 : false,
            isActive71 : false,
            isActive72 : false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.createNoteQuiz = this.createNoteQuiz.bind(this)
        this.createScaleQuiz = this.createScaleQuiz.bind(this)
        //this.noteInScale = this.noteInScale.bind(this)

    }
    createNoteQuiz(){
        var noteSelector = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G",,"G#/Ab","A","A#/Bb","B"]
        var maximum = 11
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        console.log( "debug",noteSelector[randomNumber])
        this.setState({currentNote: noteSelector[randomNumber],scaleQuiz:false,noteQuiz:true},()=>{console.log(this.state.scaleQuiz,this.state.arpQuiz,)})
    }
    createScaleQuiz(){
        var noteSelector = ["C","D","E","F","G","A"]
        var maximum = 5
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        //console.log( noteSelector[randomNumber])

        if (noteSelector[randomNumber] == "C"){  this.setState({currentScale : "CmajPent"})}
        else if (noteSelector[randomNumber] == "D"){  this.setState({currentScale : "DmajPent"})}
        else if (noteSelector[randomNumber] == "E"){   this.setState({currentScale : "EmajPent"})}
        else if (noteSelector[randomNumber] == "F"){   this.setState({currentScale : "FmajPent"})}
        else if (noteSelector[randomNumber] == "G"){    this.setState({currentScale : "GmajPent"})}
        else if (noteSelector[randomNumber] == "A"){   this.setState({currentScale : "AmajPent"})}
        
        this.setState({currentNote: noteSelector[randomNumber],scaleQuiz:true,noteQuiz:false },()=>{console.log(this.state.scaleQuiz,this.state.arpQuiz,)})
    
    }
    handleClick(event){
        //console.log(event.target.dataset.value)//.dataValue)
        if(event.target.dataset.value == this.state.currentNote && !this.state.noteIds.includes(event.target.id) ){
            this.state.noteIds.push(event.target.id)
            this.setState(prevState=>{
                return {
                    noteSelectionCount : (prevState.noteSelectionCount + 1)}
            })
        }
    }
    handleChange(event) {
        
        if (event.target.id == 1 || event.target.id == 5){
            //If user hits "Submit Quiz"
            if(event.target.id == 5){
                const denominator = this.state.noteQuiz ? 6 : 30
                const quiz_score = this.state.noteSelectionCount / denominator
                //* 10
                //Send Post Request to save quiz
            }
            this.revertState()
            this.setState(prevState =>{
                return {
                    startQuiz: !(prevState.startQuiz), 
                    currentNote:"",
                    noteSelectionCount:0,
                    clickCounter:0,
                    quizOver : false,
                    noteQuiz:false,
                    scaleQuiz:false,
                    perfectScore:false  
                }
            })
        }
        //Create Note Quiz
        else if (event.target.id == 2){
            this.revertState()
            this.setState({
                currentNote:"",
                noteSelectionCount:0,
                clickCounter:0,
                quizOver : false,
                noteQuiz:false,
                scaleQuiz:false,
                perfectScore:false                
            },()=>{this.createNoteQuiz()})
        }
        //Create Scale Quiz
        else if (event.target.id == 3){
            this.revertState()
            this.setState({
                currentNote:"",
                currentScale:"",
                noteSelectionCount:0,
                clickCounter:0,
                quizOver : false,
                noteQuiz:false,
                scaleQuiz:false,
                perfectScore:false              
            },()=>{this.createScaleQuiz()})              
        }
        else if (event.target.id == 4){
            this.setState(prevState =>{
                return {
                    displayNote :!prevState.displayNote
                }
            })          
        }
    }
    noteInScale(note,idNumber){
        if (this.state.noteQuiz){
            if (this.state.clickCounter >= 6){return}
        }
        else if (this.state.scaleQuiz){
            if (this.state.clickCounter >= 30){return}
        }
        var idNum = "isActive" + idNumber
        if (this.state[("isActive"+idNumber)] == true){return}

        this.setState(prevState => {return { clickCounter : prevState.clickCounter + 1}})
        
        //Penatonic Quiz
        if(this.state.scaleQuiz == true){
            if (this.state.currentScale == "AmajPent"){
                //AmajPent Correct Answer
                if (this.state.AmajPent.includes(note)){
                    console.log("Amaj")
                    this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})
                }
            }           
            else if (this.state.currentScale == "CmajPent"){
                //CmajPent Correct Answer
                if (this.state.CmajPent.includes(note)){
                    console.log("cmaj")
                    this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})
                }
            }  
            else if (this.state.currentScale == "DmajPent"){
                //DmajPent Correct Answer
                if (this.state.DmajPent.includes(note)){
                    console.log("Dmaj")
                    this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})
                }
            }  
            else if (this.state.currentScale == "FmajPent"){
                //FmajPent Correct Answer
                if (this.state.FmajPent.includes(note)){
                    console.log("Fmaj")
                    this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})
                }
            }          
            else if (this.state.currentScale == "GmajPent"){
                //GmajPent Correct Answer
                if (this.state.GmajPent.includes(note)){
                    console.log("Gmaj")
                    this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})
                }
            }  
            else if (this.state.currentScale == "EmajPent"){
                //EmajPent Correct Answer
                if (this.state.EmajPent.includes(note)){
                    console.log("Emaj")
                    this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})
                }
            } 
        } 
        //Note Quiz
        else {
            if(this.state.currentNote ==note){             
                //console.log("found me")
                this.setState(prevState=>{return {[("isActive"+idNumber)]:true,noteSelectionCount : prevState.noteSelectionCount + 1}})}
            }
        //If note or penatonic quiz counter runs up.
        if (this.state.noteQuiz){
            if (this.state.clickCounter >= 5){
                if(this.state.noteSelectionCount == 5){
                    console.log("score per  ",this.state.noteSelectionCount)
                    this.setState({quizOver:true,perfectScore:true})}
                else{
                    console.log("score   ",this.state.noteSelectionCount)
                    this.setState({quizOver:true})}
            }
        }
        else if (this.state.scaleQuiz){
            if (this.state.clickCounter >= 29){
                if (this.state.noteSelectionCount == 29){this.setState({quizOver:true,perfectScore:true})}
                else{this.setState({quizOver:true})}
            }    
        }
    }
    revertState() {
        // Typical usage (don't forget to compare props):
        
          this.setState({            
            isActive1 : false,
            isActive2 : false,
            isActive3 : false,
            isActive4 : false,
            isActive5 : false,
            isActive6 : false,
            isActive7 : false,
            isActive8 : false,
            isActive9 : false,
            isActive10 : false,
            isActive11 : false,
            isActive12 : false,
            isActive13 : false,
            isActive14 : false,
            isActive15 : false,
            isActive16 : false,
            isActive17 : false,
            isActive18 : false,
            isActive19 : false,
            isActive20 : false,
            isActive21 : false,
            isActive22 : false,
            isActive23 : false,
            isActive24 : false,
            isActive25 : false,
            isActive26 : false,
            isActive27 : false,
            isActive28 : false,
            isActive29 : false,
            isActive30 : false,
            isActive31 : false,
            isActive32 : false,
            isActive33 : false,
            isActive34 : false,
            isActive35 : false,
            isActive36 : false,
            isActive37 : false,
            isActive38 : false,
            isActive39 : false,
            isActive40 : false,
            isActive41 : false,
            isActive42 : false,
            isActive43 : false,
            isActive44 : false,
            isActive45 : false,
            isActive46 : false,
            isActive47 : false,
            isActive48 : false,
            isActive49 : false,
            isActive50 : false,
            isActive51 : false,
            isActive52 : false,
            isActive53 : false,            
            isActive54 : false,
            isActive55 : false,
            isActive56 : false,
            isActive57 : false,
            isActive58 : false,
            isActive59 : false,
            isActive60 : false,
            isActive61 : false,
            isActive62 : false,
            isActive63 : false,
            isActive64 : false,
            isActive65 : false,
            isActive66 : false,
            isActive67 : false,
            isActive68 : false,
            isActive69 : false,
            isActive70 : false,
            isActive71 : false,
            isActive72 : false})
        
      }
    render(){

        return(
            <div>
                

                    <button id="1" class="quiz-button"onClick={this.handleChange}>{this.state.startQuiz ? "Quit" : "Fretboard Quiz"}</button>
                    {this.state.startQuiz &&

                <div>
                    <button id="2" class="quiz-button"onClick={this.handleChange}>Take Single Note Quiz</button>
                    <button id="3"class="quiz-button" onClick={this.handleChange}>Take Penatonic Scale Quiz</button>
                    { (this.state.noteQuiz ==true || this.state.scaleQuiz == true) ?
                        
                    <div>
                        <button class="quiz-button" id="4" onClick={this.handleChange}>Display Notes</button>
                        <button class="quiz-button"id="5" onClick={this.handleChange}>Submit Quiz</button>
                        {this.state.quizOver && <div class="quiz-text"> {this.state.perfectScore ? "Perfect score!!! Please submit the quiz to record your score or quit" : "You are out of guesses please submit the quiz to record your score or quit"}</div>}
                        <div class="fret-text"> Score : {this.state.noteSelectionCount}/{this.state.noteQuiz ? 6 : 30}</div>
                        <div class="fret-text"> Guesses Remaining : {(this.state.noteQuiz ? 6 : 30 ) - this.state.clickCounter }</div>

                        <h3 class="fret-text">Click All {this.state.scaleQuiz ? this.state.currentScale : this.state.currentNote} Notes on the Fretboard</h3>
                        <h3 class="fret-text">Notes Found = {this.state.noteSelectionCount}</h3>                 
                        <div class="fretboard-wrapper">
                            <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",1)} isActive = {this.state.isActive1} idNumber = "1" scales =  {this.state.scaleQuiz} note="F" currentNote={this.state.currentNote == "F" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",2)} isActive = {this.state.isActive2} idNumber = "2" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",3)} isActive = {this.state.isActive3} idNumber = "3" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",4)} isActive = {this.state.isActive4} idNumber = "4" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",5)} isActive = {this.state.isActive5} idNumber = "5" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",6)} isActive = {this.state.isActive6} idNumber = "6" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",7)} isActive = {this.state.isActive7} idNumber = "7" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",8)} isActive = {this.state.isActive8} idNumber = "8" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",9)} isActive = {this.state.isActive9} idNumber = "9" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",10)} isActive = {this.state.isActive10} idNumber = "10" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",11)} isActive = {this.state.isActive11} idNumber = "11" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",12)} isActive = {this.state.isActive12} idNumber = "12" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>



                            <div class="fretboard-box fretboard-open"id="2-0" onClick={this.handleClick} data-value = "A">A</div>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",13)} isActive = {this.state.isActive13} idNumber = "13" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",14)} isActive = {this.state.isActive14} idNumber = "14" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",15)} isActive = {this.state.isActive15} idNumber = "15" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",16)} isActive = {this.state.isActive16} idNumber = "16" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",17)} isActive = {this.state.isActive17} idNumber = "17" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",18)} isActive = {this.state.isActive18} idNumber = "18" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",19)} isActive = {this.state.isActive19} idNumber = "19" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",20)} isActive = {this.state.isActive20} idNumber = "20" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",21)} isActive = {this.state.isActive21} idNumber = "21" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",22)} isActive = {this.state.isActive22} idNumber = "22" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",23)} isActive = {this.state.isActive23} idNumber = "23" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",24)} isActive = {this.state.isActive24} idNumber = "24" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
            


                            <div class="fretboard-box fretboard-open"id="3-0"onClick={this.handleClick} data-value = "D">D</div>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",25)} isActive = {this.state.isActive25} idNumber = "25" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",26)} isActive = {this.state.isActive26} idNumber = "26" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",27)} isActive = {this.state.isActive27} idNumber = "27" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('F#/Gb',28)} isActive = {this.state.isActive28} idNumber = "28" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",29)} isActive = {this.state.isActive29} idNumber = "29" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",30)} isActive = {this.state.isActive30} idNumber = "30" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('A',31)} isActive = {this.state.isActive31} idNumber = "31" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",32)} isActive = {this.state.isActive32} idNumber = "32" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",33)} isActive = {this.state.isActive33} idNumber = "33" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",34)} isActive = {this.state.isActive34} idNumber = "34" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",35)} isActive = {this.state.isActive35} idNumber = "35" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",36)} isActive = {this.state.isActive36} idNumber = "36" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
        




                            <div class="fretboard-box fretboard-open"id="4-0"onClick={this.handleClick} data-value = "G">G</div>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",37)} isActive = {this.state.isActive37} idNumber = "37" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",38)} isActive = {this.state.isActive38} idNumber = "38" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",39)} isActive = {this.state.isActive39} idNumber = "39" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",40)} isActive = {this.state.isActive40} idNumber = "40" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",41)} isActive = {this.state.isActive41} idNumber = "41" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",42)} isActive = {this.state.isActive42} idNumber = "42" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",43)} isActive = {this.state.isActive43} idNumber = "43" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",44)} isActive = {this.state.isActive44} idNumber = "44" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",45)} isActive = {this.state.isActive45} idNumber = "45" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",46)} isActive = {this.state.isActive46} idNumber = "46" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",47)} isActive = {this.state.isActive47} idNumber = "47" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",48)} isActive = {this.state.isActive48} idNumber = "48" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                    


                            <div class="fretboard-box fretboard-open"id="5-0"onClick={this.handleClick} data-value = "B">B</div>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",49)} isActive = {this.state.isActive49} idNumber = "49" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",50)} isActive = {this.state.isActive50} idNumber = "50" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",51)} isActive = {this.state.isActive51} idNumber = "51" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",52)} isActive = {this.state.isActive52} idNumber = "52" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",53)} isActive = {this.state.isActive53} idNumber = "53" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",54)} isActive = {this.state.isActive54} idNumber = "54" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",55)} isActive = {this.state.isActive55} idNumber = "55" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('G',56)} isActive = {this.state.isActive56} idNumber = "56" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",57)} isActive = {this.state.isActive57} idNumber = "57" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",58)} isActive = {this.state.isActive58} idNumber = "58" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",59)} isActive = {this.state.isActive59} idNumber = "59" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('B',60)} isActive = {this.state.isActive60} idNumber = "60" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
            


                            <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",61)} isActive = {this.state.isActive61} idNumber = "61" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",62)} isActive = {this.state.isActive62} idNumber = "62" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",63)} isActive = {this.state.isActive63} idNumber = "63" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('G#/Ab',64)} isActive = {this.state.isActive64} idNumber = "64" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",65)} isActive = {this.state.isActive65} idNumber = "65" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",66)} isActive = {this.state.isActive66} idNumber = "66" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",67)} isActive = {this.state.isActive67} idNumber = "67" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",68)} isActive = {this.state.isActive68} idNumber = "68" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",69)} isActive = {this.state.isActive69} idNumber = "69" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",70)} isActive = {this.state.isActive70} idNumber = "70" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",71)} isActive = {this.state.isActive71} idNumber = "71" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                            <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",72)} isActive = {this.state.isActive72} idNumber = "72" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>


        
                        </div>
                    </div>
                 : ""}
                </div>
            } 
            </div>
            )
        }
    }
export default FretBoard