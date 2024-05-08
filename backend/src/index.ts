import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { cities, cityDetails } from './mock';

const app = express();

const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    optionsSuccessStatus: 200 // Return 200 for preflight requests
  }));

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/api/cities', (req: Request, res: Response) => {
  res.json({ count: cities.length, cities });
});

app.get('/api/cities/:cityId', (req: Request, res: Response) => {
  const cityId = req.params.cityId;
  res.json(cityDetails.find(city=>city.cityId===cityId));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
