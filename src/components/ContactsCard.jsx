import "../css/styles.css";
import Avatar from "./avatar";
import Details from "./details";
export default function ContactsCard(props) {
  return (
    <div className="ContactsCard">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <h5 className="pos">{props.pos}</h5>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details DetailsInfo={props.email} />
        <Details DetailsInfo={props.mob} />
        <Details DetailsInfo={props.addr} />
      </div>
    </div>
  );
}
