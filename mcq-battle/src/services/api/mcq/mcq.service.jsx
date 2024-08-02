import axiosInstance from '../axios-instance';

export const GetGames = async () => {
  return await axiosInstance.get('/games/');
};

export const GetGame = async (gameId) => {
  return await axiosInstance.get(`/games/${gameId}/`);
};

export const StartGame = async (gameId) => {
  return await axiosInstance.put(`/games/${gameId}/`);
};
