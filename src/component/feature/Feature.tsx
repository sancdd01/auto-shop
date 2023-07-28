import "./Feature.css";

type FeatureProps = {
  item: String;
  time: String;
  price: String;
  note?: String;
};

function Feature(props: FeatureProps) {
  const { item, time, price, note } = props;
  return (
    <div className="feature-div">
      <h6>{item}</h6>
      <div className="feature-spans">
        <span>{time}</span>
        <div className="feature-span-vhr"></div>
        <span>{price}</span>
      </div>
      <p>{note}</p>
    </div>
  );
}

export default Feature;
