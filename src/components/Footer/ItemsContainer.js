import Item from "./Item";
import { PRODUCTS, CATEGORIES, CONTACT, ADDRESS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 py-16 lg:mx-60 md:mx-32 sm:mx-12">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={CATEGORIES} title="CATEGORIES" />
      <Item Links={CONTACT} title="CONTACT" />
      <Item Links={ADDRESS} title="ADDRESS" />
    </div>
  );
};

export default ItemsContainer;