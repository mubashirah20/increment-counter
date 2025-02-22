const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        //console.log(typeof target, target)
        const c = +counter.innerText

        //divide it so it can count upwards
        const increment = target / 300

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        } else{
            counter.innerText = target
        }
    }

    updateCounter() //to call the updateCounter function
});