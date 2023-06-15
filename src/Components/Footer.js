import { useSelector } from "react-redux";

const Footer = () => {
  const orderSlicer = useSelector((state) => state.order);
  const length = orderSlicer.value.length;
  return (
    <footer className="Footer">
      <p>
        {length} list {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
}

export default Footer;