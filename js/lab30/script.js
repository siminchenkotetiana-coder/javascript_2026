function showDays() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);

    const days = new Date(year, month, 0).getDate();

    document.getElementById("result").textContent =
        `У ${month} місяці ${year} року: ${days} днів`;
}