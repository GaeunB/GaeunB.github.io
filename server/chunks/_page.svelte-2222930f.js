import { c as create_ssr_component, e as escape, l as each, f as add_attribute } from './ssr-326d5af4.js';

const css = {
  code: ".product-list.svelte-1899irv,.cart-item.svelte-1899irv{display:grid;grid-template-columns:repeat(3, 1fr)}.image.svelte-1899irv{height:150px;width:150px;background-size:contain;background-position:center;background-repeat:no-repeat}.total.svelte-1899irv{text-align:right}.cart-list.svelte-1899irv{border:2px solid;padding:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total;
  let cart = [];
  let products = [
    {
      id: 1,
      name: "Apple",
      image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
      price: 10,
      quantity: 1
    },
    {
      id: 2,
      name: "Orange",
      image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
      price: 11,
      quantity: 1
    },
    {
      id: 3,
      name: "Grapes",
      image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg",
      price: 12,
      quantity: 1
    }
  ];
  $$result.css.add(css);
  total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return `<div class="m-20 w-full max-w-4xl" data-svelte-h="svelte-1jr4b0a"><h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-pink-400 ">장바구니</span></h1></div> <p>There are ${escape(cart.length)} items in your cart</p> <div class="product-list svelte-1899irv">${each(products, (product) => {
    return `<div><div class="image svelte-1899irv" style="${"background-image: url(" + escape(product.image, true) + ")"}"></div> <h4>${escape(product.name)}</h4> <p>₹${escape(product.price)}</p> <button data-svelte-h="svelte-ooc6mp">장바구니에 추가하기</button> </div>`;
  })}</div> <div class="cart-list svelte-1899irv">${each(cart, (item) => {
    return `${item.quantity > 0 ? `<div class="cart-item svelte-1899irv"><img width="50"${add_attribute("src", item.image, 0)}${add_attribute("alt", item.name, 0)}> <div>${escape(item.quantity)} <button data-svelte-h="svelte-vb2ftg">+</button> <button data-svelte-h="svelte-1l94qmw">-</button></div> <p>₹${escape(item.price * item.quantity)}</p> </div>` : ``}`;
  })} <div class="total svelte-1899irv"><h4>Total: $ ${escape(total)}</h4></div></div> <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" data-svelte-h="svelte-g0i620"><a href="/pay">구매하기</a></button>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2222930f.js.map
