import Image from "next/image";
import fire from "./../assets/images/fire.png";
import snowy from "./../assets/images/snowy.png";

export default function Page() {
    return (
        <div>
            <h1 className="text-green-800 text-4xl text-center border-2 border-green-800 rounded-lg p-4">
                Register
            </h1>
            <hr />
            {/* {อ้างอิงรูปภาพ public} */}
            <Image
                src="/earth.png" 
                alt="register" 
                width={120} 
                height={120}
                className="rounded-full border-2 border-green-800 rounded-2xl p-4 mx-auto mt-1"
            />
            {/* {อ้างอิงรูปภาพ assets/images} */}
            <Image
                src={snowy}
                alt="register"
                width={120}
                height={120}
                className="rounded-full border-2 border-green-800 rounded-2xl p-4 mx-auto mt-1"
            />
            <Image
                src={fire}
                alt="register"
                width={120}
                height={120}
                className="rounded-full border-2 border-green-800 rounded-2xl p-4 mx-auto mt-1"
            />
            {/* {อ้างอิงรูปภาพ network or internet} */}
            <Image
                src="https://images.pexels.com/photos/38897361/pexels-photo-38897361.jpeg"
                alt="register"
                width={120}
                height={120}
                className="rounded-full border-2 border-green-800 rounded-2xl p-4 mx-auto mt-1"
            />
            
        </div>
    );
}