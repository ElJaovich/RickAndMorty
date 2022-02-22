import  {React,useState} from 'react';
import {useSelector} from 'react-redux';
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './cardSelected.css'
import {store} from "../app/store"
import { createAction } from '@reduxjs/toolkit'



function CardSelected(props) {
  
	const [isFavorite, setIsFavorite] = useState(false);
  const state = useSelector((state)=>state.character)
  const Fav = createAction('character/AddFavorite')
  const RemoveFav = createAction('character/RemoveFavorite')

  const handlePress = () => {
    if (isFavorite){
      removeFavorite()
      setIsFavorite(false)
    }else{
      setIsFavorite(true)
      addFavorite()
    }
    
  }

  const addFavorite=()=>(

    state.character.map(j=>{if(j.id == id){
    
    store.dispatch(Fav(j))
    alert('Added to Favorites')

  }}))

  const removeFavorite=()=>(
    state.character.map(j=>{if(j.id == id){
      
      store.dispatch(RemoveFav(j))
      //console.log(store.getState())
      alert('Removed form Favorites')
    }}))


    let {id} = useParams()

   

   
    return (
        <div>
           {state.character.map((j) =>{
                    if (j.id == id){
                    
                    return(

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
                          <Typography component={'span'} sx={{ height: "70%" }}>
                            <div className="character-data">
                            <h2>
                                Created: <strong>{j.created}</strong>
                              </h2>
                              <h2>
                                Episodes: <strong>{j.episode.length}</strong>
                              </h2>
                              <h2>
                                Gender: <strong>{j.gender}</strong>
                              </h2>
                              <h2>
                                Specie: <strong>{j.species}</strong>
                              </h2>
                              <h2>
                                Type: <strong>{j.type === '' ? 'None' : j.type}</strong>
                              </h2>
                
                              <h2>
                                Location: <strong>{j.location.name}</strong>
                              </h2>
                              <h2>
                                Url: <span>{j.location.url}</span>
                              </h2>
                
                              <h2>
                                Origin: <strong>{j.origin.name}</strong>
                              </h2>

                            </div>
                          </Typography>
                          <CardActions>
                            {isFavorite? <Button onClick={()=>handlePress()}className='button' variant="Contained" size="large">Remove From Favorites
                            
                            </Button>: <Button onClick={()=>handlePress()}className='button' variant="Contained" size="large">Add To Favorites
                            </Button>}

                            
                        </CardActions>
                        </CardContent>

                    </Card>
                    

                    )}

                return ''
           })}
           
        </div>
    );
}

export default CardSelected;