//const express = require('express');
const apiRoutes = require('../routes/index')
const {app,express}=require('../../server')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);

