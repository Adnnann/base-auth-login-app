require('dotenv').config();

const password = process.env.PASSWORD
const database = process.env.DATABASE


const config = {
    port: process.env.PORT || 3001,
    secret: process.env.JWT_SECRET || 'Your secret key',
    mongo: process.env.MONGO || `mongodb+srv://aovcina:${password}@cluster0.hbhrs.mongodb.net/${database}?retryWrites=true&w=majority`
}

export default config;