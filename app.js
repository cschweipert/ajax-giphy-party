console.log("Let's get this party started!");

//function to GET from giphy
async function getFromGiphy(evt){
    evt.preventDefault();
    let formInput = $("#input").val();
    let giph = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=E3r6peC1o6A2DJ29U3mxJk8SUeoLDAeO&q=${formInput}`);
    let dataLength = giph.data.data.length;
    let randomIdx = Math.floor(Math.random() * dataLength);
    $("#meme_container").append( $("<img>").attr("src", giph.data.data[randomIdx].images.original.url));
}


async function removeAllGifs(){
    $("#meme_container").empty();
}

//event listener for the submit button
$("form").on("submit",getFromGiphy);
$("#remove").on("click", removeAllGifs);
