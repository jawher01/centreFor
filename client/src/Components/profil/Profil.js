import * as React  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux"
import Modal from "./model"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "../../js/actions/user";
import Acceil from  "../loyout/acceil";
export default function Profil() {

    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    
 console.log(user)
   
  
    useEffect(() => {
      dispatch(current());
    },[current]);
   
 
  return (
      <div>
      <div>
     
      <Acceil/>
        
        </div>
    <div style={{marginLeft:"20%",marginTop:"5%"}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="nom"
          defaultValue={user.nom}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          id="outlined-require"
          label="prenom"
          defaultValue={user.prenom}
          InputProps={{
            readOnly: true,
          }}
        />
        <div>
        <TextField
        required
        id="outlined-helperTex"
        label="email"
        defaultValue={user.email}
        InputProps={{
            readOnly: true,
          }}
      />
      <TextField
      required
      id="outlined-password-input"
      label="password"
      type="password"
      defaultValue={user.password}
      InputProps={{
        readOnly: true,
      }}
    />
    </div>
    <TextField
    required
    id="outlined-read-only-input"
    label="role"
    defaultValue={user.role}
    InputProps={{
        readOnly: true,
      }}
  />
      </div>
      <div>
        <TextField
         
          id="filled-required"
          label="adresse"
          defaultValue={user.adresse}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
         
          id="filled-disabled"
          label="num_tel"
          defaultValue={user.num_tel}
          InputProps={{
            readOnly: true,
          }}
        />
       
        <TextField
          id="filled-read-only-input"
          label="niveaux_scolaire"
          defaultValue={user.niveau_scolaire}
          InputProps={{
            readOnly: true,
          }}
        
        />
        <TextField
          id="filled-number"
          label="salaire"
          defaultValue={user.salaire}
          InputProps={{
            readOnly: true,
          }}
         
        />
        <TextField
          id="filled-search"
          label="formation"
          defaultValue={user.formation}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
     
      
    </Box>
    </div>
    <div style={{marginLeft:"20%"}}>
    <Modal />
    </div>
    </div>
  );
}