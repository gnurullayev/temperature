let elForm = document.querySelector(".form");
let elFormInput = elForm.querySelector(".form-input");
let elFormSelect = elForm.querySelector(".select-form");
let elFormBtn = elForm.querySelector(".form-button");
let elTemperature = document.querySelectorAll(".temperature-answer");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let inputValue = Number(elFormInput.value);
    let selectValue = elFormSelect.value;

    let temperatureTselsy;
    let temperatureKelvin;
    let temperatureFarengeyt;


    if (selectValue === "kelvin") {
        temperatureTselsy = (inputValue - 273.15).toFixed(2);
        temperatureFarengeyt = ((inputValue * 1.8) - 459.67).toFixed(2);
        temperatureKelvin = inputValue;
        elTemperature[0].textContent = temperatureKelvin + " K";
        elTemperature[1].textContent = temperatureTselsy + " ° C";
        elTemperature[2].textContent = temperatureFarengeyt + " °F";
    }
    else if (selectValue === "tselsiy") {
        temperatureKelvin = (inputValue + 273.15).toFixed(2);
        temperatureFarengeyt = ((inputValue * 1.8) + 32).toFixed(2);
        temperatureTselsy = inputValue;
        elTemperature[0].textContent = temperatureKelvin +" K";
        elTemperature[1].textContent = temperatureTselsy + " ° C";
        elTemperature[2].textContent = temperatureFarengeyt + " °F";
    }
    else if (selectValue === "farengeyt") {
        temperatureKelvin = ((inputValue + 459.67) / 1.8).toFixed(2);
        temperatureFarengeyt = inputValue;
        temperatureTselsy = ((inputValue - 32) / 1.8).toFixed(2);
        elTemperature[0].textContent = temperatureKelvin +" K";
        elTemperature[1].textContent = temperatureTselsy + " ° C";
        elTemperature[2].textContent = temperatureFarengeyt + " °F";
    }
    else if (isNaN(inputValue) && selectValue === "") {
        alert("Iltimos faqat raqam kiriting va harorat shkalalaridan birin ham tanlang")
    }
    else if (selectValue === "") {
       alert("Iltimos harorat shkalalaridan birin tanlang")
    }  

    elFormInput.value = "";
    elFormSelect.value = "";
})