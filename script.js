"use strict";
$(document).ready(function() {
    let divID = null;
    let name = null;
    let phone = null;
    let people = null;
    $(document).on("click", ".available", function(e) {
        divID = $(this).attr("id");
        modalbox();
        $(`.tabnum`).text(`Table Number: ${divID}`);
    })
    
    $('.save').click(function() {
        $(`#${divID}`).addClass(`reserved`);
        $(`#${divID}`).removeClass(`available`);
        $(`#${divID}`).css(`cursor`,`not-allowed`);
        name = $(`#name`).val();
        phone = $(`#phone`).val();
        people = $(`#people`).val();
        $(`#${divID}`).attr(`name`, `${name}`);
        $(`#${divID}`).attr(`phone`, `${phone}`);
        $(`#${divID}`).attr(`people`, `${people}`);

        closeModal();
    })
    
    $(`.close`).click(function() {
        closeModal()
    })

    function modalbox() { 
        $(".modal").toggle(function (e) {   
          let dataModal = $(this).attr("data-modal");
          $("#" + dataModal).css({ "display": "block" });
        })
    }
    function closeModal() {
        $(".modal").toggle(function (e) {   
            let dataModal = $(this).attr("data-modal");
            $("#" + dataModal).css({ "display": "block" });
    })
    }
    $(document).on("mouseenter", `.reserved`, function(e) {

        $(e.target).append(`
        <div class="popup">
        Name: ${$(e.target).attr("name")}
        Phone: ${$(e.target).attr("phone")}
        People: ${$(e.target).attr("people")}
        </div>
        `);
        $(".popup").css("display", "flex");
    });
    $(document).on("mouseleave", ".reserved", function(e) {
        $(".popup").css("display", "none");
        $('.popup').remove();
    });
})



