function searchFunction(){
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('INFORMATION TO SEARCH');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}


(function() {
            
    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');
    
    navToggleBtn.on('click', function(e) {
        bodyEl.toggleClass('active-nav');
        e.preventDefault();
    });
    
    
    
})();

$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('.wrapper').addClass('dark');
    } else {
        $('.wrapper').removeClass('dark');
    }
})




