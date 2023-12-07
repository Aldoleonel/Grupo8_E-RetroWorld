const $ = (id) => document.getElementById(id);

const showMessageInfo = (msg) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "info",
    title: msg
  });
};

const showCountProductCart = (products, hidden = false) => {
  sessionStorage.setItem('cart-count', products.map(product => product.quantity).reduce((a,b) => a + b, 0))
      $('show-count').innerHTML = sessionStorage.getItem('cart-count')
      $('show-count').hidden = hidden
  console.log(products, 'ESTOY DENTRO DE LA FUNCION!!!!!!!!!');
}

const showProductInCart = (products, total) => {
  const cartTable = document.getElementById('cart-table');
  if (cartTable) {
    cartTable.innerHTML = ''; // Limpiar el contenido antes de actualizarlo
    products.forEach(({ id, image, name, price, quantity, discount }) => {
      //console.log(id, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      cartTable.innerHTML += `
        <tr>
          <th scope="row"><img src="/img/products/${image}" alt="" width=100/></th>
          <td>${name}</td>
          <td>${(price - price * discount /100) * quantity}</td>
          <td>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-danger ${quantity === 1 && 'disabled'}" onclick="removeItemToCart(${id})"><i class="fa-solid fa-minus"></i></button>
              <input type="text" value="${quantity}" style="width:30px"/>
              <button class="btn btn-sm btn-success" onclick="addItemToCart(1,${id})"><i class="fa-solid fa-plus"></i></button>
            </div>
          </td>
          <td>
            <h3 style="cursor:pointer" onclick="deleteItemToCart(${id})" class="text-danger"><i class="fa fa-trash"></i></h3>
          </td>
        </tr>
      `;
      
    });
    document.getElementById('show-total').innerHTML = total;
  }
};


const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        quantity,
        product : +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    
    const {ok,data,msg} = await response.json();
    //console.log(ok,'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    if (!ok) {
      console.log(ok,'LA RESPUESTA ES FALSO');
      throw new Error(msg);
    } else {
      //console.log(data, 'EEEEEEEEEEEEEEEEEEEEEEEEEEE');
      const {products, total} = data
      console.log(products,'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      showCountProductCart(products)
      showProductInCart(products, total);
      showMessageInfo(msg)
    }
   
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
  
};


const removeItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart?product=${id}`, {
      method : 'DELETE'
    });

    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      showCountProductCart(products)
      showProductInCart(products, total)
      showMessageInfo(msg)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const deleteItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart/item?product=${id}`, {
      method : 'DELETE'
    });
    
    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      if(products.length){
        sessionStorage.setItem('cart-count', products.length)
        $('show-count').innerHTML = sessionStorage.getItem('cart-count')
        showProductInCart(products,total)
        showMessageInfo(msg)
      }else {
        showCountProductCart(products)
        $("cart-body").innerHTML =
        '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
      $("btn-clearCart").classList.add('disabled')
      }
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const clearCart = async () => {
  try {

    const response = await fetch(`/api/cart/all`,{
      method : 'DELETE'
    });
    
    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      $("cart-body").innerHTML =
      '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
      showCountProductCart(products, true)

    $("btn-clearCart").classList.add('disabled')
    showMessageInfo(msg)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
}



window.onload = function () {

  if(!sessionStorage.getItem('cart-count')) {
    sessionStorage.setItem('cart-count',0)
  } 

  if($('show-count')){
    $('show-count').innerHTML = sessionStorage.getItem('cart-count')
    $('show-count').hidden =  sessionStorage.getItem('cart-count') > 0 ? false : true; 
  } 
  


  $("btn-cart") && $("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/api/cart");
        const { ok, data: {products, total} } = await response.json();
        console.log(ok, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        if (ok) {
          if (products.length) {
            $("cart-body").innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Product</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="cart-table">
                  
                </tbody>
                <caption>
                    <div class="d-flex justify-content-end">
                        <h5>Total: $<span id="show-total">${total}</span></h5> 
                    </div>
                 </caption>
            </table>`;
            showProductInCart(products, total)
            $("btn-clearCart").classList.remove('disabled')
          } else {
            $("cart-body").innerHTML =
              '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
            $("btn-clearCart").classList.add('disabled')
          }
        }
       // console.log(products, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
      } catch (error) {
        console.error;
        alert(error.message);
      }
    });
};