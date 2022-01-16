import { Form, Button, Row,Container,Alert} from 'react-bootstrap'
import React,{ useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
function Register (){
    
    const initialUserState = {
      alumnoName:"",
      carreraProfesional:"",
      alumnoComentario: "",
    };
    let navigate = useNavigate();
    const [seguimiento, setSeguimiento] = useState(initialUserState);

    const handleInputChange = event => {
      const { name, value } = event.target;
      setSeguimiento({ ...seguimiento, [name]: value });
    };

    const saveSeguimiento = async () => {
      let data = JSON.stringify({
        alumnoName:seguimiento.alumnoName,
        carreraProfesional:seguimiento.carreraProfesional,
        alumnoComentario: seguimiento.alumnoComentario
      });
      await axios.post(`https://localhost:44311/api/Seguimiento`, data,{ headers: {'Content-Type': 'application/json'}})
          .then(response => {
            setSeguimiento({
              alumnoName:response.data.alumnoName,
              carreraProfesional:response.data.carreraProfesional,
              alumnoComentario: response.data.alumnoComentario
            });
          alert("El seguimiento se ha registrado exitosamente")
        })
          .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.response.config);
          })
        };

      return(
      <div>
        <Container className="w-50 mt-5 mb-5">
          <h2 className="mb-4">Crear un seguimiento nuevo</h2>
          <Row className="justify-content-md-center ">
            <Form>
                <div>
              <Form.Group className="mb-3" >
                <Form.Label>Nombre de Alumno</Form.Label>
                <Form.Control type="text" name="alumnoName" placeholder="Ingresar nombre" value={seguimiento.alumnoName}
              onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Carrera</Form.Label>
                <Form.Control type="text" name="carreraProfesional" placeholder="Ingresar Carrera" value={seguimiento.carreraProfesional}
              onChange={handleInputChange}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Comentario</Form.Label>
                <Form.Control name="alumnoComentario" value={seguimiento.alumnoComentario} onChange={handleInputChange} type="text" placeholder="Ingresar Comentario" />
              </Form.Group>

              <Button  className="mt-3" variant="primary" onClick={saveSeguimiento}>
                Registrar
              </Button>
              </div>
            </Form>           
            </Row>
          </Container>
      </div>
      )
  }
  
  export default Register;