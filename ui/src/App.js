import React, { useState, useEffect } from 'react';
import { addSuperhero, getSuperheroes } from './api';
import { Container, TextField, Button, Typography, Box, Divider, List, ListItem, ListItemText } from '@mui/material';

function App() {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humility, setHumility] = useState(1);
  const [superheroes, setSuperheroes] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await getSuperheroes();
        setSuperheroes(response.data);
      } catch (error) {
        console.error('Error fetching superheroes:', error);
      }
    };

    fetchSuperheroes();
  }, []);

  const handleAddSuperhero = async () => {

    if (!name || !superpower || humility < 1) {
      setError('All fields are required and humility must be between 1 and 10.');
      return;
    }
    try {
      await addSuperhero({ name, superpower, humility });
      const response = await getSuperheroes();
      setSuperheroes(response.data);
      setName('');
      setSuperpower('');
      setHumility(1);
      setError('');
    } catch (error) {
      console.error('Error adding superhero:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        maxH="70vh"
        paddingTop={4}
      >
        <Box flex={1} paddingRight={2}>
          <Typography variant="h4" gutterBottom>
            Make a new Superhero
          </Typography>
          {error && (
            <Typography variant="body1" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <TextField
            label="Enter superhero name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Enter superhero superpower"
            value={superpower}
            onChange={(e) => setSuperpower(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Enter superhero humility"
            type="number"
            value={humility}
            onChange={(e) => setHumility(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSuperhero}
            fullWidth
          >
            Add Superhero
          </Button>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={1} paddingLeft={2}>
          <Typography variant="h4" gutterBottom>
            List of your remarkable Superheroes
          </Typography>
          <List>
            {superheroes.map((hero, index) => (
              <ListItem key={index}>
                <ListItemText primary={hero.name} secondary={`Superpower: ${hero.superpower}, Humility: ${hero.humility}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
}

export default App;