import { Feature } from "../../component";
import "./Services.css";

function Services() {
  return (
    <div className="services-div">
      <Feature
        item="Oil Change"
        time="1 hr"
        price="$80.00"
        note="We use the best synthetic oil."
      />
      <hr />
      <Feature item="Battery Service" time="30 Min" price="$40.00" />
    </div>
  );
}

export default Services;
