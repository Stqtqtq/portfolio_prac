import './App.scss'
import Navbar from './components/Navbar'
import Typewriter from './components/Typewriter'
import Timeline from './components/Timeline'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import stars from './assets/stars.jpg'
import landscape from './assets/landscape.jpg'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Parallax pages={3}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}
        <ParallaxLayer
          className="stars"
          offset={0}
          speed={1}
          factor={2}
          // style={{
          //   backgroundImage: `url(${stars})`,
          //   backgroundSize: 'cover',
          // }}
        >
          <Typewriter />
        </ParallaxLayer>

        <ParallaxLayer
          className="landscape"
          offset={1}
          speed={1}
          factor={3}
          // style={{
          //   backgroundImage: `url(${landscape})`,
          //   backgroundSize: 'cover',
          // }}
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          {/* <img src={cat} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          // onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          // onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
