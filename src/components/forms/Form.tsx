import React, {useEffect, useState} from "react";
import {CheckInput} from "./CheckInput";
import {ITService} from "./ITService";

interface FormParams {
	 servicesList:ITService[];
}

export const Form = (props:FormParams) => {
	const [prices,setPrices]=useState([0,0,0])
	const [totalAmount,setTotalAmount]=useState(0)
	useEffect(() => {
		setTotalAmount(prices.reduce((a, b) => a + b))
	}, [prices, totalAmount]);


	const updateAmount = (value: number, index:number) => {
		console.log("updating amounts...")
		let newArr = [...prices];
		newArr[index] =value;
		console.log(newArr)
		setPrices(newArr)
	};

	return (
		<form
			  style={{
				  textAlign: "left",
				  padding: "5em"
			  }}>
			<label>
				¿Qué quieres hacer?:
			</label>
			<ul>
				{props.servicesList.map((el:ITService,index:number)=>{
					console.log("created: " +el.name +"at "+index)
					return <CheckInput service={el} updateAmount={updateAmount} index={index}/>
				})}
			</ul>
			<label>Preu: ${totalAmount}€</label>
		</form>
	);
};
