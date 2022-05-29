// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//declare data firstUser
const name1 = "Monica";
const gender1 = "Female";
const age1 = 17;
const email1 = "monica@dingdong.com";
const favoriteColor1 = ["Yellow","Pink","White","Purple"];
const isHavePet1 = "Yes";
const education1 = 
[
    {
        name    : "SD 01", 
        city    : "Jakarta", 
        graduate: 2016
    },
    {
        name    : "SMP 02", 
        city    : "Jakarta", 
        graduate: 2019
    },
    {
        name    : "SMA 03", 
        city    : "Tangerang"
    }
];
const favoriteRestaurant1 = ["Bento","Sushi","Pancake","Eggy","Tempura","Padang","Tteok"];

//declare data secondUser
const name2 = "Wendy";
const gender2 = "Male";
const age2 = 23;
const email2 = "wendy@dingdong.com";
const favoriteColor2 = ["Blue","Black","Grey"];
const isHavePet2 = "No";
const education2 = 
[
    {
        name    : "SD 02", 
        city    : "Jakarta", 
        graduate: 2010
    },
    {
        name    : "SMP 03", 
        city    : "Bogor", 
        graduate: 2013
    },
    {
        name    : "SMA 01", 
        city    : "Surabaya",
        graduate: 2016
    },
    {
        name    : "Universitas Maju", 
        city    : "Tangerang"
    }
];
const favoriteRestaurant2 = ["Tempura","Bento","Sushi","Pancake","Padang","Katsu","Geprek","Eggy"];

const firstUser = 
{
    name                : name1,
    gender              : gender1,
    age                 : age1,
    email               : email1,
    favoriteColor       : favoriteColor1,
    isHavePet           : isHavePet1,
    education           : education1,
    favoriteRestaurant  : favoriteRestaurant1
};
const secondUser = 
{
    name                : name2,
    gender              : gender2,
    age                 : age2,
    email               : email2,
    favoriteColor       : favoriteColor2,
    isHavePet           : isHavePet2,
    education           : education2,
    favoriteRestaurant  : favoriteRestaurant2
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};