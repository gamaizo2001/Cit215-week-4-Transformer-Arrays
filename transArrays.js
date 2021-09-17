var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];


for(let x=0;x<chrs.length;x++){
    let div = document.createElement('div');
    if(chrs[x].afl == 'autobot'){
        div.className = 'character autobot';
        div.innerHTML = `<img src='https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png' alt='autobot'/> Name: ${chrs[x].name} <br> Class: ${chrs[x].class.toUpperCase()} <br> Afl: ${chrs[x].afl} <br> Vehicle:<span class='${chrs[x].vehicle}'> ${chrs[x].vehicle}</span> `

    }
    else{
        div.className = 'decepticon';
        div.innerHTML = `<img src='https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png' alt='decepticon'/> Name: ${chrs[x].name} <br> Class: ${chrs[x].class.toUpperCase()} <br> Afl: ${chrs[x].afl} <br> Vehicle: <span class='${chrs[x].vehicle}'>${chrs[x].vehicle}</span> `
    }


    document.body.appendChild(div)

   div.classList.add("character");
    div.classList.add("img");
    div.classList.add("div");
}




