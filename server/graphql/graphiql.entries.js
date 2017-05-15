mutation createProduct {
  createProduct(product: {
    mainTitle: "Switch Juice",
    title: "French Vanilla Mocha",
    flavor: "french_vanilla_mocha",
    price: "30",
    sku: "NJ2JP0001",
    sizes: [small],
    nicotine_strengths: [two, four, six, eight],
    images: [{
			purpose: "card",
      url: "https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png"
    }, {
      purpose: "large",
      url: "https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp-fvm.jpg"
    }],
    routeTag: "french_vanilla_mocha",
    vendor: "Vape Switch",
    blurb: "The French Vanilla Mocha is a delicious blend of French Vanilla, Mocha Milk Chocolate and dash of Dark Chocolate and brings a smooth, enjoyable flavor.  A nice morning Vape to replace that cigarette with your coffee, but it can easily be considered and all-day Vape."
  }) {
    _id,
    product {
      mainTitle
      title
      flavor
      price
      sku
      sizes
      nicotine_strengths
      routeTag
      vendor
      blurb
      images {
        purpose
        url
      }
      dates {
        added_to_store
        removed_from_store
      }
    }
  }
}
