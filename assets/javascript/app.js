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

    // start the game
    $("#start").on("click", function () {
        $("#start").hide();
        $("#question").append(questions.ask);
        $(".answer").append(questions.answer);
        $(".answer").show();
        choiceGenerator();
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
        $('#choicesWrapper').append(choicesArray);
        questions.splice(questions.indexOf(selectedQuestion), 1);
        console.log(questions);

    }

    function reset() {
        $('#choicesWrapper').empty();
        $("#choicesWrapper").show();
        $("#timer").show();
        choiceGenerator();
    };

    function startTimer() {

        setInterval(function () {
            $(".choice").on('click', function (e) {
                console.log(e.target.innerText, selectedQuestion.answer);
                if (selectedQuestion.answer == e.target.innerText) {
                } else {
                    $("#questionWrapper").text("You were wrong! The correct answer was " + selectedQuestion.answer);
                    $("#choicesWrapper").hide();
                    $("#timer").hide();
                    var delay = setInterval(function () {
                        reset();
                        clearInterval(delay);
                    }, 2000)

                }
            })
            if (timer !== 0) {
                timer--;
                $("#timeRemains").text(timer);
            } else if (timer == 0) {
                reset();
            }
        }, 1000)

    };



    $("#start").on('click', startTimer)

});