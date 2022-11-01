//membuat teks kedalam tag p pada header
var changeText = document.querySelector('header h1');
changeText.innerText = 'Noviana Gresita';

document.getElementById("teks").innerHTML = "Element baru ditambahkan menggunakan javascript";

//membuat element h2 kedalam id/class about
var hasil = document.querySelector('#about');
var newElemen = document.createElement("h2");
var teksElemen = document.createTextNode('Element baru ditambah menggunakan javascript');
newElemen.appendChild(teksElemen);
hasil.appendChild(newElemen);

//membuat element yang dinamis berdasarkan event handler tertentu
//menampilkan waktu
function displayDate() {
    document.getElementById("waktu").innerHTML = Date();
}

//menambah list pada class item
const tambah = document.getElementById('tambah');

tambah.addEventListener('click', function tambahList() {
    const ul= document.querySelector('.item ul');
    const liBaru=document.createElement('li');
    const teks = document.createTextNode('List baru berhasil ditambah!');
    liBaru.appendChild(teks);
    ul.appendChild(liBaru);
});