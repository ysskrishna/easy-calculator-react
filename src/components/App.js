import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     
    this.state = {
      dispValue : "",
      oldValue:"",
      operator:""
    };
    this.inputDigit = this.inputDigit.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.inputPercent = this.inputPercent.bind(this);
    this.inputDot = this.inputDot.bind(this);
    this.clearLastDigit = this.clearLastDigit.bind(this);
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.equal = this.equal.bind(this);
  }
  
  inputDigit(digit){
    this.setState({
      dispValue : this.state.dispValue === "0" ? digit : String(this.state.dispValue) + String(digit)
    });
  }
  
  toggleSign(){
    const newValue = parseFloat(this.state.dispValue) * -1;
    this.setState({
      dispValue: String(newValue)
    });
  }
  
  clearDisplay(){
    this.setState({
      dispValue:"0",
      oldValue:"",
      operator:""
    });
  }
  
  inputPercent(){
    const value = parseFloat(this.state.dispValue);
    this.setState({
      dispValue: (value/100).toString(),
      oldValue: (value/100).toString()
    });
  }
  
  inputDot(){
    if(this.state.dispValue.indexOf(".") === -1){
      this.setState({
        dispValue: this.state.dispValue + "."
      }); 
    }
  }
  
  clearLastDigit(){
    const value = this.state.dispValue;
    if(value.length > 0){
      this.setState({
        dispValue: value.slice(0,-1)
      });
    }
  }
  
  add(){
    const oldValue = this.state.dispValue;
    this.setState({
      oldValue : oldValue,
      dispValue:"",
      operator:"+"
    });
  }
  
  substract(){
    const oldValue = this.state.dispValue;
    this.setState({
      oldValue : oldValue,
      dispValue:"",
      operator:"-"
    });
  }
  
  multiply(){
    const oldValue = this.state.dispValue;
    this.setState({
      oldValue : oldValue,
      dispValue:"",
      operator:"*"
    });
  }
  
  divide(){
    const oldValue = this.state.dispValue;
    this.setState({
      oldValue : oldValue,
      dispValue:"",
      operator:"/"
    });
  }
  
  equal(){
    const oper = this.state.operator;
    if(oper.length > 0){
      switch(oper){
        case "+":
          const addValue = (parseFloat(this.state.dispValue)+ parseFloat(this.state.oldValue)).toString();
          this.setState({
            dispValue:addValue,
            oldValue:addValue,
            operator:""
          }); 
          break;
        case "-":
          const subsValue =  (parseFloat(this.state.oldValue) - parseFloat(this.state.dispValue)).toString();
          this.setState({
            dispValue:subsValue,
            oldValue:subsValue,
            operator:""
          }); 
          break;
        case "*":
          const mulValue = (parseFloat(this.state.dispValue)*parseFloat(this.state.oldValue)).toString();
          this.setState({
            dispValue:mulValue,
            oldValue:mulValue,
            operator:""
          }); 
          break;
        case "/":
          const divValue = (parseFloat(this.state.oldValue)/parseFloat(this.state.dispValue)).toString();
          this.setState({
            dispValue:divValue,
            oldValue:divValue,
            operator:""
          }); 
          break;
        default:
          console.log("default code in switch");
          break;
      }
    }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <pre>{JSON.stringify(this.state,null,2)}</pre>
      <form>
          <div className = "row">
            <input type="text" className = "col-sm-2 display_oper text-center" value = {this.state.operator} />
            <input type="text" className = "col-sm-10 display text-right" value = {this.state.dispValue} />
          </div>
          <div className = "row">
            <button type="button" className = "btn btn-outline-danger col-sm-3" onClick={() => this.clearDisplay()}>C</button>
            <button type="button" className = "btn btn-outline-danger col-sm-3" onClick={()=>this.clearLastDigit()}><i className="fas fa-long-arrow-alt-left"></i></button>
            <button type="button" className = "btn btn-outline-warning col-sm-3" onClick={() => this.toggleSign()}><i className="fa fa-plus"></i>/<i className="fa fa-minus"></i></button>
            <button type="button" className = "btn btn-outline-warning col-sm-3" onClick={() => this.inputPercent()}><i className="fas fa-percent"></i></button>
          </div>
          <div className = "row">
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("1")}>1</button>
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("2")}>2</button>
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("3")}>3</button>
            <button type="button" className = "btn btn-outline-warning col-sm-3" onClick={()=>this.add()}><i className="fa fa-plus"></i></button>
          </div>
          <div className = "row">
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("4")}>4</button>
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("5")}>5</button>
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("6")}>6</button>
            <button type="button" className = "btn btn-outline-warning col-sm-3" onClick={()=>this.substract()}><i className="fa fa-minus"></i></button>
          </div>
          <div className = "row">
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("7")}>7</button>
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("8")}>8</button>
            <button type="button" className = "btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("9")}>9</button>
            <button type="button" className = "btn btn-outline-warning col-sm-3" onClick={()=>this.multiply()}><i className="fa fa-asterisk"></i></button>
          </div>
          <div className="row">
            <button type="button" className="btn btn-outline-warning col-sm-3" onClick={()=>this.inputDot()}><i className="fas fa-circle"></i></button>
            <button type="button" className="btn btn-outline-primary col-sm-3" onClick={()=>this.inputDigit("0")}>0</button>
            <button type="button" className="btn btn-outline-warning col-sm-3" onClick={()=>this.equal()}><i className="fas fa-equals"></i></button>
            <button type="button" className="btn btn-outline-warning col-sm-3" onClick={()=>this.divide()}><i className="fas fa-divide"></i></button>
          </div>
	      </form>   
        </div>
    );
  }
}

export default App;
