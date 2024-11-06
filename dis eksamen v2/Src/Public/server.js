// server.js

const express = require('express');
const { createPaymentIntent } = require('./stripePayment'); // Import the createPaymentIntent function from stripePayment.js
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const clientSecret = await createPaymentIntent(amount, 'eur');
        res.send({ clientSecret });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).send({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server kører på port 3000'));
