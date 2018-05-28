let sentence= prompt ("Escibre una frase");
    document.write("La frase ingresada  <strong>\''" + sentence + "\''</strong>,  está compuesta por " + letters(sentence) + " carácteres, incluyendo los "  + spaces(sentence) + " espacios." );
    printf(sentence);
function printf(sentence)
{
    for (let index = 0; index < sentence.length; index++)
    {
        console.log(sentence.charAt(index).toUpperCase());
    }
}
function letters(sentence)
{
    let index = 0;
    for ( ;index < sentence.length; index++)
    {
    }
    return index;
}
function spaces(sentence) 
{
    let cont = 0;
    for (let index = 0; index < sentence.length; index++) {
        if (sentence.charAt(index)== " ")
        {
           cont++; 
        }
    } 
    return cont;
}