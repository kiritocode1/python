
import React from 'react'
import { Text, Collapse, Card } from '@nextui-org/react'
const CollapseRules = () => {
  return (
     <Collapse.Group accordion={false}>
      <Collapse title="No Brackets & semi colon">
              <Text className='flex items-center justify-start flex-col  gap-2'>
                  <div className='flex items-center gap-2'>Python  Intrestingly Does not use
                  <Text blockquote color='$green700'>{'{\t}'}</Text></div>
                
                  <Text>to define Scope of the code , meaning  just by looking at the code , looking for brackets wont work any more . 
                    python made a work-around using <Text className="font-bold font-mono">INDENTATION STYLE </Text>
                      a style of coding in which the spaces and the tabs make actual changes in the code and means something. Lets see how this changes  . 
                      
                  </Text>
                  <Card isHoverable isPressable >
                      <Card.Header>
                          <Text color='$green600'>Python_code.py </Text>
                      </Card.Header>
                      <Card.Divider></Card.Divider>
                      <Card.Body>
              <Text className='flex'> <pre>
                <span className='flex items-center gap-2'><Text h6 color='$purple600'>def</Text>learn():</span>
                &emsp;&emsp;&emsp; print(<b className='text-[#fe661f]'>'Hello world'</b>)
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
      </Collapse>
      <Collapse title="Option B">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Collapse title="Option C">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
    </Collapse.Group>
  )
}

export default CollapseRules; 