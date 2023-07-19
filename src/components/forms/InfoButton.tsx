import React, {useState} from "react";
import {IconButton} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import {ITModal} from "./ITModal";

interface InfoButtonProps {
	message: string,
	title: string
}

export const InfoButton = ({ message, title }: InfoButtonProps) => {
	const [isActive, setIsActive] = useState(false);


	return (
		<>
			<IconButton onClick={() => setIsActive(true)} aria-label="info" color="primary">
				<InfoOutlined/>
			</IconButton>
			<ITModal
				open={isActive}
				onClose={() => setIsActive(false)}
				title={title}
				message={message}
			/>
		</>
	);
};
//onClick={handleClick}