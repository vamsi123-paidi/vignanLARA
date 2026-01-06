
const fetchData = async(cityname)=>{
    const APIkey = '28933cea050d87745f7a78373b5af88a'
    const error = document.getElementById("error");
    const output = document.getElementById("output");

    const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`);
    if(!reponse.ok){
        error.textContent = 'failed to fetch'
        return
    }
    const data = await reponse.json()
    console.log(data)
    const temparature = Math.floor(data.main.temp)
    output.innerHTML = `
        <h1>${data.name}</h1>
        <h1>${temparature}°C</h1>
    `
}
const callerFun = ()=>{
    const searchInput = document.getElementById("searchInput").value.trim();
    const error = document.getElementById("error")
    error.style.color = 'red '
    if(!searchInput){
        error.textContent = "enter city name"
        return
    }
    console.log(searchInput)
    fetchData(searchInput)
}