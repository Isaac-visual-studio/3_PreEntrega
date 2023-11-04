//funciones

//crear cuenta
function crearCuenta() {
    let usuario = prompt("Porfa vor escribi tu nombre de usuario");
    let gmail = prompt("Porfa vor escribi tu gmail"); 
    let contraseña = prompt("Porfa vor escribi tu contraseña");
    
    return {usuario, gmail, contraseña};
}


//login
function login(cuenta) {
    let nombre = prompt("Ingrese su nombre");
    
    if(validarNombre(nombre, cuenta)) {
      return nombre; 
    } else {
      alert("Nombre invalido");
      return login(cuenta);
    }
}
  
function validarNombre(nombre, cuenta) {
    return nombre === cuenta.usuario;
}
  
function validarContraseña(contraseña, cuenta) {
    return contraseña === cuenta.contraseña; 
}

//calculo
function calculoTotal(){
  document.getElementById("tab").innerHTML="";
  let n=Number(document.getElementById("capital").value);
  let n2=Number(document.getElementById("couta").value);
  let n3=Number(document.getElementById("interes").value);
  if(n>0){   
      for(i=1;i<=n2;i++){
          ca=n/n2;
          d1=ca.toFixed(2);
          i2=((n*n3)/100)/n2;
          d2=i2.toFixed(2);
          r=ca+i2;
          d3=r.toFixed(2);
          document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                  `<tr>
                      <td> ${i}</td>
                      <td> ${d1}</td>
                      <td> ${d2}</td>
                      <td> ${d3}</td>
                  </tr>`;
      }
      n1=n.toFixed(2);
      t_i=i2*n2;
      d4=t_i.toFixed(2);
      t_p=r*n2;
      d5=t_p.toFixed(2);
      document.getElementById("t1").innerHTML=n1;
      document.getElementById("t2").innerHTML=d4;
      document.getElementById("t3").innerHTML=d5;        
  }else{
      alert("Falta ingresar un Número");
  }
}


//inicio y login
alert("Bienvenido a banco Isaac");
  
let cuenta = crearCuenta();
  
alert("Inicie sesion");
  
let nombre = login(cuenta);
  
  let contraseña2 = prompt("Ingrese su contraseña");
  
if(validarContraseña(contraseña2, cuenta)) {
    alert("Bienvenido/a " + nombre);
} else {
    alert("Contraseña incorrecta");
}

//calcul
let claculos = calculoTotal();