var more_img = 1;
function scrollImg(){
    document.getElementById('bnr_'+more_img).scrollIntoView({ behavior: 'smooth' });
    var nextBanner = document.getElementById('bnr_' + ( more_img + 1 ) );
    if( nextBanner != null ){
        more_img++;
    }else {
        more_img = 0;
    }
}