import ProductCard from "./ProductCard";

import rifle from "../assets/rifle.png";
import pistol from "../assets/pistol.jpg";
import sniper from "../assets/sniper.jpg";

function WeaponSection() {
  return (
    <section className="section">

      <h2>Weapons Product</h2>

      <p className="section-text">
        To keep your items fresh, just add new case designs,
        seasonal trends, or distinctive packaging to your custom bakery products.
      </p>

      <div className="product-grid">
        <ProductCard image={rifle} name="M16 3D" />
        <ProductCard image={pistol} name="M1911 3D" />
        <ProductCard image={sniper} name="Sniper 3D" />
      </div>

    </section>
  );
}

export default WeaponSection;