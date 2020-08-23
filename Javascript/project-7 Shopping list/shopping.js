const list = document.querySelector('.list');
const listitem = document.querySelector('#list-item');
const listbutton = document.querySelector('.list-button');


listbutton.addEventListener('click', (event) => { 
    
    const span = document.createElement('span');
    const treshbutton = document.createElement('button');
    span.textContent = listitem.value ; 
    list.appendChild(span);
    span.style.display='block';
    span.style.margin='10px 5px';
    span.style.position = 'relative';
    treshbutton.textContent = '-' ;
    span.appendChild(treshbutton);
    treshbutton.style.marginLeft = '50px';
    treshbutton.style.position = 'absolute';
    treshbutton.style.right = '0';  
    
    treshbutton.addEventListener('click',(event) => {
        list.removeChild(span);
    })
})


