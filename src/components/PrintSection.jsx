import ProductCard from "./ProductCard";

import phone from "../assets/phonecase.png";
import totebag from "../assets/totebag.png";
import bottle from "../assets/bottle.png";
import hat from "../assets/hat.png";
import pillow from "../assets/pillow.png";
import laptop from "../assets/laptopsleeve.png";

function PrintSection() {
  return (
    <section className="section">
      <h2>Unique Print-on-Demand Collections</h2>

      <p className="section-text">
        Freshen your catalogue with seasonal designs, attractive styles,
        and unique goods. KR Customizer allows you to create personalized
        items that keep customers returning.
      </p>

      <div className="product-grid">
        <ProductCard image={phone} name="Phone Case" />
        <ProductCard image={totebag} name="Tote Bag" />
        <ProductCard image={bottle} name="Bottle" />

        <ProductCard image={hat} name="Hat" />
        <ProductCard image={pillow} name="Pillow" />
        <ProductCard image={laptop} name="Laptop Sleeve" />
      </div>
    </section>
  );
}

export default PrintSection;