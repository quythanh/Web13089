const Add_subject = () => {
    let subject = $('#subject');
    if (subject.val() !== '') {
        $('#list_subject').append(`<li>${subject.val()}</li>`);
        subject.val("");
    }
}

$('#btn_add_subject').click(Add_subject);
$(document).keydown(e => e.key === 'Enter' ? Add_subject() : null);