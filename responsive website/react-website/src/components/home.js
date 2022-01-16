import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Container,ListGroup, Row,Col,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
    const [seguimiento, setSeguimiento] = useState([]);
    const fetchData = React.useCallback(async (e) => {
        const request = await axios.get(`https://localhost:44311/api/Seguimiento`);
            setSeguimiento(request.data);
            console.log(request.data)
        }, []);
        useEffect(() => {
            fetchData();
        }, []);

    
    return (
      <Container>
          <h2>Entradas seguimiento</h2>
          {seguimiento.map(seguimiento_ => (
              <Row>
                  <h2>{seguimiento_.alumnoName}</h2>
                  <p>{seguimiento_.carreraProfesional}</p>
                  <p>{seguimiento_.alumnoComentario}</p>
                  <Button ><Link to={`/seguimiento/${seguimiento_.seguimientoId}`}>Modificar</Link></Button>
                  <Button><Link to={`/seguimiento/delete/${seguimiento_.seguimientoId}`}>Eliminar</Link></Button>
              </Row>
          ))}
      </Container>
    );
}

export default Home;