// ini js
function switchForm() {
    var button=document.getElementById('switch-keliling')
    const section1 = document.getElementById('main');
    const section2 = document.getElementById('second');
    if(section1.classList.contains('active')){
          section1.classList.remove('active');
          section2.classList.add('active');
          button.textContent= 'Switch ke Luas Segitiga'
          resetLuas()
     }else{
            section1.classList.add('active');
            section2.classList.remove('active')
            button.textContent= 'Switch ke Keliling Segitiga'
            resetKeliling()
        }
    }

function hitungLuas() {
    const paragrafHasil = document.getElementById('hasil-luas')
    const alas = document.getElementById('alas').value
    const tinggi = document.getElementById('tinggi').value
    const luas = alas*tinggi
    if(alas == '' || tinggi == ''){
        alert('Isi alas dan tinggi terlebih dahulu!')
    }else{
        const perhitunganLuas1 = document.getElementById('perhitungan-luas-1')
        const perhitunganLuas2 = document.getElementById('perhitungan-luas-2')
        perhitunganLuas1.textContent = `L = 1/2 x ${alas} x ${tinggi}`;
        perhitunganLuas2.textContent = `L = ${luas}`;
        paragrafHasil.classList.add('active');
    }


}

function hitungKeliling(){
    const paragrafHasil = document.getElementById('hasil-keliling')
    const sisi1 = document.getElementById('sisi-a').value
    const sisi2 = document.getElementById('sisi-b').value
    const sisi3 = document.getElementById('sisi-c').value
    if(sisi1 == '' || sisi2 == '' || sisi3 == ''){
        alert('Isi semua sisi terlebih dahulu!')
    }else{
        const keliling = parseInt(sisi1) + parseInt(sisi2) +  parseInt(sisi3)
        const perhitunganKeliling1 = document.getElementById('perhitungan-keliling-1')
        const perhitunganKeliling2 = document.getElementById('perhitungan-keliling-2')
        perhitunganKeliling1.textContent = `K = ${sisi1} + ${sisi2} + ${sisi3}`;
        perhitunganKeliling2.textContent = `K = ${keliling}`;
        paragrafHasil.classList.add('active');
    }

}

function resetLuas(){
    document.getElementById('alas').value = ''
    document.getElementById('tinggi').value = ''
    const paragrafHasil = document.getElementById('hasil-luas')
    paragrafHasil.classList.remove('active');
}

function resetKeliling(){
    document.getElementById('sisi-a').value = ''
    document.getElementById('sisi-b').value = ''
    document.getElementById('sisi-c').value = ''
    const paragrafHasil = document.getElementById('hasil-keliling')
    paragrafHasil.classList.remove('active');
}