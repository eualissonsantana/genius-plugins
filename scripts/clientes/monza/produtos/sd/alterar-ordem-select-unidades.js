(() => {
    const currentSelect = document.querySelectorAll(".select--units__unit .select__button-label")
    const options = document.querySelectorAll(".select--units .select__dropdown-options .select__dropdown-option")
   
    if(currentSelect) {
        currentSelect.forEach(element => {
            element.innerHTML = element.innerHTML.replace("Citavel", "Monza")
            element.innerHTML = element.innerHTML.replace("MT", "MS")
        });

        const reorder = (before, after) => after.parentNode.insertBefore(before, after)
     
        const orders = [ { before: options[1], after: options[0] },  { before: options[3], after: options[2] }]
        orders.forEach(({before, after}) => reorder(before, after))
    }
})()