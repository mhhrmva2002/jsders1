// yeddiyeBolme funksiyasi, ededin 7-e bolunup bolunmedigini hesablayir
function yeddiyeBolme(eded) {
    let qaliq = eded % 7;
    if (qaliq == 0) {
        console.log("bolunur")
    }
    else {
        console.log("bu eded 7e bolunmur lakin bizde 7e bolunen eded var")
        if (qaliq <= (7 / 2)) {
            console.log(eded - qaliq)
        }
        else {
            console.log(eded + (7 - qaliq))
        }
    }
}

// yeddiyeBolmeArrow, arrow funksiyadir (arrow function), ve yeddiyeBolme ile eyni emeliyyati yerine yetirir
let yeddiyeBolmeArrow = (eded) => {
    let qaliq = eded % 7;
    if (qaliq == 0) {
        console.log("bolunur")
    }
    else {
        console.log("bu eded 7e bolunmur lakin bizde 7e bolunen eded var")
        if (qaliq <= (7 / 2)) {
            console.log(eded - qaliq)
        }
        else {
            console.log(eded + (7 - qaliq))
        }
    }
}

// yeddiyeBolmeAnonim funksiyasi, anonim funksiyadir ve yeddiyeBolme ile eyni emeliyyati yerine yetirir
let yeddiyeBolmeAnonim = function (eded) {
    let qaliq = eded % 7;
    if (qaliq == 0) {
        console.log("bolunur")
    }
    else {
        console.log("bu eded 7e bolunmur lakin bizde 7e bolunen eded var")
        if (qaliq <= (7 / 2)) {
            console.log(eded - qaliq)
        }
        else {
            console.log(eded + (7 - qaliq))
        }
    }
}

// yeddiyeBolme funksiyasini sinayiriq
yeddiyeBolme(19.97)

// yeddiyeBolmeArrow funksiyasini sinayiriq
yeddiyeBolmeArrow(6)

// yeddiyeBolmeAnonim funksiyasini sinayiriq
yeddiyeBolmeAnonim(5)






// Bu bir arrow function'dır ve verilmiş eded neceye bolunurse bolunsun, ona qeder olan ededlerin sayini tapir.
let ededeQederBolunenler = (eded, neceyeBolunur) => {
    let counter = 0
    for (let bolunenEded = 0; bolunenEded < eded; bolunenEded++) {
        if (bolunenEded % neceyeBolunur == 0) {
            counter++;
        }
    }
    console.log(counter)
}

// Bu bir function'dır ve verilmiş eded 50-den kicik olarsa 3-e, 50-den boyuk ve ya beraber 100-e kicik olarsa 5-e,
// 100-den boyuk olarsa 8-e bolunen ededlerin sayini tapir.
function bolunenlerinSayi(eded) {
    if (eded <= 50) {
        ededeQederBolunenler(eded, 3)
    }
    else if (eded <= 100) {
        ededeQederBolunenler(eded, 5)
    }
    else {
        ededeQederBolunenler(eded, 8)
    }
}

// Aşağıdakı funksiya yuxarıdakı funksiyadan fərqli olaraq arrow funksiyasıdır.
let bolunenlerinSayiArrow = (eded) => {
    if (eded <= 50) { // Əgər verilmiş ədəd 50-dən kiçikdirsə,
        ededeQederBolunenler(eded, 3) // 3-ə bölünən ədədlərin sayını tapmaq üçün ededeQederBolunenler() funksiyasını çağırır.
    }
    else if (eded <= 100) { // Əgər verilmiş ədəd 50-dən böyükdür və 100-dən kiçikdirsə,
        ededeQederBolunenler(eded, 5) // 5-ə bölünən ədədlərin sayını tapmaq üçün ededeQederBolunenler() funksiyasını çağırır.
    }
    else { // Əgər verilmiş ədəd 100-dən böyükdürsə,
        ededeQederBolunenler(eded, 8) // 8-ə bölünən ədədlərin sayını tapmaq üçün ededeQederBolunenler() funksiyasını çağırır.
    }
}

// Aşağıdakı funksiya isə yuxarıdakı funksiya ilə eyni işi görür, lakin anonym funksiyadır.
let bolunenlerinSayiAnonim = function (eded) {
    if (eded <= 50) {
        ededeQederBolunenler(eded, 3)
    }
    else if (eded <= 100) {
        ededeQederBolunenler(eded, 5)
    }
    else {
        ededeQederBolunenler(eded, 8)
    }
}
// bolunenlerinSayi function'i cagirilir ve 65 verilir.
bolunenlerinSayi(65)