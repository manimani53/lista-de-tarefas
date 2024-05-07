$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const taskToBeDone = $('#task-to-be-done').val()

        if (taskToBeDone !== "") {
            const novoItem = $('<li>').text(taskToBeDone)
            $('ul#lista-tarefas').append(novoItem)
            $('#task-to-be-done').val('')
        }
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed')
    })
});