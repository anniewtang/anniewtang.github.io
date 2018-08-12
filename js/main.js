$("input").click(function() {
    if ($("input:checked").length != 0) {
        $('input').prop('checked', true);
    } else {
        $('input').prop('checked', false);
    }
});
