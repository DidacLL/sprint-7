import React, {useState} from "react";

const ItemOption = (name: String, value:number) => {
	return
};

export function Form()  {
	const [amount, setAmount] = useState(0);

	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	const handleSubmit = () => {

	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Enter your name:
				<input
					type="checkbox"
					id="topping"
					name="topping"
					value="Paneer"
					checked={isChecked}
					onChange={handleOnChange}
				/>
			</label>
			<input type="submit" />
		</form>
	)
}