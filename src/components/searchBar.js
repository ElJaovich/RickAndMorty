
import { useState, React } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


import Card from '@mui/material/Card';
/* import CardActions from '@mui/material/CardActions'; */
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
/* import Button from '@mui/material/Button'; */
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import './cards.css'


const SearchAppBar = ({character})=>{
    const state = useSelector(state=> state.character.character)
    console.log(state)


 
    const [usuarios, setUsuarios]= useState([]);
    const [busqueda , setBusqueda]= useState("");
   
    

    const handleChange= e =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
        


    }

    const filtrar = (terminoBusqueda) => {
       
       

        var resultSearch = character.character.filter((data)=>{
            
            if (terminoBusqueda === '' ){
               
                
                return console.log('data')

                

            }else if (data.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {

                return data
            }

        });

      return setUsuarios(resultSearch);

    }

    //console.log({usuarios})



    return(
    <div>
        <Box>

            <div>

            <TextField
                fullWidth
                id="fullWidth"
                label="Search field"
                type="search"
                variant="filled"
                
                onChange={handleChange}
                
                />
            </div>
        </Box>


        <div className="container-cards">
        {usuarios.map((j) => (
        <Card
            sx={{
            display: "flex",
            width: "100%",
            bgcolor: "text.secondary",
            borderRadius: "5%",
            }}
            key={j.id}
            className="card"
        >
            <CardMedia
            sx={{ width: "50%" }}
            className="img"
            component="img"
            height="450"
            image={j.image}
            alt={j.name}
            />

            <CardContent sx={{ width: "50%" }}>
            <Typography
                gutterBottom
                variant="h3"
                component="div"
                className="text"
                sx={{ height: "20%" }}
            >
                <strong>{j.name}</strong>
            </Typography>
            <Typography variant="h6" sx={{ height: "70%" }}>
                <div className="character-data">
                <h2>
                    Status: <strong>{j.status}</strong>
                </h2>

                <h2>
                    Location: <strong>{j.location.name}</strong>
                </h2>

                <h2>
                    origin: <strong>{j.origin.name}</strong>
                </h2>
                </div>
            </Typography>
            </CardContent>
        </Card>
        ))}
        </div>
    </div>


        

    )
}

export default SearchAppBar;
