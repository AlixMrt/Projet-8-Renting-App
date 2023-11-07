import "./_banner.scss";

export default function Banner(props) {
  Banner.defaultProps = {
    firstText: "",
    secondText: "",
  };

  let backgroundImage = props.backgroundImage;
  let firstText = props.firstText;
  let secondText = props.secondText;

  return (
    <div className="banner">
      <img src={backgroundImage} alt="background landscape" />
      <h1>
        {firstText}
        <span> {secondText}</span>
      </h1>
    </div>
  );
}
