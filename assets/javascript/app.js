$(document).ready(function() {

    var timer = 30;




    var questions = [
        {
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
    $("#start").on("click", function() {
        $("#start").hide();
        $("#question").append(questions.ask);
        $(".answer").append(questions.answer);
        $(".answer").show();
        choiceGenerator();
    });
    
    function choiceGenerator() {
        var selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
        var choicesArray = []

        for (let i = 0; i < selectedQuestion.choices.length; i++) {
            var choices = selectedQuestion.choices;
            var choice = '<button>' + choices[i].toString() + '</button>'
            choicesArray.push(choice)
        }
        $('#questionWrapper').append(selectedQuestion.ask);
        $('#choicesWrapper').append(choicesArray);
    }

    function startTimer() {
    
    };

    $("#start").on('click', setInterval(startTimer, 1000);

});