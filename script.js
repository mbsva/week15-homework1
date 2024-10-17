const cities = ["Moscow", "Tokyo", "Mumbai", "Barcelona"];
const temperature = [];
const cityTemperatures = document.createElement('ul');
for (let i = 0; i<cities.length;i++){
    let temp = prompt(`What is the temperature in ${cities[i]}?`);
    temp = Number(temp);  
    temperature.push(temp);

    const listItem = document.createElement('li')
    listItem.textContent = `${cities[i]}: ${temp}°C`;
    cityTemperatures.appendChild(listItem);
}
let maxTemp = -Infinity;
let minTemp = Infinity;

for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > maxTemp) {
        maxTemp = temperature[i];
    }
    if (temperature[i] < minTemp) {
        minTemp = temperature[i];
    }
}

const maxTempItem = document.createElement('li');
maxTempItem.textContent = `Max Temperature: ${maxTemp}°C`;
cityTemperatures.appendChild(maxTempItem);

const minTempItem = document.createElement('li');
minTempItem.textContent = `Min Temperature: ${minTemp}°C`;
cityTemperatures.appendChild(minTempItem);
document.body.appendChild(cityTemperatures);