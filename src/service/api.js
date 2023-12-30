import axios from 'axios';

const fetchData = async (query) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { fetchData };
