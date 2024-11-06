// stripePayment.js

const stripe = require('stripe')('sk_test_51QHuaaB0CErNDJE4eTaQDD10xwxkTQvFQaX535cTBQ4QGz3fGheShvt5SYooJSGeRH6GlHLjkWuE5hwWBRaQztmy00IBhL1ZAZ'); // Use your Stripe Secret Key

async function createPaymentIntent(amount, currency) {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount, // Amount in cents (e.g., 1000 = 10.00 EUR)
        currency: currency,
        automatic_payment_methods: { enabled: true },
    });
    return paymentIntent.client_secret; // Return client_secret to the front-end
}

module.exports = { createPaymentIntent };
