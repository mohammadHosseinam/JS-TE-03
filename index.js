function sayHello() {
    const yourName = prompt("please inter your name:").replace(/ /g , "_")
    return(`hello dear ${yourName.toLocaleUpperCase()}!`)
}
const greetingTag = document.createElement("h2")
greetingTag.innerHTML=sayHello()
greetingTag.style.color = "orange"
document.body.appendChild(greetingTag)