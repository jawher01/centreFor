import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../js/actions/user";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Acceil from "../loyout/acceil";
import { Table} from "react-bootstrap";
import Modal from "./Modal_User";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ModalSup from "./ModalSupUser"


const UserList = () => {
 
  const dispatch = useDispatch();
   
  const users = useSelector((state) => state.userReducer.compte);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  let etuds = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "etudiant") {
      etuds.push(users[i]);
    }
  }
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [getAllUsers]);
  return (
    <div>
      <div>
        <div>
          <Acceil />
        </div>
        <div style={{ marginBottom: "2%", marginTop: "2%", marginLeft: "15%" }}>
          <div style={{ marginBottom: "2%", marginTop: "2%" }}>
            <Modal />
          </div>
          {loadUser ? (
            <Spinner animation='border' variant='info'>
              <span className='sr-only'></span>
            </Spinner>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>nom </th>
                  <th>prenom</th>
                  <th>email</th>
                  <th>role</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {etuds.map((etud) => (
                  <tr>
                    <td>{etud.nom}</td>
                    <td>{etud.prenom}</td>
                    <td>{etud.email}</td>
                    <td>{etud.role}</td>
                    <td >
                      <Button variant='contained' color='secondary'>
                      <ModalSup etud={etud}/>
                      </Button>
                      
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
