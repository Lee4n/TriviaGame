$(document).ready(function() {

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
    });
});