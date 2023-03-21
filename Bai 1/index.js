function isPrime(n) {
    if (n < 2) 
    return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function calculate() {
    let soThuNhat = parseInt(document.getElementById("soThuNhat").value);
    let soThuHai = parseInt(document.getElementById("soThuHai").value);
    let sum = 0;

    for (let i = soThuNhat; i <= soThuHai; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    document.getElementById('result').innerHTML = 'Tổng các số nguyên tố từ ' + soThuNhat + ' đến ' + soThuHai + ' là: ' + sum;
}
