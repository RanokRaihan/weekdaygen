const weekDay = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
// const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const yearInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");
const startingDateInput = document.querySelector("#starting-date");
const mainForm = document.querySelector("#main-form");
const mainTable = document.querySelector(".main-table");

const getWeekDays = (e) => {
  e.preventDefault();
  const dates = [];
  const year = yearInput.value * 1;
  const month = monthInput.value * 1;
  const startingDate = startingDateInput.value * 1;
  const totalDays = new Date(year, month, 0).getDate() * 1;
  //   console.log(totalDays);
  for (let i = startingDate; i < totalDays; i = i + 3) {
    const singleDate = {
      date: `${i}/${month}/${year}`,
      weekDay: weekDay[new Date(year, month - 1, i).getDay()],
    };
    dates.push(singleDate);
  }
  //   console.log(dates);
  renderTable(dates);
};

const renderTable = (dateArray) => {
  dateArray.forEach((dates) => {
    const singleRow = ` <tr>
        <td>${dates.date}</td>
        <td>${dates.weekDay}</td>
    </tr>`;
    mainTable.innerHTML = mainTable.innerHTML + singleRow;
  });
};

mainForm.addEventListener("submit", (e) => {
  getWeekDays(e);
});
