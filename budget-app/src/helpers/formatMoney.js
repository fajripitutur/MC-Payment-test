export default function formatMoney(money) {
  let formattedMoney = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(money);
  return formattedMoney;
}
