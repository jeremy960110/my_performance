function checkAnswer1() {
    const selectedAnswer = document.querySelector('input[name="value"]:checked');
    const result = document.getElementById("quizResult1");
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        if (answer === "耐心與堅持") {
            result.innerHTML = "正確！我最重視的價值觀是耐心與堅持。";
            result.style.color = "green";
        } else {
            result.innerHTML = "錯誤，再試一次！";
            result.style.color = "red";
        }
    } else {
        alert("請選擇一個答案！");
    }
}

function checkAnswer2() {
    const selectedAnswer = document.querySelector('input[name="goal"]:checked');
    const result = document.getElementById("quizResult2");
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        if (answer === "進入頂尖大學") {
            result.innerHTML = "正確！我希望在未來五年內進入頂尖大學。";
            result.style.color = "green";
        } else {
            result.innerHTML = "錯誤，再試一次！";
            result.style.color = "red";
        }
    } else {
        alert("請選擇一個答案！");
    }
}

function checkAnswer3() {
    const selectedAnswer = document.querySelector('input[name="achievement"]:checked');
    const result = document.getElementById("quizResult3");
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        if (answer === "參加APCS考試並取得高分") {
            result.innerHTML = "正確！我在高中生涯中最引以為豪的成就是參加APCS考試並取得高分。";
            result.style.color = "green";
        } else {
            result.innerHTML = "錯誤，再試一次！";
            result.style.color = "red";
        }
    } else {
        alert("請選擇一個答案！");
    }
}

function checkAnswer4() {
    const selectedAnswer = document.querySelector('input[name="language"]:checked');
    const result = document.getElementById("quizResult4");
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        if (answer === "Python") {
            result.innerHTML = "正確！我選擇的第一個程式語言是 Python。";
            result.style.color = "green";
        } else {
            result.innerHTML = "錯誤，再試一次！";
            result.style.color = "red";
        }
    } else {
        alert("請選擇一個答案！");
    }
}