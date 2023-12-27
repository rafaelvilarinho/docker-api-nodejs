const express = require('express');
const cors = require('cors');
const winston = require('winston');

const app = express();

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ level: 'silly' }),
  ],
});

app.use(cors());

app.get('/health-check', (_, res) => {
	logger.info("Executing Health-Check endpoint")
	res.json({ result: true, message: 'The API is working' })
});

app.listen(8001, () => logger.info("The NodeJS API was started"));
