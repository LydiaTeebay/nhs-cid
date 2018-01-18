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

$("#modal-create-acc").on("click", function(e){
  e.preventDefault();
  window.parent.document.location.href = e.target.href;
})

$('#modal-verify').on('click', function(e) {
  e.preventDefault();
  window.parent.document.location.href = e.currentTarget.href;
})

$("#modalLoginComplete").on("click", function(e){
  e.preventDefault();
  window.parent.document.location.href = e.target.href;
})

$("#securityCode").on("input", function(e) {
  if (e.currentTarget.value.length == 4) {
    $("#securitycodeContinue").removeClass('button--disabled');
  } else {
    $("#securitycodeContinue").addClass('button--disabled');
  }
})

$("#securitycodeContinue").on("click", function(e) {
  if (e.currentTarget.href == "https://eredbook-uat.azurewebsites.net/parental/Inbox") {
    window.parent.document.location.href = e.target.href;
  }
})


// helper function to place modal window as the first child
// of the #page node
var m = document.getElementById('modal_window'),
    p = document.getElementById('content')

function swap () {
  if (m !== null && p !== null) {
    p.parentNode.insertBefore(m, p) 
  }
}

swap();

// modal window
(function() {

  'use strict'

  // list out the vars
  var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mCreate = getId('modal_create'),
      mCreate2 = getId('modal_create2'),
      mCreate3 = getId('modal_create3'),
      mClose = getId('modal_close'),
      modal = getId('modal_holder'),
      emailField = getId('emailAddress'),
      allNodes = document.querySelectorAll("*"),
      modalOpen = false,
      lastFocus,
      i

  // wrap all this and check the modal is on the page first
  if (mOverlay !== null) {
    // Let's open the modal
    function modalShow ( event ) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false
      lastFocus = document.activeElement
      mOverlay.setAttribute('aria-hidden', 'false')
      modalOpen = true
      modal.setAttribute('tabindex', '0')
      modal.forms[0].elements[0].focus()
      modal.focus()
      mOverlay.scrollTop(0)
      emailField.focus()
    }

    // binds to both the button click and the escape key to close the modal window
    // but only if modalOpen is set to true
    function modalClose ( event ) {
      if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
          mOverlay.setAttribute('aria-hidden', 'true')
          modal.setAttribute('tabindex', '-1')
          modalOpen = false
          lastFocus.focus()
      }
    }

    // Restrict focus to the modal window when it's open.
    // Tabbing will just loop through the whole modal.
    // Shift + Tab will allow backup to the top of the modal,
    // and then stop.
    function focusRestrict ( event ) {
      if ( modalOpen && !modal.contains( event.target ) ) {
          event.stopPropagation()
          modal.focus()
      }
    }

    // Close modal window by clicking on the overlay
    mOverlay.addEventListener('click', function( e ) {
      if (e.target == modal.parentNode) {
          modalClose( e )
      }
    }, false)

    // open modal by btn click/hit
    // mOpen.addEventListener('click', modalShow)
    mCreate.addEventListener('click', modalShow, false);
    mCreate2.addEventListener('click', modalShow, false);
    mCreate3.addEventListener('click', function(e) {
      e.preventDefault();
      window.parent.document.location.href = e.target.href;
    });
    // close modal by btn click/hit
    mClose.addEventListener('click', modalClose)

    // close modal by keydown, but only if modal is open
    document.addEventListener('keydown', modalClose)

    // restrict tab focus on elements only inside modal window
    for (i = 0; i < allNodes.length; i++) {
      allNodes.item(i).addEventListener('focus', focusRestrict)
    }
  }

  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
      return document.getElementById(id)
  }
})()

$(document).ready(function () {
  // Turn off jQuery animation
  jQuery.fx.off = true

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})
