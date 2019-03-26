# <b>TLazyload</b> - разрабатываемая библиотека для скоростной оптимизации сайтов при работе с изображениями, реализующая принцип "ленивой загрузки".

### Для использованиея необходимо:
1) подключить файл TLazyload.min.js в шапке проекта
2) для изображений задать параметры: 
```html 
<img class="lazy" src="#" data-src="[ваш путь до изображения]" />
```

### Принцип работы:<br/>
Скрипт следит за изображениями на сайте с классом "lazy" и, когда они в зоне видимости (в просматриваемой области окна браузера), меняет src на data-src и дает прогрузиться изображению.
