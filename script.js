const Click = () =>{
let userCity = document.getElementById("city").value;
let userCountry = document.getElementById("country").value;

if(!userCity || !userCountry){
    alert("Please fill the input!")
    return;
}

axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${userCity}&country=${userCountry}&method=1a day ago`)
.then((timingresponse) => {
console.log("Timing Response" , timingresponse.data);
let short = timingresponse.data.data;
document.getElementById("Fajr").innerText = `Fajr: ${short.timings.Fajr}`
document.getElementById("Dhuhr").innerText = `Dhuhr: ${short.timings.Dhuhr}`
document.getElementById("Asr").innerText = `Asr: ${short.timings.Asr}`
document.getElementById("Maghrib").innerText = `Maghrib: ${short.timings.Maghrib}`
document.getElementById("Isha").innerText = `Isha: ${short.timings.Isha}`
document.getElementById("Date").innerText = `Date: ${short.date.gregorian.date}`
document.getElementById("sunset").innerText = `Sunset: ${short.timings.Sunset}`
document.getElementById("Imsak").innerText = `Imsak: ${short.timings.Imsak}`
document.getElementById("Sunrise").innerText = `Sunrise: ${short.timings.Sunrise}`
document.getElementById("Midnight").innerText = `Midnight: ${short.timings.Midnight}`

})
.catch((timingError) => {
    console.log("Timing Error" , timingError);
    alert("Timing Error");
})
}

const Refresh = () => {
    document.getElementById("Fajr").innerText = "";
    document.getElementById("Dhuhr").innerText = "";
    document.getElementById("Asr").innerText = "";
    document.getElementById("Maghrib").innerText = "";
    document.getElementById("Isha").innerText = "";
    document.getElementById("Date").innerText = "";
    document.getElementById("sunset").innerText = "";
    document.getElementById("Imsak").innerText = "";
    document.getElementById("Sunrise").innerText = "";
    document.getElementById("Midnight").innerText = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
}
const cancel = () => {
    document.getElementById("city").value = "";
}
const cancel1 = () => {
    document.getElementById("country").value = "";
}