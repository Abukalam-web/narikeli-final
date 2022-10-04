 
var data = [{
    "name": "Abu Kalam",
    "location": "Sonar Para",
    "description": "01768-037870",
   
  },
  {
    "name": "Md Abedul Islam",
    "location": "Sonar Para",
    "description": "01731-031567",
   
  },
            
  {
    "name": "Md Samsul Sonar",
    "location": "Sonar Para",
    "description": "01776-912190",
   
  },   
            
  {
    "name": "Md Rimon Sonar",
    "location": "Sonar Para",
    "description": " Coming soon",
   
  },   
   
  {
    "name": "   ",
    "location": "Sonar Para",
    "description": "  ",
   
  },
  {
    "name": "   ",
    "location": "Sonar Para",
    "description": "  ",
   
  },
  {
    "name": "   ",
    "location": "Sonar Para",
    "description": "  ",
   
  }
  ,{
    "name": "   ",
    "location": "Sonar Para",
    "description": "  ",
   
  }
  ,{
    "name": "   ",
    "location": "Sonar Para",
    "description": "  ",
   
  }





























































































































            
]

var htmlText = data.map(function(o){
  
  return `
     <tr>
     <td>${o.name}</td>
      <td>${o.location}</td>
      <td>${o.description}</td>
      
       
     </tr>
     
     
  `;
}).join("");

document.getElementById("table").innerHTML+=htmlText;


function filter(){
  var filter , tr, txtValue;
  var table=document.getElementById("table");
  filter=document.getElementById("input").value.toUpperCase();
  tr=document.getElementsByTagName("tr"); 
  
  
  for(var i=1; i<tr.length; i++){
    txtValue=tr[i].innerText;
    
    if(txtValue.toUpperCase().includes(filter)){
      tr[i].style.display="";
    }
    else{
      tr[i].style.display="none";
    }
    
  }
}


