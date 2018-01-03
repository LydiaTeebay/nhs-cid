// Add your custom Javascript here

function readURL(input, idType) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      if (idType == "id") {

        $("#scan-id-1").css("display", "none")
        $("#scan-id-2").css("display", "block")

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $("#scan-id-2").css("display", "none")
          $("#scan-id-3").css("display", "block")
          document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        $('#uploaded-id').attr('src', e.target.result)
      }
      if (idType == "video") {
        $("#scan-id-3").css("display", "none")
        $("#scan-id-4").css("display", "block")
        $('#uploaded-video>source').attr('src', e.target.result)
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $(location).attr('href', 'pyi-scan-id-uploading')
        }
      }
    }
    reader.readAsDataURL(input.files[0])
  }
}

$("#id-document").change(function(){
  readURL(this, "id")
})

// submit photo button action
$("#submit-id-button").on("click", function(e) {
  e.preventDefault()
  $("#scan-id-2").css("display","none")
  $("#scan-id-3").css("display","block")
  document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#submit-id-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-2").css("display","none")
    $("#scan-id-1").css("display","block")
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// create back button action
$("#create-video-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-2").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#id-selfie").change(function(){
  readURL(this, "video")
})

// submit back button action
$("#submit-video-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-4").css("display","none")
    $("#scan-id-3").css("display","block")
    document.getElementById("id-selfie").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#selectAll").on("click", function(e) {
  if (e.target.checked) {
    inputs = $(".token-check").prop('checked', true);
  } else {
    inputs = $(".token-check").prop('checked', false);
  }
})

$("#selectStatus").on("change", function(e) {
  var filterType = e.target.options[e.target.selectedIndex].value;
  $("#token-title").text(filterType);
  var table = $("table")[0].className;
  var tableStatusCol = ($("table")[0].className === "tokenTable") ? 5 : 3;
  var tokenRows = $(".token-row");

  for(var i = 0; i < tokenRows.length; i++) {

    var currentTokenStatus = tokenRows[i].children[tableStatusCol].children[0].innerHTML;

    if (filterType !== "All") {
      if (currentTokenStatus.toLowerCase() === filterType.toLowerCase()) {
        tokenRows[i].style.display = "table-row";
      } else {
        tokenRows[i].style.display = "none";
      }
    } else {
      tokenRows[i].style.display = "table-row";
  }
}
})

$(document).ready(function () {
  // Turn off jQuery animation
  jQuery.fx.off = true

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})