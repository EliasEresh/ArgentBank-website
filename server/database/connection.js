const mongoose = require('mongoose')
const databaseUrl ="mongodb+srv://elias:MPFHH5bSGUrtM8Qt@cluster0.mikjdjz.mongodb.net/argentBankDB?retryWrites=true&w=majority"
 // process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
