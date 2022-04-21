import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { registerUser } from "../../js/actions/user";

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

export default function BasicModal() {
  const dispatch = useDispatch();
  const [receipt,setReceipt]=useState({ preview: '', data: '' })
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("proffeseur");
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//hethy ghalta
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }


  return (
   
    <div>
      <Button onClick={handleOpen}>Ajouter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            ajouter un user
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
            id='outlined-rred'
            label='receipt'
            type="file"
            onChange={(e) => setReceipt('receipt', e.target.files[0])}
           
          />

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
                required
                id='outlined-require'
                label='prenom'
                defaultValue=''
                onChange={(e) => setPrenom(e.target.value)}
              />
              <div>
                <TextField
                  id='filled-required'
                  label='email'
                  defaultValue=''
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  type='password'
                  id='filled-disabled'
                  label='password'
                  defaultValue=''
                  onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                  id='filled-read-only-input'
                  label='role'
                  defaultValue={role}
                  
                  InputProps={{
                    readOnly: false,
                  }}
                />
              </div>
            </Box>
            <Button
              variant='contained'
              type='submit'
              onClose={handleClose}
              onClick={() =>
                dispatch(registerUser({ nom, prenom, email, password, role,receipt }))
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
