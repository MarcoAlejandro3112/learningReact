import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import { Form, Button, Row,Container,Alert} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router';

function SeguimientoDelete() {
    const { id } = useParams();
    let navigate = useNavigate();
    const deleteSeguimiento = () => {
        axios.delete(`https://localhost:44311/api/Seguimiento/${id}`)
       .then( ()  => {
           alert("El seguimiento ha sido eliminada correctamente")
           navigate('/');
       });
   } 
   deleteSeguimiento();
    return (
        <div>
            
        </div>
    );
  }
  
  export default SeguimientoDelete;