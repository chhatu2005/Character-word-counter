const text = document.getElementById("text")
const character = document.getElementById("characters")
const words = document.getElementById("words")
const sentences = document.getElementById("sentences")

const countCharacter = (value)=>
{
    return value.length
}

const countWords = (value)=>
{
    var cleanText = value.trim()

    if(cleanText === "")
    {
        return 0
    }
    return cleanText.split(/\s+/).length
}

const countSentenses = (value)=>
{
    var cleanText = value.trim()

    if(cleanText === "")
    {
        return 0
    }
    return cleanText.split(/[.!?]+/).filter(s =>s.trim()!=="").length
}

const updateCounter = ()=>
{
    var value = text.value

    character.innerText = countCharacter(value)
    words.innerText = countWords(value)
    sentences.innerText = countSentenses(value)
}

text.oninput = updateCounter