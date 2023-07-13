import React, {useState} from "react";
import {IconButton} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {modalStyle} from "../styled/ModalStyle";

interface InfoButtonProps {
	message: string,
	title: string
}

export const InfoButton = ({ message, title }: InfoButtonProps) => {
	const [isActive, setIsActive] = useState(false);

	// const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
	// 	e.preventDefault();
	// 	setIsActive(true);
	// };

	return (
		<>
			<IconButton onClick={()=>setIsActive(true)} aria-label="info" color="primary" >
					<InfoOutlined/>
			</IconButton>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					open={isActive}
					onClose={()=>setIsActive(false)}
					closeAfterTransition
					slots={{ backdrop: Backdrop }}
					slotProps={{
						backdrop: {
							timeout: 500,
						},
					}}
				>
					<Fade in={isActive}>
						<Box sx={modalStyle}>
							<Typography id="transition-modal-title" variant="h6" component="h2">
								{title}
							</Typography>
							<Typography id="transition-modal-description" sx={{ mt: 2 }}>
								{message}
							</Typography>
						</Box>
					</Fade>
				</Modal>
		</>
	);
};
//onClick={handleClick}