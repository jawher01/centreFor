import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "../../js/actions/user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(idUser) {
  
  const User = idUser.id;
  console.log(User)
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [niveau_scolaire, setNiveau_Scolaire] = useState("");
  const [numtel, setNumTel] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  
  



  const submitHandler = (e) => {
    e.preventDefault()
      dispatch(
        editUser({ _id:User, nom, prenom, adresse, niveau_scolaire, numtel })
      )
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>modifier</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            modifier profil
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <Box
              component='form'
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                required
                id='outlined-required'
                label='nom'
                defaultValue={user.nom}
                onChange={(e) => setNom(e.target.value)}
                InputProps={{
                  readOnly: false,
                }}
              />
              <TextField
                required
                id='outlined-require'
                label='prenom'
                defaultValue={user.prenom}
                onChange={(e) => setPrenom(e.target.value)}
                InputProps={{
                  readOnly: false,
                }}
              />
              <div>
                <TextField
                  id='filled-required'
                  label='adresse'
                  defaultValue={user.adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  InputProps={{
                    readOnly: false,
                  }}
                />
                <TextField
                  id='filled-disabled'
                  label='num_tel'
                  defaultValue={user.NumTel}
                  onChange={(e) => setNumTel(e.target.value)}
                  InputProps={{
                    readOnly: false,
                  }}
                />

                <TextField
                  id='filled-read-only-input'
                  label='niveaux_scolaire'
                  defaultValue={user.niveau_scolaire}
                  onChange={(e) => setNiveau_Scolaire(e.target.value)}
                  InputProps={{
                    readOnly: false,
                  }}
                />
              </div>
            </Box>
            <Button variant='contained' onClick={submitHandler}>
              modifier
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
