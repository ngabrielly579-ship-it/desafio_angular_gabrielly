const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ message: 'O campo de usuário ou senha não foi preenchido!' });
  }

  if (nome !== 'admin' || senha !== '123456') {
    return res.status(401).json({ message: 'O nome de usuário ou senha está incorreto ou não foi cadastrado!' });
  }

  return res.status(200).json({ id: 1, nome: 'admin', email: 'admin@email.com' });
});

app.get('/vehicles', (_req, res) => {
  const vehicles = [
    { id: 1, vehicle: 'Ranger', volumetotal: 28542, connected: 23790, softwareUpdates: 14235, img: 'http://localhost:3001/img/ranger.png' },
    { id: 2, vehicle: 'Mustang', volumetotal: 1876, connected: 1420, softwareUpdates: 865, img: 'http://localhost:3001/img/mustang.png' },
    { id: 3, vehicle: 'Territory', volumetotal: 11934, connected: 9870, softwareUpdates: 6340, img: 'http://localhost:3001/img/territory.png' },
    { id: 4, vehicle: 'Bronco Sport', volumetotal: 6428, connected: 5110, softwareUpdates: 2985, img: 'http://localhost:3001/img/broncoSport.png' }
  ];

  return res.status(200).json({ vehicles });
});

app.post('/vehicleData', (req, res) => {
  const dadosPorVin = {
    '2FRHDUYS2Y63NHD22454': { id: 1, odometro: 23344, nivelCombustivel: 76, status: 'on', lat: -12.9714, long: -38.5014 },
    '2RFAASDY54E4HDU34874': { id: 2, odometro: 48210, nivelCombustivel: 39, status: 'off', lat: -12.9821, long: -38.4803 },
    '2FRHDUYS2Y63NHD22455': { id: 3, odometro: 31680, nivelCombustivel: 90, status: 'on', lat: -12.9537, long: -38.4598 },
    '2RFAASDY54E4HDU34875': { id: 4, odometro: 10740, nivelCombustivel: 25, status: 'off', lat: -12.9906, long: -38.5209 },
    '2FRHDUYS2Y63NHD22654': { id: 5, odometro: 23544, nivelCombustivel: 68, status: 'on', lat: -12.9442, long: -38.5127 },
    '2FRHDUYS2Y63NHD22854': { id: 6, odometro: 23574, nivelCombustivel: 54, status: 'on', lat: -12.9755, long: -38.4901 }
  };

  const vin = String(req.body.vin || '').trim().toUpperCase();
  const dados = dadosPorVin[vin];

  if (!dados) return res.status(400).json({ message: 'Código VIN utilizado não foi encontrado!' });
  return res.status(200).json(dados);
});

app.listen(3001, () => console.log('API running on http://localhost:3001/'));
