const express = require('express');
const sequelize = require('./config/database');
const Talepler = require('./models/Talepler');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

sequelize.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => console.log('Error: ' + err));

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced!');
});

app.post('/talep', async (req, res) => {
    try {
        const { tarih, departman, baslik, aciklama, ek, durum, gorusme_id, kullanici, tamamlanma_tarihi } = req.body;
        const talep = await Talepler.create({ tarih, departman, baslik, aciklama, ek, durum, gorusme_id, kullanici, tamamlanma_tarihi });
        res.status(201).json(talep);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
})

app.listen(3001, () => {
    console.log(`Server running on port ${3001}`);
});