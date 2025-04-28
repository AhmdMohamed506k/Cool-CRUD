let Posttitle=document.querySelector("#title");
let postdescription=document.querySelector("#description");
let postprice=document.querySelector("#price");
const target = window.document.getElementsByTagName('h1')[0]

let posts= [];

async function GetData(){
   await fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then(data => {
      posts = data;
      display()



    })
}
GetData()

function display(){
    box=``
    for (let i = 0; i < posts.length ; i++) {
        box +=`<tr>
                    <td class="text-white" >${i}</td>
                    <td class="text-white">${posts[i].title}</td>
                    <td class="text-white" >${posts[i].discription}</td>
                    <td class="text-white">${posts[i].price}</td>
                    <td>
                        <button class="btn btn-danger text-w " onclick="deletePost(${i})" >
                            <i class="fa-solid fa-trash-can me-1" style="color: #ffffff;"></i>
                             delete</button>
                        <button id="updateBtn" class="btn btn-success"  onclick="updatePost(${i})" >
                            <i class="fa-solid fa-wrench" style="color: #ffffff;"></i>
                            update</button>
                    </td>
                </tr>
        
        `
       document.querySelector("#tbody").innerHTML=box;
        
    }
}



async function api(method,data){
    
   await fetch("http://localhost:3000/posts",{
    method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body:JSON.stringify(data)
        })
        .then((response)=> {response.json()})
        .then((response)=> {
            
            
           GetData()
        })
   
}

function addPost(){
    const data={
        title:Posttitle.value,
        discription:postdescription.value,
        price:postprice.value
    };
    
    api("POST",data);
    clear()
    
   
}

var globleId=""
function updatePost(i){
    globleId=posts[i].id;
    
    Posttitle.value=posts[i].title;
    postdescription.value=posts[i].discription;
    postprice.value=posts[i].price;
    
    document.querySelector("#add").style.display="none";
    document.querySelector("#update").style.display="block";
}

function update(){
    let data = {
       id:globleId,
       title:Posttitle.value,
       discription:postdescription.value,
       price:postprice.value

    }

    api("PUT", data);
    clear()

    document.querySelector("#add").style.display="block";
    document.querySelector("#update").style.display="none";
}

function deletePost(i){
    
    let data = {
        id:posts[i]?.id
    }
    api("DELETE", data);
}



function clear(){
    Posttitle.value="";
    postdescription.value="";
    postprice.value="";
}





///======================



const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => text.split('').map(flickerLetter).map(colorLetter).join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);



new FinisherHeader({
    "count": 43,
    "size": {
      "min": 2,
      "max": 40,
      "pulse": 0
      
    },
    "speed": {
      "x": {
        "min": 0,
        "max": 0.8
      },
      "y": {
        "min": 0,
        "max": 0.2
      }
    },
    "colors": {
      "background": "#15182e",
       
      
   
      "particles": [
        "#ff926b",
        "#87ddfe",
        "#acaaff",
        "#1bffc2",
        "#f9a5fe"
        
      ]
    },
    "blending": "overlay",
    "opacity": {
      "center": 1,
      "edge": 1
    },
    "skew": 0,
    "shapes": [
      "c",
      "s",
      "t"
    ]
  });