
import React from 'react'
import { Text, Collapse, Card , Switch , Link } from '@nextui-org/react'; 



import {FaBrain , FaGlobeAfrica} from "react-icons/fa" ; 
import {TbBraces} from "react-icons/tb" ; 
import { SlLike } from "react-icons/sl"; 




const CollapseRules = () => {
  return (
     <Collapse.Group accordion={false} bordered>
      <Collapse title="No Brackets" arrowIcon={<TbBraces/>}>
              <Text className='flex items-center justify-start flex-col  gap-2'>
                  <div className='flex items-center gap-2'>Python  Intrestingly Does not use
                  <Text blockquote color='$green700'>{'{\t}'}</Text></div>
                
                  <Text>to define Scope of the code , meaning  just by looking at the code , looking for brackets wont work any more . 
                    python made a work-around using <Text className="font-bold font-mono">INDENTATION STYLE </Text>
                      a style of coding in which the spaces and the tabs make actual changes in the code and means something. lets see this with an example  
                      
                  </Text>
                  <Card isHoverable isPressable >
                      <Card.Header>
                          <Text color='$green600'>Python_code.py </Text>
                      </Card.Header>
                      <Card.Divider></Card.Divider>
                      <Card.Body>
              <Text className='flex'> <pre>
                <span className='flex items-center gap-2'><Text h6 color='$purple600'>def</Text>learn():</span>
                &emsp;&emsp;&emsp; print(<b className='text-[#fe661f]'>"Hello world"</b>)
                <Text h6 color="$gray600" ># this is a comment! 💻 ignores these</Text>
                <br />
                <br/>
                              <span className='flex '>
                              while <Text h6 color='$yellow700'>True</Text>:</span> 
                &emsp;&emsp;&emsp;learn() 
                <Text h6 color="$gray600"># Look noo brackets in code. wow 🤩</Text>
                <Text h6 color="$gray600"># We focus more on the spaces between </Text>

              </pre> </Text>
                      </Card.Body>
                      
                  </Card>
        </Text>
        <Text h6 className='mt-2' > This is a simple example of a code written in python . If youre new to programming and this is very difficult to understand ,  <strong className='font-serif text-yellow-400'>Dont worry!</strong>  we will cover all parts of this code in the future where I'll teach it in a way that  these concepts feel natural . For now essentially all this code  is doing is printing <strong className='text-[#fe661f] font-medium '>"hello world"</strong> constantly. <br />
          All im asking you to do is get familliar to how easy to read and write this program is compared to other languages . 😊 so beautiful and soo elegant way to express complex thoughts . <br />
          the absense of brackets and other syntax  makes python a great starting language to learn  programming with.

          
        </Text>
      </Collapse>



      <Collapse title="Simple by Design" arrowIcon={<SlLike/>}>
        <Text >
          the main design philosophy in python is to not care about the speed but the Simplicity to write the code  , its almost  <b className="tic-tock my-2">Criminal</b> . Python does not want you to care about the hardware and underlying physical processes like pointers and garbage collection  .
          which im sure if you learn C language , you'll understand is such an amazing feature of the python . <br />
          what do you say ? do you prefer <b>Control</b> over this seemingly important aspect of program or would you prefer let python handle them . 
          <br />
          <b className='flex items-center gap-1 flex-wrap' >Personally I would prefer python's ways coz i just want to turn of my brain <Switch
          checked={false}
          size="md"
          color="error"
            icon={<FaBrain />}
            shadow
          />
          and let python handle these stuff 😭.
          </b>
          
        </Text>






      </Collapse>
      <Collapse title="Huge Community" arrowIcon={<FaGlobeAfrica/>}>
        <Text className='flex flex-wrap items-center '>
          Python Has Unsurprisingly Huge Community of developers who build modules , tools and products . Like <Link block color="warning" href="https://www.tensorflow.org/" target="_blank" rel='noreferrer'>Tensorflow</Link> , 
          <Link block color="success" href="https://www.selenium.dev/" target="_blank" rel='noreferrer'>Selenium</Link> 
          Soo many amazing projects . You will thrive in this community and will make a lot of money as well . its the language of AI , and AI is the Shiny new future 😄 . 
        </Text>
      </Collapse>
    </Collapse.Group>
  )
}

export default CollapseRules; 