/* Career form submission */


$("#career-form").submit(function (event) {

    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:

    var $form = $(this),
        name = $form.find("input[name='name']").val(),
        email = $form.find("input[name='email']").val(),
        contact = $form.find("input[name='contact']").val(),
        profile = $('#profile :selected').text(),
        assignmentUrl = $form.find("input[name='assignmentUrl']").val(),
        blogreference = $form.find("input[name='blogreference']").val(),
        yourstory = $form.find("textarea[name='yourstory']").val(),
        whyknoldus = $form.find("textarea[name='whyknoldus']").val();
    console.log("pROFILE>>>" +JSON.stringify(profile));
    console.log("assignmentUrl>>>" +assignmentUrl);
    // Send the data using post
    var content = "Name = " + name + "\nEmail = " + email + "\nContact No. = " + contact + "\nProfile = " + profile + "\nAssignmentUrl = " + assignmentUrl + "\nMy References =  " + blogreference + "\nMy Story = " + yourstory + "\nReason to join = " + whyknoldus;
    var subject = "New Resume Received from Knoldus Website";
    var posting = $.post("/sendmail.knol", {content: content, subject: subject});
    /* Emptying the form value */
    var $form = $(this),
        name = $form.find("input[name='name']").val(''),
        email = $form.find("input[name='email']").val(''),
        contact = $form.find("input[name='contact']").val(''),
        profile = $form.find("select[name='profile']").val(''),
        AssignmentUrl = $form.find("input[name='assignmentUrl']").val(''),
        blogreference = $form.find("input[name='blogreference']").val(''),
        yourstory = $form.find("textarea[name='yourstory']").val(''),
        whyknoldus = $form.find("textarea[name='whyknoldus']").val('');
 //$("#form-div").css('visibility', 'visible');
    //$("#form-div").css('display', 'block');
//    setTimeout(function () {
//        $("#form-div").fadeOut();
//    }, 3000);
      swal("Success", "Thanks for connecting with Knoldus. We will get back to you soon.", "success")

});



/* Engage knoldus form submission */
$("#engage-knoldus-form").submit(function (event) {

    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
        name = $form.find("input[name='name']").val(),
        email = $form.find("input[name='email']").val(),
        message = $form.find("textarea[name='message']").val();


    // Send the data using post
    var content = "Name = " + name + "\nEmail = " + email + "\nMessage = " + message;
    var subject = "I want to engage Knoldus";
    var posting = $.post("/sendmail.knol", {content: content, subject: subject});

    /* Emptying the form value */
    var $form = $(this),
        name = $form.find("input[name='name']").val(''),
        email = $form.find("input[name='email']").val(''),
        message = $form.find("textarea[name='message']").val('');
    $("#form-div").css('visibility', 'visible');
    $("#form-div").css('display', 'block');
    setTimeout(function () {
        $("#form-div").fadeOut();
    }, 3000);


});
/* Engage knoldus form submission */

/*Newsletter form subbmission*/


$("#newsletter-form").submit(function (event) {

    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
        email = $form.find("input[name='email']").val();


    // Send the data using post
    var content = "Email = " + email;
    var subject = "Subscription to Newsletter";
    var posting = $.post("/sendmail.knol", {content: content, subject: subject});

    /* Emptying the form value */
    var $form = $(this),
        email = $form.find("input[name='email']").val('');

    $("#newsletter-div").css('visibility', 'visible');
    $("#newsletter-div").css('display', 'block');
    setTimeout(function () {
        $("#newsletter-div").fadeOut();
    }, 3000);
});


$("#job-form").submit(function (event) {

    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
        name = $form.find("input[name='name']").val(),
        email = $form.find("input[name='email']").val(),
        contact = $form.find("input[name='contact']").val(),
        blogreference = $form.find("input[name='blogreference']").val(),
        yourstory = $form.find("textarea[name='yourstory']").val(),
        whyknoldus = $form.find("textarea[name='whyknoldus']").val();


    // Send the data using post
    var content = "Name = " + name + "\nEmail = " + email + "\nContact No. = " + contact + "\nMy References =  " + blogreference + "\nMy Story = " + yourstory + "\nReason to join = " + whyknoldus;
    var subject = "JOB APPLICATION";
    var posting = $.post("/sendmail.knol", {content: content, subject: subject});

    /* Emptying the form value */
    var $form = $(this),
        name = $form.find("input[name='name']").val(''),
        email = $form.find("input[name='email']").val(''),
        contact = $form.find("input[name='contact']").val(''),
        blogreference = $form.find("input[name='blogreference']").val(''),
        yourstory = $form.find("textarea[name='yourstory']").val(''),
        whyknoldus = $form.find("textarea[name='whyknoldus']").val('');
    $("#form-div").css('visibility', 'visible');
    $("#form-div").css('display', 'block');
    setTimeout(function () {
        $("#form-div").fadeOut();
        window.location = "http://www.knoldus.com/connect/careers.knol";
    }, 3000);


});


$(".place").hover(
    function () {
        var id = this.id;
        $("#loc-" + id).show();
    },
    function () {
        var id = this.id;
        $("#loc-" + id).hide();
    }
);
$(document).ready(function() {
    $(".service-list").hover(
        //on mouseover
        function () {
            //alert("hi");
            $(this).animate({
                    height: '+=60' //adds 250px
                }//sets animation speed to slow
            );
        },
        //on mouseout
        function () {
            $(this).animate({
                    height: '-=60px' //substracts 250px
                }
            );
        }
    );
    //$(".give-us-call").hover(
    //    //on mouseover
    //    function () {
    //        alert("heanimate");
    //        //alert("hi");
    //        $(this).animate({
    //                width: '+=160' //adds 250px
    //            }//sets animation speed to slow
    //        );
    //    },
    //    //on mouseout
    //    function () {
    //        $(this).animate({
    //                width: '-=160px' //substracts 250px
    //            }
    //        );
    //    }
    //);
    $('iframe').load(function() {
        var css = '/css/team.css';
        $('iframe').contents().find("head").append(css);
    });

});
/*$(document).ready(function () {
    //  function newsletter_older(elem) {
    //var offset = 0;
    //var count = 0
    // $(".scala-newsletter").
    // $(".scala-newsletter").empty();
    //   $(".scala-newsletter").append('<script src="//knoldus.us7.list-manage.com/generate-js/?u=447751361cefa48e69edd740d&fid=10569&show=15" type="text/javascript"></script>);
    /!*var htmlString = $( ".scala-newsletter" ).html();
     $( ".scala-newsletter" ).text( htmlString );*!/


    /!*var my_awesome_script = document.createElement('script');

     my_awesome_script.setAttribute('src', 'knoldus.us7.list-manage.com/generate-js/?u=447751361cefa48e69edd740d&fid=10569&show=15');

     $('.scala-newsletter').append(my_awesome_script);
     $('.scala-newsletter').load(my_awesome_script);*!/
    var sampel = "http://knockoutjs.com/js/jquery.tmpl.js";
    $("#scaladyna").append(test);

});
function getData() {
    $.ajax({
        url: "http://knoldus.us7.list-manage.com/generate-js/?u=447751361cefa48e69edd740d&fid=10569&show=15",
        dataType: 'jsonp',
        crossDomain : true,
        success: function (data) {
            console.log(">>>>>>>>" + JSON.stringify(data));
        }
    });

}*/





