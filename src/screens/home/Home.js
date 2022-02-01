import React, { Component } from 'react';
import Header from '../../common/header/Header';
import "./Home.css";
import moviesData from '../../common/moviesData';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import RightBlock from './filter';


class Home extends Component {
    state = {
        movie: moviesData,
        poster: moviesData.poster_url,
        title: moviesData.title,
     
    }

    releaseDate = (releaseDate) => {
        let release_date = new Date(releaseDate);
        let date = release_date.toDateString();
        return "Release Date: " + date;
    }

    render() {
        
        const handleChange = () => { };

        return (
            <div className='Main-container'>
                <Header />
                <span ><div id='heading'>Upcoming Movies</div></span>

                <div className='root'>
                    <ImageList className='imageList' cols={6}>
                        {this.state.movie.map((moviesData) => (
                            <ImageListItem key={moviesData.id}>
                                <img src={moviesData.poster_url} alt={moviesData.title} />
                                <ImageListItemBar title={moviesData.title} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <div className="flex-container">
                    <div className="left">

                        <div className='left-root'>
                            <ImageList className='left-imageList' cols={4} rowHeight={350}>

                                {this.state.movie.map((moviesData) => (
                                    <ImageListItem key={moviesData.id}>
                                        <img src={moviesData.poster_url} alt={moviesData.title} />
                                        <ImageListItemBar
                                            title={moviesData.title}
                                            subtitle={this.releaseDate(moviesData.release_date)}
                                        />
                                    </ImageListItem>
                                ))}

                            </ImageList>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className='right-root'>
                            <RightBlock />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;