const email = document.querySelector("#email");

let success = null;

document.getElementById("submit").addEventListener("click", function() {
    if (email.value === "") {
        email.classList.add("redborder");
        return
    } else {
        email.classList.remove("redborder");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "updateDB.php?email=" + email.value, true);
        xhr.send();

        xhr.onload = function() {
            if (xhr.status != 200) {
                success = false;
            } else {
                success = true;
            }
            openNewsletter(success);
        }
    }
});