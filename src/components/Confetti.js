import React from 'react'
import styled from 'styled-components'
import Animated from 'animated/lib/targets/react-dom'
import throttle from 'lodash.throttle'
import { px2rem, colors, z } from '../constants'

const Plate = styled(Animated.div)`
  height: 100%;
`

const Transformation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: 1.3s transform;
  transition-timing-function: cubic-bezier(0.1, 0.9, 0, 1);
`
const Shape = styled.div`
  background-color: ${props => props.color || colors.green};
  transform: rotate(${props => props.rotate}deg) scale(${props => props.scale});
`
const Square = styled(Shape)`
  width: ${px2rem(40)};
  height: ${px2rem(40)};
`
const Circle = styled(Square)`
  border-radius: 50%;
`
const HalfCircle = styled(Circle)`
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
`

const Rectangle = styled(Shape)`
  width: ${px2rem(60)};
  height: ${px2rem(15)};
`

const springConfig = {
  bounciness: 120,
  speed: 5,
  // tension: number,
  // friction: number,
}

const allShapes = [Square, Circle, HalfCircle, Rectangle]
const allColors = [
  colors.green,
  colors.blue,
  colors.orange,
  colors.yellow,
  colors.pink,
]
const generateArrayOfLength = length => Array.from(new Array(length))
const pickRandomFromArray = array =>
  array[Math.round(Math.random() * (array.length - 1))]

class ConfettiBox extends React.Component {
  state = {
    shapes: [],
  }

  constructor(props) {
    super(props)

    this.rotateY = new Animated.Value(0.0001)
    this.rotateX = new Animated.Value(0.0001)
    this.rotateYInterpolate = this.rotateY.interpolate({
      inputRange: [-80, 80],
      outputRange: ['-10deg', '10deg'],
    })
    this.rotateXInterpolate = this.rotateX.interpolate({
      inputRange: [-80, 80],
      outputRange: ['-10deg', '10deg'],
    })

    this.onMouseMove = throttle(this.onMouseMove, 200).bind(this)
  }

  componentDidMount() {
    this.generateInitialShapes()
    this.updateShapes()

    this.addEventListeners()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.updateFrame)
    this.removeEventListeners()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ident !== nextProps) {
      this.updateShapes(200)
    }
  }

  addEventListeners() {
    document.body.addEventListener('mousemove', this.onMouseMove)
  }

  removeEventListeners() {
    document.body.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = ({ pageX, pageY }) => {
    if (this.onMouseMoveFrame) {
      cancelAnimationFrame(this.onMouseMoveFrame)
    }

    this.onMouseMoveFrame = requestAnimationFrame(() => {
      const bodyWidth = document.documentElement.clientWidth
      const bodyHeight = document.documentElement.clientHeight
      const rotateY = (pageX - bodyWidth / 2) * -0.1
      const rotateX = (Math.min(pageY, bodyHeight) - bodyHeight / 2) * 0.1

      Animated.spring(this.rotateX, {
        ...springConfig,
        toValue: rotateX,
      }).start()
      Animated.spring(this.rotateY, {
        ...springConfig,
        toValue: rotateY,
      }).start()
    })
  }

  getShapePositionProps() {
    return {
      rotate: Math.round(Math.random() * Math.PI * 180),
      z: Math.round(Math.random() * 180 - 90),
      opacity: Math.round(Math.random() * 2 + 8) / 10,
      left: Math.round(
        Math.random() * window.innerWidth * 1.5 - window.innerWidth / 4
      ),
      top: Math.round(Math.random() * window.innerHeight),
    }
  }

  generateInitialShapes() {
    const shapes = generateArrayOfLength(15).map(() => ({
      ...this.getShapePositionProps(),
      Component: pickRandomFromArray(allShapes),
      color: pickRandomFromArray(allColors),
      scale: Math.max(1, Math.round(Math.random() * 1.5)),
      opacity: Math.round(Math.random() * 2 + 8) / 10,
    }))

    this.setState({ shapes })
  }

  updateShapes = (amount = 80) => {
    cancelAnimationFrame(this.updateFrame)
    this.updateFrame = requestAnimationFrame(() => {
      const shapes = this.state.shapes.map(shape => ({
        ...shape,
        z: shape.z + Math.round(Math.random() * amount - amount / 2),
        scale: Math.min(
          1.5,
          Math.max(1, Math.round(shape.scale + Math.random() - 0.5))
        ),
        left: shape.left + Math.round(Math.random() * amount - amount / 2),
        top: shape.top + Math.round(Math.random() * amount - amount / 2),
      }))

      this.setState({ shapes })
    })
  }

  render() {
    const { className } = this.props
    const { shapes } = this.state

    return (
      <div className={className}>
        <Animated.div
          style={{
            transform: [
              {
                rotateY: this.rotateYInterpolate,
              },
              {
                rotateX: this.rotateXInterpolate,
              },
            ],
            height: '100%',
            transformStyle: 'preserve-3d',
          }}
        >
          {shapes.map(({ Component, ...props }, index) => (
            <Transformation
              style={{
                opacity: props.opacity,
                transform: `translate3d(${props.left}px, ${props.top}px, ${
                  props.z
                }px)`,
              }}
              key={index}
            >
              <Component {...props} />
            </Transformation>
          ))}
        </Animated.div>
      </div>
    )
  }
}

const Confetti = styled(ConfettiBox)`
  position: absolute;
  top: ${px2rem(-48)};
  right: 0;
  left: 0;
  height: 150vh;
  overflow: hidden;
  z-index: ${z.confetti};
  perspective: 3000px;
  transform: translateZ(-500px);
`

const skipOnSmallScreen = Component =>
  class extends React.Component {
    state = {
      yes: false,
    }

    componentDidMount() {
      if (window.innerWidth >= 786) {
        this.setState({
          yes: true,
        })
      }
    }

    render() {
      if (this.state.yes) {
        return <Component {...this.props} />
      }

      return null
    }
  }

export default skipOnSmallScreen(Confetti)
