let ball, maxLeft = 500,
    maxTop = 540;

document.addEventListener("DOMContentLoaded", function () {
    ball = document.querySelector(".ball");

    buttonRun = document.getElementsByName("run")[0];
    buttonReset = document.getElementsByName("reset")[0];

    buttonRun.addEventListener("click", Run);
    buttonReset.addEventListener("click", Reset);

});



function Run(e) {

    let left = 0,
        top = 0;
    idTask = setInterval(MoveBall, 10);

    function MoveBall() {

        left++;
        top++;

        if (maxLeft > left) {
            ball.style.left = left + 'px';
        }

        if (maxTop > top) {
            ball.style.top = top + 'px';
        }

        if (top === maxTop && left === maxLeft) {
            clearInterval(idTask);
            return;
        }

    }

}

function Reset(e) {

    ball.style.top = 0 + 'px';
    ball.style.left = 0 + 'px';



}