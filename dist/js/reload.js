function AjaxFormRequest(result_id,formMain,url) {
    jQuery.ajax({
        url:     "php/send.php",
        type:     "POST",
        dataType: "html",
        data: jQuery("#"+formMain).serialize(), 
        success: function(response) {
        document.getElementById('result_id').innerHTML = response;
    },
    error: function(response) {
    $('#result_id').html("<p>Заявка не отправлена. Пожалуйста повторите.</p>");
    }
});

$(':input','#formMain')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');
}