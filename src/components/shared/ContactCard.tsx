import Image from "next/image";
import map from "/public/images/map.png";

export default function ContactCard() {
  return (
    <div className="container lg:grid lg:grid-cols-2 mb-8">
      <div className="bg-secondary h-[350px] p-16">
        <div className="mb-8">
          <h4 className="text-3xl font-semibold mb-3">Find Us</h4>
          <p>500 North Broadway Suite 1860C St. Louis, MO 63102</p>
        </div>
        <div>
          <h4 className="text-3xl font-semibold mb-3">Contact Us</h4>
          <p>info@thommessenpaulllp.com</p>
          <p>(704) 358-1528</p>
        </div>
      </div>
      <div className="w-full bg-secondary h-[350px] relative">
        <Image src={map} alt="map" className="w-full block object-cover object-center" fill />
      </div>
    </div>
  );
}
