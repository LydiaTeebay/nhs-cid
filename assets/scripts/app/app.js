// Add your custom Javascript here

function readURL(input, idType) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {

      if (idType == "photo") {
        $("#scan-photo-preview").css("display", "block")
        $('#uploaded-photo').attr('src', e.target.result)
        $('#photo-review').attr('src', e.target.result)

      }
      if (idType == "id") {
        $("#scan-id-preview").css("display", "block")
        $('#uploaded-id').attr('src', e.target.result)
        $('#id-review').attr('src', e.target.result)

      }
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#photo-document").change(function(){
  readURL(this, "photo")
  $("#scan-photo-button").removeAttr("disabled")
});

$("#id-document").change(function(){
  readURL(this, "id")
  $("#scan-id-button").removeAttr("disabled")
});

$("#scan-id-button").on("click", function(e) {
  e.preventDefault()
  if ($("#scan-id-button").attr("disabled") == "disabled") {

  }
  $("#scan-id-1").css("display","none")
  $("#scan-id-2").css("display","block")
  document.body.scrollTop = document.documentElement.scrollTop = 0
});

$("#scan-photo-button").on("click", function(e) {
  e.preventDefault()
  if ($("#scan-photo-button").attr("disabled") == "disabled") {

  }
  $("#scan-id-2").css("display","none")
  $("#scan-id-3").css("display","block")
  document.body.scrollTop = document.documentElement.scrollTop = 0
});

$(document).ready(function () {
  // Turn off jQuery animation
  jQuery.fx.off = true

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})