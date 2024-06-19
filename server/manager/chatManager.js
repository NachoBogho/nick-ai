import axios from 'axios';

export const handleChat = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('http://localhost:5055/webhook', {
      sender: 'user',
      message: message,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en la comunicación con el servidor de Rasa.');
  }
};
