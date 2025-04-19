function zeroToLeft(num){return num < 10 ? `0${num}` : num;}
function main(){
    const p = document.createElement('p');
    const main = document.createElement('section');
    main.classList.add('main');
    
    setInterval(() => {
        
        const date = new Date();
        const hh = zeroToLeft(date.getHours());
        const mm = zeroToLeft(date.getMinutes());
        const ss = zeroToLeft(date.getSeconds());
    
        p.innerHTML = `${hh}:${mm}:${ss}`;
    }, 1000);

    main.appendChild(p);
    document.querySelector('body').appendChild(main);

}
main();