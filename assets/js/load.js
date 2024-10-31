// Fungsi untuk memuat file HTML dan menampilkannya di elemen dengan ID tertentu
function loadContent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal memuat ' + url);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

// Memuat header dan footer
document.addEventListener("DOMContentLoaded", () => {
    loadContent('component/footer.html', 'footer');
});
