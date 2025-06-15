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




import dynamic from "next/dynamic";
import Navbar from "./components/ui/ResposiveNav";
import StaggeredText from "./components/ui/StaggeredText";
import { SlideTabsExample } from "./components/ui/Nabar2";


// const StaggeredText = dynamic(() => import("@/components/ui/StaggeredText"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <Navbar />
      <SlideTabsExample />
      <StaggeredText
        text="Hi Aditi !!!"
        className="text-[100px]"
      />
      <StaggeredText
        className="text-[70px]"
        text="Ye le console log ... huh"
        once={true}
      />
      <StaggeredText className="text-[50px]" text="Hello Aditi Again !!!" once={true} />
    </div>
  );
}
