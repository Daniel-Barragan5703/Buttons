let h1_text = document.querySelector("#answer");
let p_tag = document.querySelector('p')
;let btn = document.querySelector("#mybutton");
let btn2 = document.querySelector("#mybutton2");
let btn3 = document.querySelector("#mybutton3");


btn.addEventListener("click", button_clicked)
btn2.addEventListener("click",button2_clicked);
btn3.addEventListener("click",button3_clicked);

function button2_clicked ()
{
        h1_text.style.color = "green";
}

function button_clicked()
{
    h1_text.style.color = "red";
}

function button3_clicked()
{
        h1_text.style.color = "blue";
}
