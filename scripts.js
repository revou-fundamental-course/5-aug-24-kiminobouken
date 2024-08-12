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