const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.get('/test', (req, res) => {
    res.send('Hello form server');
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));