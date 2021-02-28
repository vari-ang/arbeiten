/* Initialize Materialize components */

export function init() {
    // initialize tab
    $('.tabs').tabs();

    // change underline color
    $(".tabs>.indicator").css("background-color", '#1a237e');

    $(".scrollmenuTabs>.indicator").css("background-color", 'white');

    // initialize sidenav
    $('.sidenav').sidenav();

    // Initialize parallax
    $('.parallax').parallax();

    // initialize material box
    $('.materialboxed').materialbox();

    // initialize collapsible
    $('.collapsible').collapsible();

    // initialize select box
    $('select').formSelect();

    // initialize timepicker
    $('.timepicker').timepicker();
   
    // initialize modal
    $('.modal').modal();

    // initialize select
    $('select').formSelect();

    // initialize slider
    $('.slider').slider({
        height: 275,
        interval: 5000
    });

    // Initialize Floating Action Button
    $('.fixed-action-btn').floatingActionButton();
}