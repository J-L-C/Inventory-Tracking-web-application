const inventoryRoutes = require('./inventory-route');
const express = require('express');
const app = express();
const port = 3000;

app.use('/inventory',inventoryRoutes);
app.listen(port, ()=> console.log(`we in ${port}`));

