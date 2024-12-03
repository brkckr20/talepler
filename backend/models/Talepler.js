const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Talepler = sequelize.define('Talepler', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarih: {
        type: DataTypes.DATE,
        allowNull: true
    },
    departman: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    baslik: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    aciklama: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ek: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    durum: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gorusme_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    kullanici: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tamamlanma_tarihi: {
        type: DataTypes.DATE,
        allowNull: true,
    }
})

module.exports = Talepler