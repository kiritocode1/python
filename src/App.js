
import "./style.css"

// import BarChart from "./components/BarChart";
// import { LanguageData } from "./components/BarData";
import { Image, Text } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { DiPython } from "react-icons/di";

import chart from "./Images/chart.svg"; 
import CollapseRules from "./components/Collapse/Collapse";
export default function App() {
  return (
    <div className="App bg-black pt-20 md:px-40">
      <Text  className="flex items-center font-bold font-mono">kiritocode1.github.io/ <Text  color="$green600" className="animate-pulse">python</Text></Text>
      <Image src="https://c.tenor.com/qnp4xGGoC44AAAAC/cute-awe.gif" width={450} />
      <Text h1 size={60} css={{ textGradient: "45deg ,$green50 -30% , $green600 90%" }} >Blog #2 Python:Basics 🐍  </Text>
      <Text  >Hello World , its me Aryan back with another blog about basics of Python 🐍 Programming language <br /> this blog is beginners friendly 😊 and anyone can read this blog to understand a lot about <br /> python as a programming language . <br /> in the future 🚀 blog we'll cover python with data science    </Text>
      <div className=" flex flex-col">
        <Text h4 color="$green800" weight={70}>Reader Level : 🐣 </Text>
        <Progress value={5} shadow color="success" status="success" size="xl"  className="my-40"/>
        <Text color="$purple700" h1 className="flex items-center text-4xl mt-8">Soo , Why learn <DiPython /> ??? </Text>
        <Text h4  >If youre a beginner to programming or just looking for better opportunities , python is the language to learn . look @ this graph  </Text>
        {/* <BarChart BarChartData={LanguageData}/> */}
        <div>
          <Image src={chart} alt="Chart showing Python Dominance " />
        </div>
      </div>
        <Text h4> this graph clearly shows  that python is the most loved and important languages in modern time , mostly due to its easy to read syntax . Python , unlike other languages have some special properties that you dont often , Some of them are :  </Text>
        <CollapseRules/>

    </div>
  );
}