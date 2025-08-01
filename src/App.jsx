import * as TbIcons from 'react-icons/tb'

import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/Testimonial'
import Tooltip from './components/Tooltip/Tooltip'
import Toast from './components/Toast/Toast'
import './style.css'
import './components/Badge/badge.css'
import './components/Banner/banner.css'
import './components/Card/card.css'
import TWI from './components/TWI/TWI'


function App() {


  return (
    <>
     <div className='badges-container'>
        <Badge color='gray'>hi there!</Badge>
        <Badge variant='square' color='red' />
        <Badge variant='square' color='yellow' />
        <Badge variant='square' color='green' />
        <Badge variant='square' color='blue' />
        <Badge variant='square' color='indigo' />
        <Badge variant='square' color='purple' />
        <Badge variant='square' color='pink' />

        <br />
        <br />

        <Badge variant='pill' color='gray'>hi there!</Badge>
        <Badge variant='pill' color='red' />
        <Badge variant='pill' color='yellow' />
        <Badge variant='pill' color='green' />
        <Badge variant='pill' color='blue' />
        <Badge variant='pill' color='indigo' />
        <Badge variant='pill' color='purple' />
        <Badge variant='pill' color='pink' />
     </div>

      <Banner variant="success" />
      <Banner variant="warning" />
      <Banner variant="error" />
      <Banner variant="neutral" />
      <Banner variant="success" title="this is custom title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <Banner variant="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>

      <br />
      <br />
      
      <Card title="this is custom title" icon="/src/components/Card/cardAssets/brand-icon2.png">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>

      <br />
      <br />

      <Testimonial 
      icon='/src/components/Testimonial/testimonialAssets/office-building2.png'
      name="Lior Elimelech"
      level='CEO'
      >
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
      </Testimonial>

      <br />
      <br />

      <TWI>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </TWI>
      <br />
      <br />
      <br />

      <div className='badges-container'>

        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='light-blue'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='blue'>Light Blue</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='dark-blue'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='indigo'>Dark Blue</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='light-green'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='green'>Light Green</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='dark-green'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='yellow'>Dark Green</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='light-pink'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='pink'>Light Pink</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='dark-pink'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='red'>Dark Pink</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='light'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge >Light color</Badge>
        </Tooltip>
        <Tooltip
        Icon={TbIcons['TbInbox']}
        title="Archive notes"
        color='dark'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.">
          <Badge color='purple'>Dark color</Badge>
        </Tooltip>
      </div>
      <br />
      <br />
      <Toast eventTrigger='click' variant='success' position='top-right'>
        <button>click for popup the toast</button>
      </Toast>
    </>
  )
}

export default App
