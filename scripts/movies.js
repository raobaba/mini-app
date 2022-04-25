// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//http://www.omdbapi.com/?s=star+war&apikey=e32696a3
var amount = JSON.parse(localStorage.getItem("amount"));
console.log(amount);
document.getElementById("wallet").innerText = amount;



const url = "http://www.omdbapi.com/?s=star+war&apikey=e32696a3";


 const  searchVideos = async() => {
    try{
        const res = await fetch(`http://www.omdbapi.com/?s=star+war&apikey=e32696a3`)
        const data = await res.json();
        // append(data);
       console.log(data);
    }catch(err){
        console.log("err", err);
    }
 }

  

//   const  append = (videos) =>{
//          let showVid = document.getElementById("movies");
//          showVid.innerText = null;

//          videos.forEach(({id:{vidoeId},snippet:{title}}) =>{
//                var div = document.createElement("div");
//                var iframe = document.createElement("iframe");
//          } )
//   }





 document.getElementById("search").addEventListener("click", searchVideos );




