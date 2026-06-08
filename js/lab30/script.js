function showDays() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        document.getElementById("result").textContent =
            "Будь ласка, введіть коректні значення.";
        return;
    }

    // Визначення кількості днів у місяці
    const days = new Date(year, month, 0).getDate();

    document.getElementById("result").textContent =
        `У ${month}-му місяці ${year} року ${days} днів.`;
}