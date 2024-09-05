const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



// Get the current date
const today = new Date();

// Define an array of month names
const monthNames = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];

// Create a calendar
function createCalendar(year, month) {
  const calendarElement = document.getElementById("calendar");

  // Clear the calendar
  calendarElement.innerHTML = "";

  // Create the month element
  const monthElement = document.createElement("div");
  monthElement.className = "month";
  monthElement.textContent = monthNames[month] + " " + year;
  calendarElement.appendChild(monthElement);

  // Create the weekdays element
  const weekdaysElement = document.createElement("div");
  weekdaysElement.className = "weekdays";
  calendarElement.appendChild(weekdaysElement);

  // Create the weekday names
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0; i < weekdayNames.length; i++) {
    const weekdayElement = document.createElement("span");
    weekdayElement.textContent = weekdayNames[i];
    weekdaysElement.appendChild(weekdayElement);
  }

  // Create the days element
  const daysElement = document.createElement("div");
  daysElement.className = "days";
  calendarElement.appendChild(daysElement);

  // Get the first day of the month
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create the day elements
  for (let i = 0; i < startDay; i++) {
    const emptyDayElement = document.createElement("div");
    daysElement.appendChild(emptyDayElement);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.textContent = i;
    daysElement.appendChild(dayElement);
  }
}

// Call the createCalendar function with the current year and month
createCalendar(today.getFullYear(), today.getMonth());


// search

var toggleButtons = document.querySelectorAll('.toggleButton');
for (var i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
}








