function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = 'Tolong masukkan nilai yang valid!';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('result').textContent = `BMI Anda adalah ${bmi} (${category})`;
}
