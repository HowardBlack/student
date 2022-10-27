<?php

if ($_POST['data']) {
    print_r($_POST['data']);
    exit;
}

?>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
<script type="text/javascript">
    window.onload = () => {
        $.post(
            'test.php', 
            {data: [[1, 2, 3], [4, 5, 6]]},
            function(data) {
                console.log(true)
            },
        )
    }
</script>