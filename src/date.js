

let Datebuil = (d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let time = `${hours} : ${minutes}`
return `${day} ${month} ${year} ${time}`
}
export default Datebuil