// const taskArr = [];
let taskArr = JSON.parse(localStorage.getItem("taskArr"));
console.log(taskArr.lengthg);



// console.log(taskArr);
// console.log(taskArr[3].taskName);


function taskData1() {
        let tskName1 = document.getElementById("taskDatainput").value;
        let tskDate1 = document.getElementById("taskDateinput").value;
        let tskTime1 = document.getElementById("taskTimeinput").value;

        if (document.getElementById("taskDatainput").value !== "" ||
                document.getElementById("taskDateinput").value !== "" ||
                document.getElementById("taskTimeinput").value !== "") {
        } alert("fill data");


        tskObj = {
                taskName: tskName1,
                taskDate: tskDate1,
                tasktime: tskTime1,
        }
        document.getelementbyid("textinstick1").innerHTML = "Hello World!";     
        
        localStorage.setItem("tskObj", JSON.stringify(tskObj));
        taskArr.push(tskObj);
        localStorage.setItem("taskArr", JSON.stringify(taskArr));

        // document.getElementById("tsksticks").style.display = "inline";
};


// function datetimevalid() {
//         for (let i = 0; i < taskArr.length; i++) {
//                 if (tskDate1 == 1 && tasktime == 1) {
//                         alert("there is an old task in the same time and date</br>do you wana replaceit?");
//                 }
//         }
// }

// if (tskName1 === "") {
//         alert("fill input");
// }

// for (let i = 0; i < taskArr.length; ++i) {
//         // if (tskDate1 == taskArr[i].taskDate.value &&  tskTime1 == taskArr[i].tasktime.value){
//         console.log(taskArr[i].taskDate);
//         // alert("say nothing");
// }
// }
