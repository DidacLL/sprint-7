import React from "react";
import {IconButton, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";

interface SearchBudgetProps {
	search: (value: (((prevState: string) => string) | string)) => void
}

export const SearchBudget = (props: SearchBudgetProps) => (
	<form>
		<TextField
			id="search-bar"
			onInput={(e:React.FormEvent<HTMLInputElement>) => {
				props.search(e.currentTarget.value);
			}}
			label="Buscar"
			variant="outlined"
			placeholder="Buscar..."
			size="small"
		/>
		<IconButton type="submit" aria-label="search">
			<Search/>
								</IconButton>
	</form>
);
