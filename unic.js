const inputs = document.querySelectorAll(".cod-unic input");

inputs.forEach((input, index) =>{
    input.dataset.index = index;
    input.addEventListener("paste", handlePasteCod);
    input.addEventListener("keyup", handleCod)
});

function handlePasteCod(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length == inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}

function handleCod(e) {
    const input = e.target;
    let value = input.value;
    input.value = "";
    input.value = value ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if(value.length > 0 && fieldIndex < inputs.length - 1) {
        input.nextElementSibling.focus();
    }

    if (e.key == "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1) {
        submit();
    }
}

function submit() {
    console.log("Submitting...");
    let cod = ""; // codul unic
    inputs.forEach((input) => {
        cod += input.value;
        input.disabled = true;
        input.classList.add("disabled")
    });
    console.log(cod);
    // move to next page
    window.location.href = "DatePersonale.html";
}