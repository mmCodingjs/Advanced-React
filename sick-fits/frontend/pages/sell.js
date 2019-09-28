import Link from "next/link"; // using link from next to server-side

const Sell = props => (
  <div>
    <p>Hey!</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Sell;
