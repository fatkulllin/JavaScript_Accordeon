let tabs = document.querySelectorAll('.tab')

for(let tab of tabs){
    tab.addEventListener('click',function func(event){
        event.preventDefault()
        let actives = document.querySelectorAll('.active')
        this.classList.toggle('active')
        for(let active of actives){
            active.classList.remove('active')
        }
    })
}