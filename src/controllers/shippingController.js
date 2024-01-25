async function calculateShippingValue(req, res) {
  console.log(req.body);

  try {
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export { calculateShippingValue };
