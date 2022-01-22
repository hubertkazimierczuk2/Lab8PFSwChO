import React, {Component} from 'react'

var fibonacciElem=0;

class Fibonacci extends Component{
	
	constructor(props){
		super(props)
	this.state = {
		input: '0',
		output: '',
	};
	
	this.handleChange = this.handleChange.bind(this);
	}
	
	countFibbonaci(){
		let nr = this.state.input;
		console.log('Nr=', nr);
		if(nr==0){
			this.setState({output: 0});
		} else if(nr==2) {
			this.setState({output: 1});
		} else {
		let fib=[];
		fib[0] = 0;
		fib[1] = 1;
		
		for (let i = 2; i <= nr; i++) {
		  fib[i] = fib[i-1]+fib[i-2]
		}
		this.setState({output: fib[nr]});
		}
	}
	
	async handleChange(event){
		let x =event.target.value;
		if(x<0)
			x=0;
		this.setState({input: x});
	}
	
	render(){
		return(
		<div className="Fibonacci">
		<p> Podaj który element ciągu fibonacciego chcesz zobaczyć </p>
			<input name="input" type="number" value={this.state.input} onChange={this.handleChange}/>
		<p> Podany numer elementu: {this.state.input} </p>
		<button onClick={() => this.countFibbonaci()}>Oblicz</button>
		<p> Wynik: {this.state.output} </p> 
		</div>
		
		);
	}
	
}

export default Fibonacci;
