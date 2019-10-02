var base_url = "http://localhost/";
function Short(longurl){
    this.longurl = longurl;
}



Short.prototype.postUrl = function(){
console.log(this.longurl,'from short');
var myUrl = this.longurl;
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/postUrl",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        data: JSON.stringify({
            originalUrl:myUrl 
        }),
        beforeSend: function() {
            $("#loader").show();
        },
        // On Successful posting
        success: function(data) {
          console.log(data);
          console.log(data.shortUrl);
          var short = data.shortUrl;
          $('#myInput').val(short);
          $('#copydata').html('<button class="btn" onclick="myFunction()">Copy text</button>');
        },
        complete: function() {
            $("#loader").hide();
        },
        // In case of error in POSTING login data
        error: function(err) {},
        statusCode: {
            401: function() {
                alert("401 status code! user error");
            },
        }

    });
}
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
    console.log(copyText);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
$(document).ready(function(){
    $("#loader").hide();
  });
  $(document).on("click", "#send", function() {
    var lengthyurl = $('#url').val();
    console.log(lengthyurl);
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if (!re.test(lengthyurl)) { 
        alert("url error");
        return false;
    }
  var portUrl = new Short(lengthyurl);
  portUrl.postUrl();
  });

    