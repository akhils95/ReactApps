import React, { useState } from 'react';
import Display from './Components/Display';
import ButtonPanel from './Components/ButtonPanel';
import './style.css';

function Calculater() {

	const [firstValue, setFirstValue] = useState(0);
	const [operatorValue, setOperatorValue] = useState('');
	const [awaitingNextValue, setAwaitingNextValue] = useState(false);
	const [dispVal, setDisplVal] = useState('0');
	const [query, setQuery] = useState('0');

	const Operation = {
		"/": (firstNumber, secondNumber) => firstNumber / secondNumber,
		"*": (firstNumber, secondNumber) => firstNumber * secondNumber,
		"+": (firstNumber, secondNumber) => firstNumber + secondNumber,
		"-": (firstNumber, secondNumber) => firstNumber - secondNumber,
		"=": (firstNumber, secondNumber) => secondNumber,
	}

	function takeInput(number) {
		if (operatorValue === '=') {
			setQuery('0');
		}
		if (awaitingNextValue) {
			setDisplVal(number);
			setAwaitingNextValue(false);
		} else {
			setDisplVal(dispVal === '0' ? number : dispVal + number);
		}
	}

	function doOperator(operator) {
		const currentValue = Number(dispVal);
		if (operatorValue && awaitingNextValue) {
			setOperatorValue(operator);
			setQuery(changeOperatorInQuery(query, operator));
			return;
		}
		if (!firstValue) {
			setFirstValue(currentValue);
			setQuery(query === '0' ? dispVal + operator : query + dispVal + operator);
		} else {
			setQuery(query === '0' ? dispVal + operator : query + dispVal + operator)
			const calculation = Operation[operatorValue](firstValue, currentValue);
			setDisplVal(calculation);
			setFirstValue(calculation);
		}
		
		setAwaitingNextValue(true);
		setOperatorValue(operator);
	}

	function changeOperatorInQuery(s, operator) {
		if (s.substr(s.lenght - 1) === '+' || '-' || '*' || '/'){
			return s.replace(/.$/,operator)
		}
	}

	function addDecimal() {
		if (awaitingNextValue) return;
		if (!dispVal.includes(".")) {
			setDisplVal(`${dispVal}.`);
		}
	}

	function resetAll() {
		setFirstValue(0)
		setOperatorValue('') 
		setAwaitingNextValue(false)
		setDisplVal('0')
		setQuery('0')
	}

	function btnClick(cls, value) {
		if(!cls) {
			takeInput(value);
		} else if (cls.includes('operator')) {
			doOperator(value);
		} else if(cls.includes('decimal')) {
			addDecimal();
		} else if(cls.includes('clear')) {
			resetAll()
		}
	}

	return(
		<div className="calcApp">
			<Display dispVal={dispVal} query={query}/>
			<ButtonPanel btnClick={btnClick} />
		</div>
	)
}

export default Calculater;