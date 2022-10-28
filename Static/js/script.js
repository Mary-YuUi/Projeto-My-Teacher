let teachersForms = document.getElementsByClassName("teacher-contract")

for (let teachersForm of teachersForms){
    teachersForm.addEventListener("submit", function(event) {
        event.preventDefault()

        let price = teachersForm.price.value
        let hours = teachersForm.hours.value
        let total = price * hours

        alert("Olá, seja bem vindo(a) esse é o valor total pelas horas calculadas: R$" + total.toFixed(2))
    })
}