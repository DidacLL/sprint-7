import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import {modalStyle} from "../styled/ModalStyle";
import Typography from "@mui/material/Typography";
import React from "react";
import {Button} from "@mui/material";

export const ITModal = (props: {
    open: boolean, onClose: () => void, title: string, message: string, onConfirm?: () => void
}) => <Modal
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
                    {props.title}
                </Typography>
                <Typography id="transition-modal-description" sx={{mt: 2}}>
                    {props.message}
                </Typography>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                {
                    props.onConfirm ?
                        <Button onClick={props.onConfirm} style={{
                            marginTop: "2em"
                        }}>Confirm</Button> :
                        ""
                }
                <Button onClick={props.onClose} style={{
                    marginTop: "2em"
                }}>CLOSE</Button>
            </div>

        </Box>
    </Fade>
</Modal>;