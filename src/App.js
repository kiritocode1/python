
import "./style.css"

// import BarChart from "./components/BarChart";
// import { LanguageData } from "./components/BarData";
import { Image, Text } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { DiPython } from "react-icons/di";

export default function App() {

  return (
    <div className="App bg-black pt-20 md:px-40">
      <Image src="https://c.tenor.com/qnp4xGGoC44AAAAC/cute-awe.gif" width={450} />
      <Text h1 size={60} css={{ textGradient: "45deg ,$green50 -30% , $green600 90%" }} >Blog #2 Python:Basics 🐍  </Text>
      <Text color="$green800" >Hello World , its me Aryan back with another blog about basics of Python 🐍 Programming language <br /> this blog is beginners friendly 😊 and anyone can read this blog to understand a lot about <br /> python as a programming language . <br /> in the future 🚀 blog we'll cover python with data science    </Text>
      <div className=" flex flex-col">
        <Text h4 color="$green800" weight={70}>Reader Level : 🐣 </Text>
        <Progress value={5} shadow color="success" status="success" size="xl"  className="my-40"/>
        <Text color="$purple700" h1 className="flex items-center">Soo , Why learn <DiPython /> ??? </Text>
        <Text h4 color="$purple800" >If youre a beginner to programming or just looking for better opportunities , python is the language to learn . look @ this graph  </Text>
        {/* <BarChart BarChartData={LanguageData}/> */}
      <Text h4 color="$purple800" > this graph clearly shows  that python is the most loved and important languages in modern time   </Text>

        
      </div>
    </div>
  );
}
