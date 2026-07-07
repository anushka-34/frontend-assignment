import ProductCard from "./ProductCard";

import earring from "../assets/earring.webp";
import ring from "../assets/ring.webp";
import pendant from "../assets/pendant.webp";
import bangle from "../assets/bangle.jpg";
import necklace from "../assets/necklace.jpg";
import earring2 from "../assets/earring2.jpg";

function JewelrySection() {
  return (
    <section className="section">
      <h2>Jewelry Accessories</h2>

      <div className="product-grid">
  <ProductCard image={earring} name="Earring 3D" />
  <ProductCard image={ring} name="Ring 3D" />
  <ProductCard image={pendant} name="Necklace 3D" />

  <ProductCard image={bangle} name="Bangle 2D" />
  <ProductCard image={earring2} name="Ring 2D" />
  <ProductCard image={necklace} name="Necklace 2D" />
</div>

    </section>
  );
}

export default JewelrySection;