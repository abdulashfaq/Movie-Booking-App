import React, { Component } from 'react';
import './Details.css'
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import { Typography, createTheme, ThemeProvider, } from '@material-ui/core';



class Details extends Component {
    state = {
        moviesData:
        {
            id: "M1",
            title: "The Godfather",
            storyline: "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
            genres: [
                "Crime",
                "Drama"
            ],
            release_date: "1972-03-15T00:00:00+05:30",
            duration: 177,
            critics_rating: 9.2,
        }
    }
    render() {
        const theme = createTheme({
            typography: {
                subtitle1: {
                    fontWeight: 'bold',
                }
            }
        })


        return (
            <div>
                <Header />
                <div className='MainContainer'>
                    <div className='backButton'>
                        <typography variant='button'> &lt; Back to Home</typography>
                    </div>

                    <div className='left-container'>
                        <img className='MoviePoster' src='https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg' alt="no Image" />
                    </div>

                    <div className='middle-container'>

                        <ThemeProvider theme={theme}>
                            <Typography variant='h2'>{this.state.moviesData.title}</Typography>
                            <Typography><b>Genre: </b>{this.state.moviesData.genres.join(', ')}</Typography>
                            <Typography><b>Duration: </b>{this.state.moviesData.duration}</Typography>
                            <Typography><b>Release Date: </b>{new Date(this.state.moviesData.release_date).toDateString()}</Typography>
                            <Typography><b>Rating: </b>{this.state.moviesData.critics_rating}</Typography><br />
                        </ThemeProvider>
                    </div>

                    <div className='right-container'>
                    <Typography style={{fontWeight: 'bold'}}> Rate this movie: </Typography>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;

