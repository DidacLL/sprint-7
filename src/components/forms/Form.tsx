import React, {useEffect, useState} from "react";
import {CheckInput} from "./CheckInput";
import {ITService} from "../classes/ITService";

interface FormParams {
	 servicesList:ITService[];
}

export const Form = (props:FormParams) => {
	//-------------------------------------------------------------------------------------------------------STATE HOOKS
	const [prices,setPrices]=useState([0,0,0])
	const [totalAmount,setTotalAmount]=useState(0)
	//------------------------------------------------------------------------------------------------------EFFECT HOOKS
	useEffect(() => {
		setTotalAmount(prices.reduce((a, b) => a + b))
	}, [prices]);
	//----------------------------------------------------------------------------------------------------------HANDLERS
	const updateAmount = (value: number, index:number) => {
		let newArr = [...prices];
		newArr[index] =value;
		setPrices(newArr)
	};
	//----------------------------------------------------------------------------------------------------RETURN DISPLAY
	return <form
			  style={{
				  textAlign: "left",
				  padding: "5em"
			  }}>
			<label>
				¿Qué quieres hacer?:
			</label>
			<ul>
				{props.servicesList.map((el:ITService,index:number)=>{
					return <CheckInput service={el} updateAmount={updateAmount} index={index}/>
				})}
			</ul>
			<label>Preu: ${totalAmount}€</label>
		</form>;
};
