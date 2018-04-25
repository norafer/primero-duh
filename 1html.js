

let cinta_blanca =[
{
"nombre":"pancho",
"edad":23
},
{
"nombre":"juan",
"edad":24
},
{
"nombre":"juan",
"edad":24
}
]   
for(i=0; i<cinta_blanca.length; i++){
  let h1= document.createElement("h1");
  let texto= document.createTextNode("este wey se llama "
  +cinta_blanca[i].nombre+ " y tiene " +cinta_blanca[i].edad+
   " años");
   h1.appendChild(texto);
   elBody.appendChild(h1);

}


