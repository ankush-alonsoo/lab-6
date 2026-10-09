const studentId = document.getElementById("Id");
const username = document.getElementById("username");

const osMarks = document.getElementById("os-marks");
const oopsMarks = document.getElementById("oops-marks");
const iotMarks = document.getElementById("iot-marks");
const mathsMarks = document.getElementById("maths-marks");
const fedfMarks = document.getElementById("fedf-marks");

const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

let total = 0;
let percentage = 0;
let result = 0;
let grade = 0;

if (submitBtn) {
    submitBtn.addEventListener('click', submitOperation);
}
if (clearBtn) {
    clearBtn.addEventListener('click', clearOperation);
}

const totalMarksCell = document.getElementById("total-marks");
if (totalMarksCell) {
    totalMarksCell.innerText = localStorage.getItem("total") || "";
    document.getElementById("percentage").innerText = localStorage.getItem("percentage") || "";
    document.getElementById("grade").innerText = localStorage.getItem("grade") || "";
    document.getElementById("result").innerText = localStorage.getItem("result") || "";
}

function submitOperation() {
    if (!studentId.value.trim() || !username.value.trim() || !osMarks.value.trim() ||
        !oopsMarks.value.trim() || !iotMarks.value.trim() || !mathsMarks.value.trim() || !fedfMarks.value.trim()) {
        alert("Invalid Input");
        return;
    }

    const os = Number(osMarks.value);
    const oops = Number(oopsMarks.value);
    const iot = Number(iotMarks.value);
    const maths = Number(mathsMarks.value);
    const fedf = Number(fedfMarks.value);

    const marks = [os, oops, iot, maths, fedf];

    for (let mark of marks) {
        if (isNaN(mark) || mark < 0 || mark > 50) {
            alert("Invalid Input");
            return;
        }
    }

    total = os + oops + iot + maths + fedf;
    percentage = (total / 250) * 100;
    result = percentage >= 40 ? "Pass" : "Fail";
    grade = percentage >= 40 ? "B" : "F";

    localStorage.setItem("total", total + " / 250");
    localStorage.setItem("percentage", percentage.toFixed(2) + "%");
    localStorage.setItem("result", result);
    localStorage.setItem("grade", grade);

    window.location.href = "display.html";
}

function clearOperation() {
    localStorage.clear();
    window.location.href = "index.html";
}

