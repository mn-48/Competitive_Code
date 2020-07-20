function  CalculateGrade() {
        marks = document.getElementById("txtMarks").value;

        if (marks>=0 && marks<40)
        {
            alert("Your mark is " + marks + " and you are failed");
        }

        else if (marks>=40 && marks<50)
        {
            alert("Your mark is  " + marks + " and your grade is D");
        }

        else if (marks>=50 && marks<60)
        {
            alert("Your mark is  " + marks + " and your grade is C");
        }
       else if (marks>=60 && marks<70) {
            alert("Your mark is " + marks + " and your grade is B");

        }
       else if (marks>=70 && marks<80) {
            alert("Your mark is " + marks + " and your grade is A");

        }
       else if (marks>=80 && marks<100) {
            alert("Your mark is " + marks + " and your grade is A+");

        }
       else
        {
            alert("Sorry!!!!! You have enter greater than 100 marks")
        }
}