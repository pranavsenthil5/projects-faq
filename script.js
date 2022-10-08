var idx;
var idList;

// var custom_renderer = new marked.Renderer();
// custom_renderer.code = function (code, language) {
//     console.log("Pranav")
//     if(code.match(/^sequenceDiagram/)||code.match(/^graph/)){
//         return '<div class="mermaid">'+code+'</div>';
//     }
//     else{
//         // return '<pre><code>'+code+'</code></pre>';
//         return '<div class="mermaid">'+code+'</div>';
//     }
// };

// var processed_code1;
// const myRe = new RegExp('```mermaid\n[\s\S]*?\n```', 'g');


// const renderer = {
//   heading(text, level) {
//     const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

//     return `
//             <h${level}>
//               <a name="${escapedText}" class="anchor" href="#${escapedText}">
//                 <span class="header-link"></span>
//               </a>
//               ${text}
//             </h${level}>`;
//   }
// };

// const custom_renderer = {
//   heading(text, level) {
//     const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

//     return `
//             <h${level}>
//               <a name="${escapedText}" class="anchor" href="#${escapedText}">
//                 <span class="header-link"></span>
//               </a>
//               ${text}
//             </h${level}>`;
//   }
// };


function getData(url) {
    const response = fetch(url);
    return response.json();
}
function readJSON() 
{
    fetch('./covid_faq_data.json')
    .then(response => {
        return response.json();
    }).then(data => runLunr(data))
    //.then(data => printToConsole(data));
    // .then(data => console.log(data));
    
    // runLunr()
    // 
    
}

function test()
{
    console.log(1);
    // fetch('./example.md')
    // .then(response => {
    //     return response.text;
    // }).then(data => displayMarkdown(data));
    fetch('example.md')
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
      displayMarkdown(text);
    });
}

function displayMarkdown(data)
{
    // console.log(data)
    // document.getElementById('content').innerHTML =marked.parse(data);
    marked.use({ custom_renderer });
    // document.getElementById('content').innerHTML = marked.parse('# heading+');

    document.getElementById('content').innerHTML = marked.parse(data);
    var temp = document.getElementsByClassName('language-mermaid');
    for(i = 0;i<temp.length; i++)
    {
        temp[i].classList.add('mermaid');
        temp[i].classList.remove('language-mermaid');
    }
    temp = document.getElementsByClassName('language-mermaid');
    for(i = 0;i<temp.length; i++)
    {
        temp[i].classList.add('mermaid');
        temp[i].classList.remove('language-mermaid');
    }
    // console.log(temp);
//     myArray = myRe.exec(data);
//     myArray.forEach(function(entry) {
//   console.log(entry);
// });
}

function filterResults()
{
    text = document.getElementById("search-field").value;
    output = idx.search(text);
    console.log(output[0]["ref"]);
    document.getElementById("search-field").value = "";
}

function runLunr(doc)
{
    idx = lunr(function () {
        this.ref('id');
        this.field('questions');
        this.field('answers');
        
        doc.forEach(function (doc) {
            this.add(doc)
        }, this)
    })

    
    console.log("Hello!");
}