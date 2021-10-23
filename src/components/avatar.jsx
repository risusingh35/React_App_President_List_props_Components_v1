import "../css/styles.css";

export default function Avatar(props) {
  return (
    <div>
      <img className="dp" src={props.img} alt={props.alt} />
    </div>
  );
}
