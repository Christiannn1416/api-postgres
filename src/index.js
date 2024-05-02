import express from 'express';
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('../routes/index'));

const PORT = process.env.PORT || 4000; // Usar el puerto proporcionado por Render o 4000 por defecto

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
