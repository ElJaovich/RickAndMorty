import { React } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const EveryCard = (filter,usuarios,estado) =>{
    return (
        <div>
          <div className="container-cards">
            {filter
              ? usuarios.map((j) => (
                  <Card
                    sx={{
                      display: "flex",
                      width: "50%",
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
                ))

              : estado.map((j) => (
                
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
                      sx={{ width: "100%" }}
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
      );
}
export default EveryCard;