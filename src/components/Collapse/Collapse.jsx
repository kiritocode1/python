
import React from 'react'
import { Text, Collapse } from '@nextui-org/react'
const CollapseRules = () => {
  return (
     <Collapse.Group accordion={false}>
      <Collapse title="No Brackets">
              <Text className='flex items-center justify-start flex-col  gap-2'>
                  <div className='flex items-center gap-2'>Python  Intrestingly Does not use
                  <Text blockquote color='$green700'>{'{\t}'}</Text></div>
                
                  <Text>to define Scope of the code , meaning  just by looking at the code , looking for brackets wont work any more . 
                    python made a work-around using <Text className="font-bold font-mono">INDENTATION STYLE </Text>
                      a style of coding in which the spaces and the tabs make actual changes in the code and means something. We'll talk more about this when we write the code with indentation.
                  </Text>
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