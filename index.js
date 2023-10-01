document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    // console.log("Currency->"+currency);
    // console.log("Amount->"+amount);

    fetch(`https://api.exchangerate-api.com/v4/latest/INR`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[currency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById('result').innerText = `${amount} INR is approximately ${convertedAmount} ${currency}`;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('result').innerText = 'An error occurred. Please try again later.';
        });
});