export const productos = [

/* Camaras */

{
 
  name: "SONY A7RIII",
  category: "camaras",
  description: "Incluye:  3 baterias + cargador + memoria 32gb",
  price: 6500,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/ad8c4287-cd30-49de-879d-e3124c34390f/large_photo.jpg",
  stock: 3,
},
{
  
  name: "BLACKMAGIC POCKET 4K",
  category: "camaras",
  description: "Incluye:  5 baterias + cargador + memoria sshd 120 gb",
  price: 9500,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/9850ef07-6630-41e4-879b-7839e0b2f616/large_photo.jpg",
  stock: 2,
},
{
  
  name: "SONY NX5R (HDMI - SDI)",
  category: "camaras",
  description:
    "Incluye: fuente (x     ) O + valija (x     ) O + Batería (x     ) O + Memoria 32/64gb. (x     ) O Nº de Serial: Valor de Reposición: U$D2900",
  price: 12500,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/0a9bbd8a-be8e-492d-94cc-5dbede6c3402/large_photo.jpg",
  stock: 3,
},

{
  
  name: "SONY A7IV",
  category: "camaras",
  description:
    "Dos baterias, cargador, tapa, correa y memoria de 126 gb sdd+",
  price: 17000,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/a452983f-bcac-45e4-b91d-793657d68e24/large_photo.jpg",
  stock: 15,
},


/*   Accesorios */

{
  
  name: "ROKINON AF 14mm f2.8 APS-C",
  category: "accesorios",
  description: "Incluye:Tapas (x2) Funda (x1)",
  price: 2200,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/f9fdf9df-f77a-4b27-acb6-6e929ddaf18e/large_photo.jpg",
  stock: 2,
},
{
 
  name: "ROKINON AF 50mm f1.4",
  category: "accesorios",
  description: "Incluye:Tapas (x2) Funda (x1)",
  price: 2500,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/c1e6c8a6-fc52-4832-8a01-658e4a0fe048/large_photo.jpg",
  stock: 2,
},

{
 
  name: "GIMBAL RONIN -S2 HASTA 4.5Kg",
  category: "accesorios",
  description: "Incluye dos pilas, tripie, cargador y follow focus",
  price: 6190,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/c8db1c85-8a91-4b45-beb4-e791d265e21d/large_photo.jpg",
  stock: 4,
},

{
 
  name: "Monitor Feelworld 7 4K (HDMI IN)",
  category: "accesorios",
  description: "Incluye 2 baterias y cargador",
  price: 2190,
  img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/8bd12e5a-f3e4-40b7-a384-b90edf1a54c2/large_photo.jpg",
  stock: 3,
},


/* combos */

{
 
  name: "COMBO C02  CANON R5 + CARL ZEISS CP3 PL",
  category: "combos",
  description: "Kit de lentes Carl Zeizz, gripería profesional y monitoreo",
  price: 75000,
  img: "https://www.cinemarket.com.co/wp-content/uploads/2020/10/Combo-C28-Canon-R5CP3.jpg",
  stock: 2,
},

{
 
  name: "CÁMARA SONY A7SIII + LENTE SONY 24-70 ALQUILER",
  category: "combos",
  description: "Gripería profesional, monitoreo, 4 baterías y memorias",
  price: 88300,
  img: "https://www.cinemarket.com.co/wp-content/uploads/2021/01/Formato-fotos-WEB2.jpg",
  stock: 2,
},

];
  
  

   export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal :( no hay sushi')
      }

    },3000)

  })