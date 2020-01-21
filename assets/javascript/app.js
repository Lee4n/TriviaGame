$(document).ready(function () {

    var timer, selectedQuestion, cloneQuestions;

    var score = {
        correct: 0,
        incorrect: 0
    };

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
    ];

    $("#reset").hide();
    $(".answer").hide();
    $("#timer").hide();

    // start the game
    $("#start").on("click", function () {
        cloneQuestions = questions.slice();
        reset();
    });

    $("#reset").on("click", function () {
        questions = cloneQuestions.slice();
        console.log(questions, "bob");
        reset();
    });

    // reset game
    function reset() {
        $("#reset").hide();
        $("#start").hide();
        score.correct = 0;
        score.incorrect = 0;
        choiceGenerator();
        $("#timer").show();
    };



    function choiceGenerator() {
        console.log(questions, "im the new questions");
        if (questions.length !== 0) {
            selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
            var choicesArray = []
            timer = 5;
            $("#timeRemains").text(timer);


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
            winLoseConditions();
        } else {
            $("#questionWrapper").text("There are no more questions left! Here are your results.");
            $("#choicesWrapper").text("Correct: " + score.correct + " Incorrect: " + score.incorrect);
            $("#choicesWrapper").show();
            $("#reset").show();
        }

    }

    function nextQuestionDelay() {
        $("#choicesWrapper").hide();
        var delay = setInterval(function () {
            choiceGenerator();
            clearInterval(delay);
        }, 2000)
    };

    function winLoseConditions() {

        $(".choice").on('click', function (e) {

            console.log(e.target.innerText, 'button')
            clearInterval(mainTimer);
            console.log(e.target.innerText, selectedQuestion.answer);
            $("#choicesWrapper").hide();
            $("#timer").hide();

            if (selectedQuestion.answer == e.target.innerText) {
                $("#questionWrapper").text("You were correct! " + selectedQuestion.answer + " was the answer.")
                score.correct++
                nextQuestionDelay();
            } else {
                $("#questionWrapper").text("You were wrong! The correct answer was " + selectedQuestion.answer);
                score.incorrect++
                nextQuestionDelay();
            }
        })

        var mainTimer = setInterval(function () {
            if (timer !== 0) {
                timer--;
                $("#timeRemains").text(timer);
            } else if (timer == 0) {
                clearInterval(mainTimer);
                $("#questionWrapper").text("You were wrong! The correct answer was " + selectedQuestion.answer);
                score.incorrect++
                nextQuestionDelay();
            }
        }, 1000)

    };

});