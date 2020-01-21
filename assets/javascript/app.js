$(document).ready(function () {

    var timer, selectedQuestion;

    var questions = [{
            ask: "what is 2+2?",
            choices: [4, 5, 3, 7],
            answer: 4
        },
        {
            ask: "what is 2+4?",
            choices: [4, 5, 6, 7],
            answer: 6
        },
        {
            ask: "what is 1+4?",
            choices: [4, 5, 6, 7],
            answer: 5
        },
        {
            ask: "what is 4+4?",
            choices: [4, 8, 6, 7],
            answer: 8
        }
    ]

    $("#reset").hide();
    $(".answer").hide();
    $("#timer").hide();

    // start the game
    $("#start").on("click", function () {
        $("#start").hide();
        choiceGenerator();
        $("#timer").show();
    });

    function choiceGenerator() {
        selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
        var choicesArray = []
        timer = 30;

        for (let i = 0; i < selectedQuestion.choices.length; i++) {
            var choices = selectedQuestion.choices;
            var choice = '<button class="choice">' + choices[i].toString() + '</button>'
            choicesArray.push(choice)
        }
        $('#questionWrapper').text(selectedQuestion.ask);
        $('#choicesWrapper').empty();
        $('#choicesWrapper').append(choicesArray);
        questions.splice(questions.indexOf(selectedQuestion), 1);
        console.log(questions);
        $("#choicesWrapper").show();
        startTimer();

    }

    function showDelay() {
        var delay = setInterval(function () {
            choiceGenerator();
            clearInterval(delay);
        }, 2000)
    };

    function startTimer() {

        $(".choice").on('click', function (e) {

            console.log(e.target.innerText, 'button')
            clearInterval(mainTimer);
            console.log(e.target.innerText, selectedQuestion.answer);
            $("#choicesWrapper").hide();
            $("#timer").hide();

            if (selectedQuestion.answer == e.target.innerText) {
                $("#questionWrapper").text("You were correct! " + selectedQuestion.answer + " was the answer.")
                showDelay();
            } else {
                $("#questionWrapper").text("You were wrong! The correct answer was " + selectedQuestion.answer);
                showDelay();                
            }
        })

        var mainTimer = setInterval(function () {
            if (timer !== 0) {
                timer--;
                $("#timeRemains").text(timer);
            } else if (timer == 0) {

            }
        }, 1000)

    };

});