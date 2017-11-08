// Add your custom Javascript here

function readURL(input, idType) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      if (idType == "id") {
        $("#scan-id-1").css("display", "none")
        $("#scan-id-2").css("display", "block")
        $('#uploaded-id').attr('src', e.target.result)
      }
      if (idType == "video") {
        $("#scan-id-3").css("display", "none")
        $("#scan-id-4").css("display", "block")
        $('#uploaded-video>source').attr('src', e.target.result)
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

$("#id-selfie").change(function(){
  readURL(this, "video")
})

$(document).ready(function () {
  // Turn off jQuery animation
  jQuery.fx.off = true

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})