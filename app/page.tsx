import Navbar from "./components/ui/ResposiveNav";
import StaggeredText from "./components/ui/StaggeredText";


export default function Home() {
  return (
    <div>
      <Navbar />
      <StaggeredText text="Hello sir" className="text-[200px]" />
    </div>
  );
}
