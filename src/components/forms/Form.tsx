import React, { useState } from "react";
import {CheckInput} from "./CheckInput";

export function Form() {
	const [amount, setAmount] = useState(0);

	const handleSubmit = () => {
		//todo
	};

	const updateAmount = (value: number) => {
		setAmount(amount+value);
	};

	return (
		<form onSubmit={handleSubmit}
			  style={{
				  textAlign: "left",
				  padding: "5em"
			  }}>
			<label>
				¿Qué quieres hacer?:
			</label>
			<ul>
				<CheckInput name={"Una pàgina web (500€)"} amount={amount} cost={500} updateAmount={updateAmount}/>
				<CheckInput name={"Una consultoria SEO (300€)"} amount={amount} cost={300} updateAmount={updateAmount}/>
				<CheckInput name={"Una campanya de Google Ads (200€)"} amount={amount} cost={200} updateAmount={updateAmount}/>
			</ul>
			<label>Preu: ${amount}€</label>
		</form>
	);
}
