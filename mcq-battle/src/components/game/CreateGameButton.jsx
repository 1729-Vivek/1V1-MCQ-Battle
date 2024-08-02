// src/components/game/CreateGameButton.jsx
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateGameButton = () => {
  const navigate = useNavigate();

  const createGame = async () => {
    try {
      const response = await axios.post('/create-game/', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
        }
      });
      toast.success('Game created successfully!');
      console.log('Game created:', response.data);
      navigate(`/game/${response.data.game_id}`); // Navigate to the game page
    } catch (error) {
      toast.error('Failed to create game');
      console.error('Error creating game:', error);
    }
  };

  return (
    <button onClick={createGame}>Create Game</button>
  );
};

export default CreateGameButton;
