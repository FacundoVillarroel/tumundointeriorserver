require("dotenv").config();
const express = require("express");
const app = express();
const axios = require('axios');

const port = process.env.PORT || 8080;

const API_KEY = process.env.API_KEY;
const CALENDAR_ID = process.env.CALENDAR_ID;

// Middleware to allow CORS request from any origin.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); 
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); 
    return res.status(200).json({});
  }
  next();
});

app.get('/events', async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    );
    const eventsFetched = response.data.items
    let events = {
      "error": 1,
      "code": 200,
      "info": "No upcoming events found."
    }
    if(eventsFetched){
      const now = new Date().toISOString();
      const futureEvents = eventsFetched.filter(event => event.start.dateTime > now);
      if(futureEvents.length){
        events = futureEvents
      }
    }
    res.json(events);
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
});

app.get("/", (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <title>Tu mundo interior.</title>
      </head>
      <body>
        <h1>Aquí se esta desarrollando el Servidor para la pagina tumundointerior.cl</h1>
      </body>
    </html>
  `;
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});