const fullDarkModeChkbx = document.querySelector('#full-dark-mode') ;

fullDarkModeChkbx.addEventListener('change' , (e)=>{
    if(fullDarkModeChkbx.checked){
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }

    // containerChkbx.checked = fullDarkModeChkbx.checked ;

    // if(containerChkbx.checked) {
    //     container.classList.add('dark') ;
    // }
    // else{
    //     container.classList.remove('dark') ;
    // }
})

const containerChkbx = document.querySelector('#contained-dark-mode') ;
const container = document.querySelector('.container') ;

containerChkbx.addEventListener('change' , (e)=>{
    if(containerChkbx.checked) {
        container.classList.add('dark') ;
    }
    else{
        container.classList.remove('dark') ;
    }
})