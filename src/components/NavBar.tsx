import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {HomeRounded, Mail} from "@mui/icons-material";
import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

export const NavBar = () => {
	const [currentPage, setCurrentPage] = useState<string>();
	const onIconButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setCurrentPage(event.currentTarget.id)
	};

	return (
		<AppBar position="static" style={{overflow:"hidden"}} >
			<Toolbar>

				<Link to="/" style={{textDecoration: 'none',color:"white"}}>
					<IconButton id="WebIT: IT & web Services" style={{marginRight: "2em"}} color="inherit" onClick={onIconButtonClick}>
						<HomeRounded/>
					</IconButton>
				</Link>
				<Button  id="Calculate your Budget" style={{marginRight: "2em"}} color="inherit" onClick={onIconButtonClick} >
					<Link to="/home" style={{textDecoration: 'none',color:"white"}}>
						Pricing
					</Link>
				</Button>
				<Typography variant="h6" className={"title"} style={{flexGrow: 1, paddingLeft:"2vw"}}>
					{currentPage||"IT&WEB Services"}
				</Typography>
				<IconButton  id="Contact" style={{marginRight: "2em"}} color="inherit" onClick={onIconButtonClick}>
					<Link to="/Contact" style={{textDecoration: 'none',color:"white"}}>
						<Mail/>
					</Link>
				</IconButton>
			</Toolbar>
		</AppBar>
	)


};