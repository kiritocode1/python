
import "./style.css"
import { Image, Text } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

export default function App() {
  return (
    <div className='w-full flex items-center justify-evenly my-20 gap-4 flex-col'>
      <Image src="https://c.tenor.com/qnp4xGGoC44AAAAC/cute-awe.gif" width={450} />
      <Text h1 size={60} css={{ textGradient: "45deg ,$green50 -30% , $green600 90%" }} >Blog #2 Python:Basics 🐍  </Text>
      <Text color="$green800" >Hello World , its me Aryan back with another blog about basics of Python 🐍 Programming language , <br />now this might be blog 2 but cannonically this is the first blog im writing ,<br /> this blog is beginners friendly 😊 and anyone can read this blog to understand a lot about <br /> python as a programming language . <br /> in the future 🚀 blog we'll cover python with data science    </Text>
      <div className="w-96 flex flex-col">
        <Text h4 color="$green800" weight={70}>Reader Level : 🐣 </Text>
        <Progress value={5} shadow color="success" status="success"  size="xl"/>
      </div>
      <Text h1 size={69} color="$green800">Work In Progress 💀</Text>
    </div>
  );
}
