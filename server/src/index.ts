import { Request, Response, NextFunction } from "express";
const usersRoute = require('./routes/users.route')
const statusRoute = require('./routes/status.route')
const express = require('express')

// App
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route
app.use(usersRoute)
app.use(statusRoute)

//Initializing server
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000')
})