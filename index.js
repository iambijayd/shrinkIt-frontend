const shortenBtn=document.getElementById("shorten-btn");
const urlInput=document.getElementById("url-input");
const shortUrlInput=document.getElementById("short-url");
const copyBtn=document.getElementById("copy-btn");

shortenBtn.addEventListener("click", async function(){
    const longUrl=urlInput.value;

    //Call the backend API to shorten the URL
    const response = await fetch("/shorten",{
        //requesting API to shortened the URL
        method: "post",   //HTTP request to send data
        headers:{
            "content-Type": "application/json"
        },
        //Type of content sending from frontend is JSON
        body:JSON.stringify({url:longUrl})
        //The data sending to the server is converted into JSON string
    });
    const data=await response.json();
    //waiting for the server response.Once the responce is received,we extract JSON data from response.
    shortUrlInput.value=data.shortUrl;
    //Display the shortened URL
});

copyBtn.addEventListener("click",function(){
    const shortUrl=shortUrlInput.value;
    navigator.clipboard.writeText(shortUrl)
    //The selected url is copied to the clipboard.
    alert("Short URL copied to clipboard!");
});
