export default function GetOrderWeight(cart) {
  return cart.reduce((a, n) => (a += (n.qty * 0.03)), 0).toFixed(2);
}
