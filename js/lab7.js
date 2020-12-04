var word = {
        first: [
            "Интересный",
            "Смешной",
            "Новый",
            "Железный",
            "Легкий",
            "Молодой",
            "Старый",
            "Деревянный",
            "Женский",
            "Летний",
            "Красивый",
            "Хороший",
            "Высокий",
            "Кривой",
            "Большой"
        ],
        second: [
            "шкаф",
            "компьютер",
            "врач",
            "стол",
            "пришелец",
            "кентавр",
            "медведь",
            "лосось",
            "нож",
            "мальчик",
            "пейзаж",
            "картофель",
            "дядя",
            "путь",
            "мел"
        ],
        third: [
            "сидел",
            "читал",
            "работал",
            "приехал",
            "пел",
            "стоял",
            "рисовал",
            "смотрел",
            "дышал",
            "бежал",
            "прыгал",
            "плавал",
            "лежал",
            "отдыхал",
        ]
    }

function init_chat(){

    var input = document.getElementById("chat_input");
    var btn = document.getElementById("chat_btn");

    btn.onclick = () => {
        let msg = input.value.trim();
        if(msg !== ""){
            input.value = "";
            send(msg, "You", true);
            let isExp = false;
            if(msg.charAt(0) === '=') isExp = true;
            send(answer(isExp, msg), "Bot", false);
        }
    }
}

function answer(isExp, text){

    var first = word.first;
    var second = word.second;
    var third = word.third;

    if (isExp){
        return eval(text.substring(1))
    }
    else{
        var answer = first[Math.floor(Math.random()*10)] + " " 
        + second[Math.floor(Math.random()*10)] + " "
        + third[Math.floor(Math.random()*10)]
        return answer
    }
}

function send(text, sender, isYour){
    var template = document.querySelector("#msg_tmpl").content.children[0]
    var msg = template.cloneNode(true)
    var chat = document.getElementById("chat")

    msg.children[0].children[0].textContent = sender
    msg.children[1].children[0].textContent = text
    msg.children[0].children[1].onclick = () => {msg.parentNode.removeChild(msg)}

    if (isYour) msg.classList.add("youth_msg")
    else msg.classList.add("answer_msg")

    chat.appendChild(msg)
}

var first, second, third
init_chat()
send("Давай поболтаем)", "Bot", false)
