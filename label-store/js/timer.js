function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var time = countdownElement.innerHTML.split(':');
    var minutes = parseInt(time[0], 10);
    var seconds = parseInt(time[1], 10);

    var countdownInterval = setInterval(function () {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            clearInterval(countdownInterval);
            // Редирект на другую страницу
            window.location.href = 'http://google.com'; // Замените URL на ваш
        }

        // Обновление текста с обратным отсчетом
        countdownElement.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }, 1000);
}

// Запуск обратного отсчета при загрузке страницы
window.onload = startCountdown;