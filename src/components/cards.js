import  {React, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './cards.css'
import { useSelector  } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { createTheme} from '@mui/material/styles';


export var filter = false
const MediaCard = (character) => {

 const estado =  useSelector(state=> state.character.character)
  const [usuarios, setUsuarios]= useState([]);


  const handleChange= e =>{
    
    filtrar(e.target.value)
}

const filtrar = (terminoBusqueda) => {
  var resultSearch = estado.filter((data)=>{
      
      if (data.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        
            filter = true
          
          return data
      }

      return null

  });

return setUsuarios(resultSearch);


}


let theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

  return (
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
        {filter
          ? usuarios.map((j) => (
            <Card
            sx={{
              display: "flex",
              bgcolor: "text.secondary",
              borderRadius: "5%",
              height: "auto"
            }}
            key={j.id}
            className="card"
          >
            <CardMedia
              sx={{  }}
              className="img"
              component="img"
              image={j.image}
              alt={j.name}
            />

            <CardContent sx={{ padding:"0px" , marginTop:"15px", width: "100%", height:"auto" }}>
              <Typography
                gutterBottom
               
                component="div"
                className="textTitle"
                sx={{ textAlign:"center"  }}
              >
                <strong>{j.name}</strong>
              </Typography>
              <Typography sx={{ height: "70%" }}>
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
            ))
          : estado.map((j) => (
              <Card
                sx={{
                  display: "flex",
                  bgcolor: "text.secondary",
                  borderRadius: "5%",
                  height: "auto"
                }}
                key={j.id}
                className="card"
              >
                <CardMedia
                  sx={{  }}
                  className="img"
                  component="img"
                  image={j.image}
                  alt={j.name}
                />

                <CardContent sx={{ padding:"0px" , marginTop:"15px", width: "100%", height:"auto" }}>
                  <Typography
                    gutterBottom
                   
                    component="div"
                    className="textTitle"
                    sx={{ textAlign:"center"  }}
                  >
                    <strong>{j.name}</strong>
                  </Typography>
                  <Typography sx={{ height: "70%" }}>
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
  );
}

export default MediaCard;