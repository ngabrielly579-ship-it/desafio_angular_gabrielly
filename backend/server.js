const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'data2.db'));

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const nome = String(req.body.nome || req.body.username || '').trim();
  const senha = String(req.body.senha || req.body.password || '');
  const sql = `SELECT user_id AS id, user_name AS nome, user_email AS email
               FROM user WHERE user_name = ? AND CAST(user_password AS TEXT) = ?`;
  db.get(sql, [nome, senha], (erro, usuario) => {
    if (erro) return res.status(500).json({ erro: 'Falha ao consultar usuário.' });
    if (!usuario) return res.status(401).json({ erro: 'Usuário ou senha inválidos.' });
    res.json(usuario);
  });
});

app.get('/vehicle', (_req, res) => {
  const sql = `SELECT vehicle_id AS id, vehicle_model AS vehicle,
                      vehicle_volumetotal AS volumetotal,
                      vehicle_connected AS connected,
                      vehicle_softwareUpdates AS softwareUpdates
               FROM VEHICLE ORDER BY vehicle_id`;
  db.all(sql, [], (erro, rows) => {
    if (erro) return res.status(500).json({ erro: 'Falha ao consultar veículos.' });
    res.json({ vehicles: rows });
  });
});

app.post('/vehicleData', (req, res) => {
  const vin = String(req.body.vin || '').trim();
  const sql = `SELECT vehicledata_id AS id, vehicledata_vin AS vin,
                      vehicledata_odometer AS odometer,
                      vehicledata_tirePressure AS tirePressure,
                      vehicledata_status AS status,
                      vehicledata_batteryStatus AS batteryStatus,
                      vehicledata_fuelLevel AS fuelLevel,
                      vehicledata_lat AS lat, vehicledata_long AS long
               FROM VEHICLEDATA WHERE vehicledata_vin = ?`;
  db.get(sql, [vin], (erro, row) => {
    if (erro) return res.status(500).json({ erro: 'Falha ao consultar VIN.' });
    if (!row) return res.status(404).json({ erro: 'VIN não encontrado.' });
    res.json({ vehicleData: row });
  });
});

app.get('/vehicleData', (req, res) => {
  req.body = { vin: req.query.vin };
  const vin = String(req.query.vin || '').trim();
  const sql = `SELECT vehicledata_id AS id, vehicledata_vin AS vin,
                      vehicledata_odometer AS odometer,
                      vehicledata_tirePressure AS tirePressure,
                      vehicledata_status AS status,
                      vehicledata_batteryStatus AS batteryStatus,
                      vehicledata_fuelLevel AS fuelLevel,
                      vehicledata_lat AS lat, vehicledata_long AS long
               FROM VEHICLEDATA WHERE vehicledata_vin = ?`;
  db.get(sql, [vin], (erro, row) => {
    if (erro) return res.status(500).json({ erro: 'Falha ao consultar VIN.' });
    if (!row) return res.status(404).json({ erro: 'VIN não encontrado.' });
    res.json({ vehicleData: row });
  });
});

app.listen(3000, () => console.log('API FORD rodando em http://localhost:3000'));
