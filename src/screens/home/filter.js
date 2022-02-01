import React from 'react';

import genres from '../../common/genres';
import artists from '../../common/artists';

import { Card, FormControl, Typography, Input, InputLabel, TextField, Button,Select, Checkbox,ListItemText, MenuItem} from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function RightBlock(props) {
    const [genreName, setGenreName] = React.useState([]);
    const [artistName, setArtistName] = React.useState([]);
    
    const[genreList,setGenreList]=React.useState([]);
        
        
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setGenreName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleAChange = (event) => {
        const {
            target: { value },
        } = event;
        setArtistName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleFilter=(event)=>{
        const {target:{value}
    }=event;
    setGenreList(value);
    console.log("list= " + genreList);
    }




    return (
        <div>
            <Card >

                <Typography variant="h6" gutterBottom component="div" style={{}}>
                    FIND MOVIES BY:
                </Typography>

                <FormControl style={{ marginBottom: 10, marginLeft:5 }} fullWidth>
                    <InputLabel htmlFor="name">Movie Name</InputLabel>
                    <Input id="name" />
                </FormControl>

                <FormControl style={{ marginBottom: 10, marginLeft:5 }} variant='standard' fullWidth>
                    <InputLabel id="genre-multiple-checkbox-label">Genre</InputLabel>
                    <Select
                        sx={{ padding: '10px 0 5px' }}
                        labelId="genre-multiple-checkbox-label"
                        id="genre-multiple-checkbox"
                        multiple
                        value={genreName}
                        onChange={handleChange}
                        
                        placeholder="Genre"
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {genres.map((name) => (
                            <MenuItem key={name.id} value={name.name}>
                                <Checkbox color='primary' checked={genreName.indexOf(name.name) > -1} />
                                <ListItemText primary={name.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl style={{ marginBottom: 10, marginLeft:5 }} variant='standard' fullWidth>
                    <InputLabel id="artist-multiple-checkbox-label">Artist</InputLabel>
                    <Select
                        sx={{ padding: '10px 0 5px' }}
                        labelId="artist-multiple-checkbox-label"
                        id="artist-multiple-checkbox"
                        multiple
                        value={artistName}
                        onChange={handleAChange}
                        
                        placeholder="Artist"
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {artists.map((name) => (
                            <MenuItem key={name.id} value={name.first_name}>
                                <Checkbox color='primary' checked={artistName.indexOf(name.first_name) > -1} />
                                <ListItemText primary={name.first_name + " "+ name.last_name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                

                <FormControl style={{ marginBottom: 10, marginLeft:5 }} fullWidth>
                    <TextField label="Release Date Start" InputLabelProps={{ shrink: true }} type='Date'></TextField>
                </FormControl>
    
                <FormControl style={{ marginBottom: 10, marginLeft:5 }}  fullWidth>
                    <TextField label="Release Date End" InputLabelProps={{ shrink: true }} type='date'></TextField>
                </FormControl>

                <Button variant="contained" color="primary" onClick={handleFilter} value={genreList}  fullWidth>
                    APPLY
                </Button>
            </Card>
        </div>
    );
}
