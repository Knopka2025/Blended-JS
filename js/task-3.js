"use strict";

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


const num = prompt("Виберіть число від 1 до 4, але майте на увазі, що кожен вибір може змінити світ... або просто розповість мені про вашу улюблену пору року.");

let result;
switch (num) {
    case "1":
        alert(result = "Зима. Ви той,хто рахує сніжинки замість овець перед сном, завжди готовий зліпити сніговика, навіть якщо це просто гора цукру на кухонному столі, і твердо переконаний, що ковдра — найкращий аксесуар для будь-якого сезону. А ще вони секретно вірять, що гарячий чай здатен вирішити всі життєві проблеми!");
        break;
    case "2":
        alert(result = "Весна. Ви той, хто бачить перший паросток зеленої трави й вже планує, де встановлювати свій майбутній сад. Вони завжди готові прогулятися під дощем, адже дощ — це просто безкоштовний спа для душі. А ще їх легко впізнати: у кишенях знайдеться кілька мармеладних черв’ячків на випадок, якщо зустрінеться голодний птах");
        break;
    case "3":
        alert(result = "Літо. Ви той, хто завжди має пляжний рушник у напоготові, навіть якщо живе у місті без жодної водойми. Вони безстрашно борються із комарами, вважаючи це частиною літнього екстриму, і переконані, що арбуз — це не фрукт, а життєва філософія. Літні люди — це ті, хто розпалює багаття та намагається засмажити маршмеллоу, навіть якщо в них лише пакет печива");
        break;
    case "4":
        alert(result = "Осінь. Ви той, хто вміє насолоджуватися шелестом листя більше, ніж музикою, і потайки мріє бути професійним грибником. Вони переконані, що гарбуз — це не просто овоч, а мистецтво, а плед і чашка чаю — справжня зброя проти похмурої погоди. Осінні люди — це ті, хто дивиться на дощ і думає: Ідеально для прогулянки, якщо взяти парасолю!");
        break;
    default:
        alert(result = "Ну що ж, схоже, ви ввели код з паралельного всесвіту! Спробуйте ще раз і подивимося, чи в цей раз ми опинимося на одній планеті!");
}
console.log(result);