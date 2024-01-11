// На странице редиректа:
const cookies = document.cookie.split(';').map(cookie => cookie.trim());
let pixelId;

for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'PIXEL') {
        pixelId = value;
        break;
    }
}

// Выводим значение в консоль
console.log('Пиксель ID на странице редиректа:', pixelId);