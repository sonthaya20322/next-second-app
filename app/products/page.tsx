import { Itim, Srisakdi } from "next/font/google";
import localFont from "next/font/local";

const oui = localFont({
    src: "./../fonts/Oui.ttf",
    weight: "800",
})

const itim = Itim({
  subsets: ["thai", "latin"],
  weight: ["400",],
});

const srisakdi = Srisakdi({
  subsets: ["thai", "latin"],
  weight: ["400","700"],
});



export default function Page() {
    return (
        <div>
            <h1>
                Products
            </h1>
            <hr />
            <h1>สวัสดี</h1>
            <h1 className={itim.className}>ลาก่อน Item </h1>
            <h1 className={srisakdi.className}>บ้ายบายย Srisakdi </h1>
            <hr />
            <h1 className={oui.className}>นายสนธยา สายวรรณะ</h1>
        </div>
    );
}