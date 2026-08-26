import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>ID : 6752410004</h1>
      <h1>Name : Shonthaya Saiwanna</h1>
      <hr />
      <h3>Link to Basic Route Page</h3>
      <Link href="/register">[Register]</Link>
      <Link href="/products">[Products]</Link> 



      <hr />
      <h3>Link to Basic Route Page</h3>
      <Link href="/products/keybord">[Keyboard]</Link>
      <Link href="/products/mouse">[Mouse]</Link>
      <Link href="/products/notebook/acer">[Notebook Acer]</Link>
      <Link href="/products/notebook/rog">[Notebook Rog]</Link>




    </div>
  );
}