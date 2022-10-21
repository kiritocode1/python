
import "./style.css"

import { Card, Checkbox, Image, Text } from "@nextui-org/react";
import { Progress  , Link} from "@nextui-org/react";
import { DiPython } from "react-icons/di";
import exeimg from "./Images/saveas.png"
import chart from "./Images/chart.svg"; 
import CollapseRules from "./components/Collapse/Collapse";
import add_to_path from "./Images/add_to_path.png"; 
import { RiSkullFill } from "react-icons/ri"; 
import ParticleImage, {forces , Vector } from "react-particle-image";
const src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png";

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
      <CollapseRules />
        <Text h4>  </Text>

      <Text h1 color="$red600" className="mt-8">Installation : </Text>
                        <div className='flex items-center gap-2 flex-wrap'>1. Go to 
        <Link block color="success" href="https://www.python.org/downloads/" target="_blank" rel='noreferrer' >python.org/downloads</Link> and press <Text blockquote color="$yellow700" >Download python</Text> button.</div>
      <Text className="flex items-center gap-1 flex-wrap">2. Save python anywhere you want!  once you do youll get an  <Image src={exeimg} autoResize /> file , go ahead and click on it . </Text>
      <Text className="flex items-center gap-1 my-10 flex-wrap justify-start">3. what youll get is a python setup wizard , go ahead and select <i className="text-green-600 flex flex-wrap">add python to path</i>, then press <b className="text-green-600 flex flex-wrap">Install Now</b> option .  </Text>
      <Card isHoverable  >
        <Card.Body >
          
          
          <Text  className="flex  items-center gap-1 flex-wrap" ><RiSkullFill className="text-3xl text-red-600 "/> <b>IMPORTANT:</b> Make Sure you <Checkbox defaultSelected={true} size="sm" isRounded={true} color="error"></Checkbox> add to path option !!!</Text>
        </Card.Body>
      </Card>
      <Image src={add_to_path} alt="Image depicting add to path" />
      <Text h3> Congratulations !! , now you can run python , here have a treat 😃 . im soo proud of you </Text>
      <div className="w-full overflow-hidden flex items-center h-60">
      <ParticleImage
        scale={0.3}
        maxParticles={2000}
        backgroundColor="#000"
        src={src}
        mouseMoveForce={(x, y) => forces.disturbance(x, y, 60)}
        touchMoveForce={(x, y) => forces.disturbance(x, y, 60)}
        mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
        particleOptions={{
          mass: () => 40,
          filter: ({ x, y, image }) => {
            const pixel = image.get(x, y);
            return pixel.r === 255;
          },
          color: () => "#FF0000",
          friction: () => 0.10,
          initialPosition: ({ canvasDimensions }) => {
            return new Vector(
              canvasDimensions.width / 9,
              canvasDimensions.height / 2
            );
          }
        }}
      /></div>
            <Text h1 color="$yellow600">Hello world (first program) </Text>
      <Text h6>now Its finally 🕐 time for our first program .
      a simple program which prints out hello world 
      
      </Text>
    </div>
  );
}