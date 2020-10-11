// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=9362a48d355b9f13eed8bf1bde52af3f";
let baseURL ='http://api.openweathermap.org/data/2.5/weather?zip=';

/* Global Variables */


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);

/* Function called by event listener */
function performAction(){
    const zipCode = document.getElementById('zip').value;
    const feelings =  document.getElementById('feelings').value;

    getWeather(baseURL,zipCode,apiKey)
    .then(function(data){
        console.log(data);
        postData('/all',{temp:data.main.temp,date:d,feelings:feelings})
        updateUI()
    })
        
    
}
/* Function to GET Web API Data*/
const getWeather = async (baseURL,zip,key)=>{
    const res = await fetch(baseURL+zip+key);
    try{
        const data = await res.json();
        return data;
    }catch(e){
        console.log("error :",error);
    }
}
/* Function to POST data */
const postData = async(url='',data={})=>{
    const response = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(e){
        console.log("error: ",e);

    }
}

/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temp;
        document.getElementById('content').innerHTML = allData[0].feelings;
    }catch(error){
      console.log("error", error);
    }
  }



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();