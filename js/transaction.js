document.addEventListener("DOMContentLoaded", function () {
    // Panggil fungsi untuk menampilkan data saat halaman dimuat
    displayTransactionData();
});

function displayTransactionData() {
    // Ambil data dari local storage
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Dapatkan tabel berdasarkan ID
    var table = document.getElementById("transactionTable");
    var tbody = table.getElementsByTagName("tbody")[0];

    // Bersihkan isi tabel sebelum menambahkan data baru
    tbody.innerHTML = "";

    // Tambahkan baris baru untuk setiap transaksi
    transactions.forEach(function (transaction) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // Isi sel dengan data transaksi
        cell1.textContent = transaction.hotelName;
        cell2.textContent = transaction.checkInDate;
        cell3.textContent = transaction.checkOutDate;
        cell4.textContent = transaction.guests;
    });
}