import ProductCard from "./ProductCard";

import tshirt from "../assets/tshirt.png";
import shirt from "../assets/shirt.png";
import jersey from "../assets/jersey.png";

function FashionSection() {

  const products = [
    {
      name: "T-Shirt 3D",
      image: tshirt,
    },
    {
      name: "Shirt 3D",
      image: shirt,
    },
    {
      name: "Sport Jersey 2D",
      image: jersey,
    },
  ];

  return (
    <section className="fashion-section">

      <h2>Fashion & Apparel Products Customization</h2>

      <p>
        Easily manage and update your fashion products with live
        customization. Customers can change colors, add prints,
        and personalize text in seconds.
      </p>

      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>

    </section>
  );
}

export default FashionSection;