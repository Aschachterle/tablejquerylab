"use strict";
$(document).ready(function() {
    let divID = null;
    $(`.circle`).click(function () {
        divID = $(this).attr("id");
        if ($(`#${divID}`).hasClass(`reserved`)) {
            alert(`table already taken`);
        } else {
            modalbox();
        }
        console.log(divID)
        $(`.tabnum`).html(`Table Number: ${divID}`);
    });
    $('.save').click(function() {
        console.log(divID)
        $(`#${divID}`).addClass(`reserved`);
        $(`#${divID}`).css(`cursor`,`not-allowed`);

        closeModal();
    })
    function modalbox() { 
        $(".modal").toggle(function (e) {   
          let dataModal = $(this).attr("data-modal");
          $("#" + dataModal).css({ "display": "block" });
        })
    }
    $(`.close`).click(function() {
        closeModal()
    })
    function closeModal() {
        $(".modal").toggle(function (e) {   
            let dataModal = $(this).attr("data-modal");
            $("#" + dataModal).css({ "display": "none" });
    })
    }
    
})


