import './Typewriter.scss'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Typewriter = () => {
  const [text] = useTypewriter({
    words: ['Programmer', 'Gamer'],
    loop: true,
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 2000,
  })

  return (
    <h1>
      I'm a <span>{text}</span>
      <span>
        <Cursor cursorStyle="|" />
      </span>
    </h1>
  )
}

export default Typewriter
