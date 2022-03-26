import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getAllUsers } from "../../js/actions/user";
import { getAllFormation } from "../../js/actions/formation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postClasse } from "../../js/actions/classe";
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

export default function ModalAjouteClasse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    dispatch(getAllFormation());
  }, []);

  const formations = useSelector((state) => state.formationReducer.formation);
 
  const users = useSelector((state) => state.userReducer.compte);
 
  let profs = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "proffeseur") {
      profs.push(users[i]);
    }
  }
  let etuds = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "etudiant") {
      etuds.push(users[i]);
    }
  }

  const [formation, setForma] = useState("");
  const [nom, setNom] = useState("");
  const [duree, setDuree] = useState("");
  const [nb_heure, setNb_heure] = useState("");
  const [etudiant, setEtudiant] = useState([]);
  const [professeur, setProfesseur] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ajouter un classe</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            ajouter un classe
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
                defaultValue=''
                onChange={(e) => setNom(e.target.value)}
                InputProps={{
                  readOnly: false,
                }}
              />
              <TextField
                id='outlined-select-currency-native'
                select
                label='formation'
                value={formation}
                onChange={(e) => setForma(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant='outlined'
              >
                <option disabled>-- selectioner un formation --</option>
                {formations.map((formation) => (
                  <option key={formation._id} value={formation._id}>
                    {formation._id}
                  </option>
                ))}
              </TextField>

              <TextField
                id='outlined-select-currency-native'
                select
                label='professeur'
                value={professeur}
                onChange={(e) => setProfesseur(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant='outlined'
              >
                <option disabled>-- selectioner un professeur --</option>
                {profs.map((prof) => (
                  <option key={prof._id} value={prof._id}>
                    {prof._id}
                  </option>
                ))}
              </TextField>
              <TextField
                id='outlined-select-currency-native'
                select
                label='etudiant'
                value={etudiant}
                onChange={(e) => setEtudiant(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant='outlined'
              >
                <option disabled>-- selectioner un etudiant --</option>
                {etuds.map((etud) => (
                  <option key={etud._id} value={etud._id}>
                    {etud._id}
                  </option>
                ))}
              </TextField>
              <TextField
                required
                id='outlined-required'
                label='dureé'
                defaultValue=''
                onChange={(e) => setDuree(e.target.value)}
                InputProps={{
                  readOnly: false,
                }}
              />
              <TextField
                required
                id='outlined-required'
                label='nb_heure'
                defaultValue=''
                onChange={(e) => setNb_heure(e.target.value)}
                InputProps={{
                  readOnly: false,
                }}
              />
            </Box>

            <Button
              variant='contained'
              type='submit'
              onClick={() =>
                dispatch(
                  postClasse({
                    nom,
                    duree,
                    nb_heure,
                    etudiant,
                    professeur,
                    formation,
                  })
                )
              }
            >
              ajouter
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
