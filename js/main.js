const keys = document.querySelectorAll('button');
const output = document.querySelector('.output');
const result = document.querySelector('.result');
const wrapper = document.querySelector('.wrapper-dark');


const theme = document.querySelector('.theme__block');
let current_theme = "dark";
const switchBut = document.querySelector(".switch_theme-dark");


keys.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.innerHTML == "С") {
            output.value = "";
            result.value = "";
        }else if (key.innerHTML == "=") {
            output.value = result.value;
        }else if (key.innerHTML.includes("img")) {
            if(output.value == 'undefined') {
                output.value = 0;
            }else {
                output.value  = output.value.slice(0, -1);
                result.value = math.evaluate(output.value);
            }
            if(result.value == 'undefined') {
                result.value = 0;
            }else {
                
            }
        }else {
            output.value = output.value += key.innerHTML;
            try{
                result.value = math.evaluate(output.value);
            } catch(e) {
                console.log(e);
            }
        }
    });
});

theme.addEventListener('click', () => {
    if(current_theme == "dark") {
        current_theme = "light";
        keys.forEach((key)=> {
            if(key.classList.contains('number__button-dark')) {
                key.classList.remove('number__button-dark');
                key.classList.add('number__button-light');
                switchBut.classList.remove('switch_theme-dark');
                switchBut.classList.add('switch_theme-light');
                switchBut.classList.add("switch_dark_anime");
                switchBut.classList.remove('switch_light_anime');
                wrapper.classList.remove('wrapper-dark');
                wrapper.classList.add('wrapper-light');
                result.style = "color: black;";
                output.style = "color: #000000;";
                document.querySelector("#back_key").src = "images/back_black.png";
                
            } else {
                console.log('test')
            }
        });
        console.log(`Переключил тему на: ${current_theme}`);
    }else {
        current_theme = "dark";
        keys.forEach((key)=> {
            if(key.classList.contains('number__button-light')) {
                key.classList.remove('number__button-light');
                key.classList.add('number__button-dark');
                switchBut.classList.remove('switch_theme-light');
                switchBut.classList.add('switch_theme-dark');
                switchBut.classList.add("switch_light_anime");
                switchBut.classList.remove('switch_dark_anime');
                wrapper.classList.remove('wrapper-light');
                wrapper.classList.add('wrapper-dark');
                result.style = "color: white;";
                output.style = "color: #FFFFFF;";
                document.querySelector("#back_key").src = "images/back_white.png";
            } else {
                console.log('test')
            }
        });
        console.log(`Переключил тему на: ${current_theme}`);
    }
});