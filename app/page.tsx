// import Navbar from "./components/ui/ResposiveNav";
// import { StaggeredText } from "./components/ui/StaggeredText";



// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <StaggeredText text="Hello sir" className="text-[100px]" />
//       <StaggeredText className="text-[150px]" text="How are you ?" once={true} />
//     </div>
//   );
// }

"use client";


import dynamic from "next/dynamic";
import Navbar from "./components/ui/ResposiveNav";
import StaggeredText from "./components/ui/StaggeredText";


// const StaggeredText = dynamic(() => import("@/components/ui/StaggeredText"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <Navbar />
      <StaggeredText
        text="A billion dollar idea often begins with a random thought."
        className="text-[100px]"
      />
      <StaggeredText
        className="text-[150px]"
        text="How are you?"
        once={true}
      />
    </div>
  );
}
