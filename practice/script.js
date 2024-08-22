$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: 'process_registration.php',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                $('#response').html(response);
            },
            error: function (xhr, status, error) {
                $('#response').html('An error occurred: ' + xhr.status + ' ' + error);
            }
        });
    });
});
