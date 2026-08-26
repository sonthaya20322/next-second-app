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
      <Link href="/register">[หน้า Register]</Link> <br />
      <Link href="/products">[หน้า Products]</Link> <br />
      <Link href="/member">[หน้า Member]</Link> <br />


      <br />
      <hr />
      <br />
      <h3>Link to Basic Route Page</h3> <br />
      <Link href="/products/keybord">[หน้า Keyboard]</Link> <br />
      <Link href="/products/mouse">[หน้า Mouse]</Link> <br />
      <Link href="/products/notebook/acer">[หน้า Notebook Acer]</Link> <br />
      <Link href="/products/notebook/rog">[หน้า Notebook Rog]</Link> <br />




    </div>
  );
}