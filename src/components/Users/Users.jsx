
import './Users.css'
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [page, setPage]= useState (1)

  const [characters, setCharacters] = useState([]);



  
  const fetchRickAndMorty = async () => {
    let response = await fetch (`https://rickandmortyapi.com/api/character/?page=${page}`)
    let json = await response.json();
    console.log(JSON.stringify(json));

    setCharacters(json.results);


  }

  useEffect (() => {
    fetchRickAndMorty();
  }, [page]);

  const nextPage = () => {
    if (page < 15){ 
    setPage(page + 1);
    }
  }

 const prePage = () => {
    if (page > 1){ 
    setPage(page - 1);
    }
  }



  return (
    <div>
      <span >Lista de usuarios </span>
       <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Imagen</th>
              
            </tr>
          </thead>
          <tbody>
             {
                characters.map((characters) => {
                  return (
                    
                   <tr>
                      <td>{characters.name}</td>
                      <td> <img src={characters.image} alt= {`imagen de usuario ${characters.name}`}></img></td>
                      
                   </tr>

                  
                  );
                
                })
              }
            
          </tbody>
        </Table>
      

      <button onClick={prePage} > ANTERIOR </button>
      <span>{page}</span>
      <button onClick={nextPage} > SIGUIENTE </button>

     

    </div>
  )
}

export default Users
