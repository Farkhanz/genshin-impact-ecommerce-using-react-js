import { Sequelize } from 'Sequelize';

const db = new Sequelize('genshin_db','root','', {
    host: "localhost",
    dialect: "mysql"
});

export default db;