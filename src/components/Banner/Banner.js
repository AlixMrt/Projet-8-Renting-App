export default function Banner(props) {
  Banner.defaultProps = {
    firstText: "",
    secondText: "",
  };

  let backgroundImageUrl = props.backgroundImage;
  let firstText = props.firstText;
  let secondText = props.secondText;

  console.log(backgroundImageUrl);
  console.log(firstText);
  console.log(secondText);

  const url = "url" + backgroundImageUrl;

  return (
    <div className="banner" style={{ "backgroundImage": url }}>
      <h1>
        {firstText}
        <span> {secondText}</span>
      </h1>
    </div>
  );
}
