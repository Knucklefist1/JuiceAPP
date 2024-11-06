// donation.js

document.addEventListener("DOMContentLoaded", function() {
    const stripe = Stripe('pk_test_51QHuaaB0CErNDJE4ynjiWbGaWXNnvYXNxJ5OMynlLn6VYtcKXQQSmw63VFPQLgn9lwFDtiHlt6X7U9h4fZZ4RAHT00cLmY19DV'); // Indsæt din egen Stripe public key
    const donateButton = document.querySelector('.donate-btn');
    
    donateButton.addEventListener('click', async () => {
        document.getElementById('donation-form').style.display = 'block';

        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 1000 }) // Eks.: 10 EUR
        });
        
        const { clientSecret } = await response.json();

        const elements = stripe.elements();
        const cardElement = elements.create('card');
        cardElement.mount('#card-element');

        document.querySelector('#payment-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: document.querySelector('#name').value,
                    },
                },
            });

            if (error) {
                console.error(error);
                alert("Noget gik galt. Prøv igen.");
            } else {
                alert("Tak for din donation!");
            }
        });
    });
});
