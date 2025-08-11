document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature');
    const conversionTypeSelect = document.getElementById('conversionType');
    const convertBtn = document.getElementById('convertBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultSection = document.getElementById('resultSection');
    const resultEl = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        if (temperatureInput.value === '') {
            alert('Please enter a temperature value.');
            return;
        }

        const temp = parseFloat(temperatureInput.value);
        const conversionType = conversionTypeSelect.value;
        let convertedTemp, unit;

        switch (conversionType) {
            case 'c-to-f':
                convertedTemp = (temp * 9/5) + 32;
                unit = '°F';
                break;
            case 'f-to-c':
                convertedTemp = (temp - 32) * 5/9;
                unit = '°C';
                break;
            case 'c-to-k':
                convertedTemp = temp + 273.15;
                unit = 'K';
                break;
            case 'k-to-c':
                convertedTemp = temp - 273.15;
                unit = '°C';
                break;
            case 'f-to-k':
                convertedTemp = (temp - 32) * 5/9 + 273.15;
                unit = 'K';
                break;
            case 'k-to-f':
                convertedTemp = (temp - 273.15) * 9/5 + 32;
                unit = '°F';
                break;
        }

        resultEl.textContent = `${convertedTemp.toFixed(2)} ${unit}`;
        resultSection.classList.add('show');
    });

    clearBtn.addEventListener('click', () => {
        temperatureInput.value = '';
        resultSection.classList.remove('show');
        resultEl.textContent = '';
    });
});
