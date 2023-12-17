document.addEventListener("DOMContentLoaded", function () {
    const hotelForms = document.querySelectorAll('.transaction form');

    hotelForms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Mendapatkan data dari form
            const checkInDate = form.querySelector('#check-in').value;
            const checkOutDate = form.querySelector('#check-out').value;
            const guests = form.querySelector('#guests').value;

            // Lakukan validasi atau lakukan request ke server untuk pemesanan
            if (checkInDate && checkOutDate && guests) {
                // Lakukan apa yang diperlukan untuk pemesanan di sini
                console.log('Pemesanan berhasil! Check-In:', checkInDate, 'Check-Out:', checkOutDate, 'Tamu:', guests);
                // Di sini bisa dilakukan request ke server untuk pemesanan
            } else {
                // Jika data tidak lengkap, tampilkan pesan kesalahan atau lakukan validasi tambahan
                console.error('Data tidak lengkap');
                alert('Mohon lengkapi informasi pemesanan');
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Menangani pengiriman formulir
        $("form").submit(function (e) {
            e.preventDefault();
    
            var hotelName = $(this).data("hotel");
            var checkInDate = $(this).find("#check-in").val();
            var checkOutDate = $(this).find("#check-out").val();
            var guests = $(this).find("#guests").val();
    
            saveTransactionData(hotelName, checkInDate, checkOutDate, guests);
            // Tambahkan navigasi ke halaman transactions.html
            window.location.href = "book.html";
        });
    });
});