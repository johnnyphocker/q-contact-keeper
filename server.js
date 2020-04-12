const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;



// ROUTES
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/contacts', require('./routes/contacts.routes'));

app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`))