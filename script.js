"use strict";

// Form validation
$(document).ready(function () {
  $(".sub-btn").click(function (event) {
    event.preventDefault();
    let firstName = $("#fname").val();
    let lastName = $("#lname").val();
    let birthDate = $("#dob").val();

    let count = 0;
    let secondCount = 0;

    if (firstName == "") {
      $("#fname").css("border-bottom", "2px solid red");
      count++;
    } else {
      $("#fname").css("border-bottom", "");
    }
    if (lastName == "") {
      $("#lname").css("border-bottom", "2px solid red");
      count++;
    } else {
      $("#lname").css("border-bottom", "");
    }
    if (birthDate == "") {
      $("#dob").css("border-bottom", "2px solid red");
      count++;
    } else {
      $("#dob").css("border-bottom", "");
    }
    if ($("#married").is(":checked")) {
      $("#radio-error").css("opacity", "0");
      secondCount++;
    } else if ($("#un-married").is(":checked")) {
      $("#radio-error").css("opacity", "0");
      secondCount++;
    } else {
      $("#radio-error").css("opacity", "1");
    }
    if ($("#job").is(":checked")) {
      $("#check-error").css("opacity", "0");
      secondCount++;
    } else if ($("#no-job").is(":checked")) {
      $("#check-error").css("opacity", "0");
      secondCount++;
    } else {
      $("#check-error").css("opacity", "1");
    }
    if (count > 0) {
      $(".top-text").css("opacity", "1");
    }
    if (count == 0) {
      $(".top-text").css("opacity", "0");
    }
  });

  // Reset button
  $(".reset-btn").click(function () {
    confirm("Reset everything?");
    window.location.reload();
  });

  // Age validation
  $("#dob").change(function () {
    let dob = $("#dob").val();

    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let newYear = year - 18;

    let backDate = new Date(currentDate.setFullYear(newYear));
    if (new Date(dob) > backDate) {
      $("#error").css("opacity", "1");
    } else {
      $("#error").css("opacity", "0");
    }
  });

  // Email-validation function
  $(window).on("load", function (event) {
    event.preventDefault();
    $(".sub-btn").click(function () {
      let email = $("#email").val();
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (email.match(regexEmail)) {
        $("#email").css("border-bottom", "");
        $("#email-error").css("opacity", "0");
      } else if (email == "") {
        $("#email-error").text("Insert an email address");
        $("#email-error").css("opacity", "1");
      } else {
        $("#email").css("border-bottom", "2px solid red");
        $("#email-error").text("Invalid email address");
        $("#email-error").css("opacity", "1");
      }
    });
  });
});

const subBtn = document.querySelector(".sub-btn"); // Submit button

// Inserting data
let index = 1;
subBtn.addEventListener("click", function (e) {
  e.preventDefault;
  let firstName = document.getElementById("fname").value;
  let middleName = document.getElementById("mname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("cname").value;
  let gender = document.getElementById("gender").value;
  let addressData = document.getElementById("address-data").value;
  let addressCity = document.getElementById("address-city").value;
  let addressStd = document.getElementById("address-std").value;
  let birthDate = document.getElementById("dob").value;
  let marry =
    document.querySelector('input[id="married"]').checked == true
      ? "Married"
      : document.querySelector('input[id="un-married"]').checked == true
      ? "Un-Married"
      : "";

  let employee =
    document.querySelector('input[id="job"]').checked == true
      ? "Yes"
      : document.querySelector('input[id="no-job"]').checked == true
      ? "No"
      : "";

  let emp = [];

  let myArray = {
    FirstName: firstName,
    MiddleName: middleName,
    LastName: lastName,
    Email: email,
    Contact: contact,
    Gender: gender,
    AddressData: addressData,
    AddressCity: addressCity,
    AddressStd: addressStd,
    BirthDate: birthDate,
    Marry: marry,
    Employee: employee,
  };

  emp.push(myArray);
  buildTable(myArray);

  function buildTable(data) {
    let table = document.getElementById("table-body");
    let row = "";

    for (var i = 0; i <= emp.length; i++) {
      row = `<tr id=${index}_index>
        <td >${index}</td>
        <td id=${index}_FirstName>${emp[i]["FirstName"]}</td>
        <td id=${index}_MiddleName>${emp[i]["MiddleName"]}</td>
        <td id=${index}_LastName>${emp[i]["LastName"]}</td>
        <td id=${index}_Email>${emp[i]["Email"]}</td>
        <td id=${index}_Contact>${emp[i]["Contact"]}</td>
        <td id=${index}_Gender>${emp[i]["Gender"]}</td>
        <td id=${index}_AddressData>${emp[i]["AddressData"]}</td>
        <td id=${index}_AddressCity>${emp[i]["AddressCity"]}</td>
        <td id=${index}_AddressStd>${emp[i]["AddressStd"]}</td>
        <td id=${index}_BirthDate>${emp[i]["BirthDate"]}</td>
        <td id=${index}_Marry>${emp[i]["Marry"]}</td>
        <td id=${index}_Employee>${emp[i]["Employee"]}</td>
        <td id=${index}_icon><i class="fas fa-edit" onClick="edit(${index});"></i></td>
        </tr>`;

      table.innerHTML += row;
      index += 1;
    }
  }
});

// Edit button
function edit(index) {
  let x = document.getElementById(index + "_index");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
  } else {
    x.contentEditable = "true";
  }
}

subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let middleName = document.getElementById("mname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("cname").value;
  let gender = document.getElementById("gender").value;
  let addressData = document.getElementById("address-data").value;
  let addressCity = document.getElementById("address-city").value;
  let addressStd = document.getElementById("address-std").value;
  let birthDate = document.getElementById("dob").value;
  let marry =
    document.querySelector('input[id="married"]').checked == true
      ? "Married"
      : document.querySelector('input[id="un-married"]').checked == true
      ? "Un-Married"
      : "";

  let employee =
    document.querySelector('input[id="job"]').checked == true
      ? "Yes"
      : document.querySelector('input[id="no-job"]').checked == true
      ? "No"
      : "";

  let storeData = [
    { id: 1, "first name": firstName },
    { id: 2, "middle name": middleName },
    { id: 3, "last name": lastName },
    { id: 4, "email ID": email },
    { id: 5, "contact no": contact },
    { id: 6, "gender info": gender },
    { id: 7, " address info": addressData },
    { id: 8, "city name": addressCity },
    { id: 9, "std code": addressStd },
    { id: 10, "birth date": birthDate },
    { id: 11, "martial status": marry },
    { id: 12, "employed status": employee },
  ];

  if (storeData) {
    localStorage.setItem("key", JSON.stringify(storeData));
  }
});

// indexddb
// let db = null;
// let objectStore = null;
// let database = indexedDB.open("formdb", 2);
// database.addEventListener("error", (err) => {
//   console.warn(err);
// });
// database.addEventListener("success", (ev) => {
//   db = ev.target.result;
//   console.log("success", db);
// });
// database.addEventListener("upgradeneeded", (ev) => {
//   db = ev.target.result;
//   console.log("upgrade", db);
//   if (!db.objectStoreNames.contains("formStore")) {
//     objectStore = db.createObjectStore("formStore", {
//       keyPath: "id",
//     });
//   }
// });

// subBtn.addEventListener("submit", (ev) => {
//   ev.preventDefault();
//   let firstName = document.getElementById("fname").value;
//   let middleName = document.getElementById("mname").value;
//   let lastName = document.getElementById("lname").value;
//   let email = document.getElementById("email").value;
//   let contact = document.getElementById("cname").value;
//   let gender = document.getElementById("gender").value;
//   let addressData = document.getElementById("address-data").value;
//   let addressCity = document.getElementById("address-city").value;
//   let addressStd = document.getElementById("address-std").value;
//   let birthDate = document.getElementById("dob").value;

//   let storeData = {
//     firstName,
//     middleName,
//     lastName,
//     email,
//     contact,
//     gender,
//     addressData,
//     addressCity,
//     addressStd,
//     birthDate,
//   };

//   let tx = db.transaction("formStore", "readwrite");
//   tx.oncomplete = (ev) => {
//     console.log(ev);
//   };
//   tx.onerror = (err) => {
//     console.log(err);
//   };
//   let store = objectStore("formStore");
//   let request = store.add(storeData);

//   request.onsuccess = (ev) => {
//     console.log("successful");
//   };
//   request.onerror = (err) => {
//     console.log("error");
//   };
// });
