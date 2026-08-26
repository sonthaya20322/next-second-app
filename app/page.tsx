import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>ID : 6752410004</h1>
      <h1>Name : Shonthaya Saiwanna</h1>
      <br />
      <hr />
      <br />
      <h3>Link to Basic Route Page</h3> <br />
      <Link href="/register">[Register]</Link> <br />
      <Link href="/products">[Products]</Link> <br />
      <Link href="/member">[Member]</Link> <br />


      <br />
      <hr />
      <br />
      <h3>Link to Basic Route Page</h3> <br />
      <Link href="/products/keybord">[Keyboard]</Link> <br />
      <Link href="/products/mouse">[Mouse]</Link> <br />
      <Link href="/products/notebook/acer">[Notebook Acer]</Link> <br />
      <Link href="/products/notebook/rog">[Notebook Rog]</Link> <br />




    </div>
  );
}