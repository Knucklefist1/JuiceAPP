// Importer funktioner og opsætninger
const { createPaymentIntent } = require('../Public/stripePayment'); // Korrekt sti til stripePayment.js
const express = require('express');
const router = express.Router();

// Opret en POST-route til at håndtere betalingsanmodninger
router.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body; // Modtag beløb og valuta fra anmodningen

    try {
        // Opret PaymentIntent og få client_secret
        const clientSecret = await createPaymentIntent(amount, currency);
        res.send({ clientSecret }); // Send client_secret til front-enden
    } catch (error) {
        // Håndter fejl og send fejlmeddelelse til front-enden
        res.status(500).send({ error: error.message });
    }
});

// Eksporter routeren, så den kan bruges i server.js
module.exports = router;
