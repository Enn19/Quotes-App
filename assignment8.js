
    var all=["' The best revenge is massive success. '"
        ," ' You miss 100% of the shots you don't take. '"
        ," ' The best revenge is massive success. '"
        ," ' Do not take life too seriously. You will not get out alive. '"
        ,"' Resentment is like drinking poison and waiting for your enemies to die. '"
        ]
     var   names=[ "--Frank Sinatra",
                   "--Nelson Mandela",
                   "--Wayne Gretzy",
                   "--Nelson Mandela",
                   "--Epictetus"]
                   
var counter=0
var nam=0

function generateQuote(){
    document.getElementById("demo").innerHTML = all[counter]
    document.getElementById("author").innerHTML = names[nam]
    counter++
    if(counter >= all.length)
    {
        counter=0
    }
    nam++
    if(nam>= names.length)
    {
        nam =0
    }
}