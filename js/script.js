const navCheck = document.querySelector('.switcher');

navCheck.addEventListener('change', (e)=> {
    if(e.target.checked){
        document.querySelector('.navbar').style.transform = 'translateY(20px)';
        document.querySelector('.navbar').style.opacity = '1';
    }else{
        document.querySelector('.navbar').style.transform = 'translateY(-20px)';
        document.querySelector('.navbar').style.opacity = '0';
    }
});
