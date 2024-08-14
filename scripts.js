// ini javascripts //


function hitungBMI() {
    var berat = parseFloat(document.getElementById("berat").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Convert tinggi to meters

    if (!isNaN(berat) && !isNaN(tinggi) && tinggi > 0) {
        var bmi = berat / (tinggi * tinggi);
        alert("BMI Anda adalah: " + bmi.toFixed(2));
    } else {
        alert("Silakan masukkan berat dan tinggi badan yang valid.");
    }
}


var calcdipslay = "
"


function cekStatusBMI(bmi) {
    let status;

    if (bmi < 18.5) {
        status = "Status tubuh Anda adalah kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Status tubuh Anda adalah normal (ideal).";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        status = "Status tubuh Anda adalah kelebihan berat badan.";
    } else if (bmi >= 30) {
        status = "Status tubuh Anda adalah kegemukan (obesitas).";
    }

    return status;
}

// Contoh penggunaan
let bmi = 22.5; // Masukkan nilai BMI di sini
console.log(cekStatusBMI(bmi));

