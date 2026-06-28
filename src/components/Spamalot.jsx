import Spam from "./Spam";

const Spamalot = () => {
  let spamAarr = [];
  for (let i = 0; i < 500; i++) {
    spamAarr.push(<Spam key={i} />);
  }
  return <>{spamAarr}</>;
};
export default Spamalot;
