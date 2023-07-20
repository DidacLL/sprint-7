import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import {modalStyle} from "../styled/ModalStyle";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {Button} from "@mui/material";

interface SaveModalParams {
    open: boolean;
    onClose: () => void;
    onSubmit: (name: string, clientName: string) => void
}

export const SaveModal = (props: SaveModalParams) => {


    const [name, setName] = useState("");
    const [customerName, setCustomerName] = useState("");
    return (<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={props.open}>
            <Box sx={modalStyle}>
                <div>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Save Budget:
                    </Typography>
                    <Typography id="transition-modal-description" sx={{mt: 2}}>
                        Add a name to identify your budget and a customer name (optional)
                    </Typography>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "1em"
                }}>
                    <label>Name:</label> <input
                    value={name}
                    type="text" onChange={(event) => setName(event.currentTarget.value)}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "1em"
                }}>
                    <label>Customer:</label> <input
                    value={customerName}
                    type="text"
                    onChange={(event) => setCustomerName(event.currentTarget.value)
                    }/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Button onClick={() => props.onSubmit(name, customerName)} style={{
                        marginTop: "2em"
                    }}>Confirm</Button>

                    <Button onClick={props.onClose} style={{
                        marginTop: "2em"
                    }}>CLOSE</Button>
                </div>

            </Box>
        </Fade>
    </Modal>);

}