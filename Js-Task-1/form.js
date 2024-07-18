let final_data = {}

function showdata() {
    console.log(final_data)
}

const button_available = () => {
    const mandatory_values = document.querySelectorAll('#f-name,#address_1,.gender,#country,#p_code')
    const male_checked = document.getElementById('gender_male').checked
    const female_checked = document.getElementById('gender_female').checked
    for (let n of mandatory_values) {
        if (!n.value || (male_checked == false && female_checked == false)) {
            document.getElementById("submit_btn").disabled = true
        }
    }
}

const getDetail = () => {
    const mandatory_values = document.querySelectorAll('#f-name,#address_1,.gender,#country,#p_code')
    const male_checked = document.getElementById('gender_male').checked
    const female_checked = document.getElementById('gender_female').checked
    let decide = 0
    for (let n of mandatory_values) {
        if (!n.value || (male_checked == false && female_checked == false)) {
            document.getElementById(n.name).innerText = "This could not be empty"
        } else {
            decide = decide + 1
        }
    }
    if (mandatory_values.length == decide) {
        alert("success")
    }
}

let special_status = false

function excludeSplcl(trimed, id_name) {
    for (let letter of trimed) {
        if (!(letter >= "a" && letter <= "z") && !(letter >= "A" && letter <= "Z")) {
            document.getElementById("submit_btn").disabled = true
            return document.getElementById(id_name).innerText = "Enter a valid data"

        } else {
            special_status = true
        }
    }
}

function checkValid(mandatoryData, optionalData, numData) {
    if (mandatoryData) {
        const trimed = mandatoryData.value.trim()
        if (trimed.length == "") {
            document.getElementById("submit_btn").disabled = true
            document.getElementById(mandatoryData.name).innerText = `${mandatoryData.name} should not be empty`
        } else {
            document.getElementById(mandatoryData.name).innerText = ""
            if (mandatoryData.name != "address-1") {
                excludeSplcl(trimed, mandatoryData.name)
            } else {
                special_status = true
            }
            if (special_status == true) {
                document.getElementById("submit_btn").disabled = false
                final_data[mandatoryData.name] = trimed
            }
        }
    } else if (numData) {
        if (numData.value.length == 0) {
            return document.getElementById(numData.name).innerText = `${numData.name} should not be empty`
        }
        if (numData.name != "date_of_birth") {
            document.getElementById(numData.name).innerText = ""
        }
        final_data[numData.name] = numData.value
    } else {
        const trimed = optionalData.value.trim()
        excludeSplcl(trimed)
        if (special_status == true) {
            final_data[optionalData.name] = trimed
        }
    }
    showdata()
}

window.onload = function () {
    const evnt = document.getElementById("submit_btn").addEventListener("click", getDetail)
}

window.onkeyup = function () {
    button_available()
}

window.onclick = () => {
    button_available()
}