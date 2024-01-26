async function calculateShippingValue(req, res) {
  console.log("@BODY: " + req.body);

  const uf = req.body?.destination?.province;
  const items = req.body?.items;

  console.log("@UF: " + uf);

  let total_price = 0;
  items.forEach((e, idx) => {
    total_price += e?.price;
    console.log(`@ITEM[${idx}]: ` + e);
  });

  console.log("@TOTAL_PRICE: " + total_price);

  const res_obj = {
    service_name: "Default Shipping",
    description: "Includes tracking and insurance",
    service_code: "shipping_company",
    currency: "BRL",
    total_price: 0,
  };

  switch (uf) {
    case "RJ":
      res_obj.total_price = 0;
      break;
    case "SP":
      res_obj.total_price = 0.06 * total_price;
      break;
    case "MG":
      res_obj.total_price = 0.08 * total_price;
      break;
    default:
      res_obj.total_price = 1 * total_price;
      break;
  }

  console.log("@RESPONSE: " + res_obj);

  try {
    return res.status(200).send(res_obj);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export { calculateShippingValue };
