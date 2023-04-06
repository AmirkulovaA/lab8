$(document).ready(function () {
     correct = ["Scarcity", "The monetary value of all finished goods and services made within a country during a specific period", "The total value of goods and services produced in the country and the net factor income from abroad", "microeconomics", 'national income'];
     questions = ["What is the main economic problem faced by the society?", "What is Gross Domestic Product?", "What is Gross National Product?", "The study of determining the prices in individual markets is called…", "Keynesian economics is primarily focused on"]
     choice_options = [["Unemployment", "Inequality", "Poverty", "Scarcity"], 
     ["The total value of goods and services manufactured in the country", "The monetary value of all finished goods and services made within a country during a specific period", "The total value of all the transactions in the country", "The reduction in the total value of goods and services produced in the country"], 
     ["The total value of goods and services produced in the country", "The total value of all the transactions in the country", "The depreciation in the total value of goods and services produced in the country", "The total value of goods and services produced in the country and the net factor income from abroad"], 
     ["negative economics", "microeconomics", "positive economics", "macroeconomics"], 
     ["national income", 'company balance', 'resource allocation', 'All of the above']]

     quizBox = $("#quiz-box");

     $.each(questions, function (q_index, q_value) {
          quizBox.append(`<div class='question${q_index + 1}'>`);
          $(`.question${q_index + 1}`).append(`<p class='d'> Q${q_index + 1}. ${q_value} </p>`);
          $.each(choice_options[q_index], function (c_index, c_value) {
               $(`.question${q_index + 1}`).append(`<label><input type='radio' name='q${q_index + 1}' value='${c_value}'>${c_value}</label>`);
          });
     });

     score = 0;
     $("button").click(function (event) {
          $.each(questions, function (q_index, q_value) {
               const choice = $(`input[name=q${q_index + 1}]:checked`).val();
               if (choice == correct[q_index]) {
                    console.log(choice);
                    score++;
               }
          });

          $("#quiz-box").append("<h2>Result of the quiz is: " + score + "</h2>");
     });

});