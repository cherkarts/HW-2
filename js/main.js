var inputData = document.querySelector('input[tupe="text"]');
var ulSpisok = document.getElementById("spisok");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var item1 = document.getElementsByTagName("li");
var date = new Date();

var options = {
  // era: 'long',
  year: "numeric",
  month: "numeric",
  day: "numeric",
  // weekday: 'long',
  // timezone: 'UTC',
  hour: "numeric",
  minute: "numeric"
  // second: 'numeric'
};

function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function() {
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

function loadTodo() {
  if (localStorage.getItem("ApplicationTodo")) {
    ulSpisok.innerHTML = localStorage.getItem("ApplicationTodo");
  }
  deleteTodo();
}

// function colorLine() {
//   for (let li of item1) {
//     li.addEventListener("click", function() {
//       li.classList.add("activeLi");
//     });
//   }
// }

//addEventListener -оброботчік событій с последуюўім вызовом функцій

inputData.addEventListener("keypress", function(keyPressed) {
  if (keyPressed.which === 13) {
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    newSpan.innerHTML = " ";
    var newInfo = this.value;
    this.value = " ";

    newInfo = newInfo.replace(/^\s+|\s+$/g, "");
    if (!newInfo) {
      alert("Поле не может быть пустым");
    } else {
      ulSpisok
        .appendChild(newLi)
        .append(
          newInfo,
          "\u00A0 \u00A0 \u00A0",
          date.toLocaleString("ru", options),
          "\u00A0",
          newSpan
        );
    }
  }
  deleteTodo();
  colorLine();
});

saveBtn.addEventListener("click", function() {
  localStorage.setItem("ApplicationTodo", ulSpisok.innerHTML);
});

clearBtn.addEventListener("click", function() {
  ulSpisok.innerHTML = " ";
  localStorage.setItem("ApplicationTodo", ulSpisok.innerHTML);
});

function colorLine() {
  for (let li of item1) {
    li.addEventListener("click", function() {
      li.classList.add("activeLi");
    });
  }
}

function modalClose() {
  var m = document.getElementById("modal");
  if (m.style.display != "none") m.style.display = "none";
}

function modalOpen() {
  var o = document.getElementById("modal");
  if (o.style.display != "block") o.style.display = "block";
}

deleteTodo();

loadTodo();

colorLine();
