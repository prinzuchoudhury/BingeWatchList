import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { MeshWobbleMaterial, Text } from 'drei'

const xmax = 1.2;
const xmin = 0.35;
const x= Math.floor(Math.random() * (xmax - xmin) ) + xmin;
const movies=  [ "The Imitation Game", "Inception", "Hera Pheri", "The Pursuit of Happyness", "Never Back Down", "Masaan", "21 Again", "The Irishman", "Shagird", "Forrest Gump", "Fury", "The Trueman Show"]
const pos = [[9,4,4], [8, 1,4], [5,-1,2], [-2,-1,4], [-9,4,4], [-8,2,5], [-6,-4,4], [-9,0,2], [8,-4,2], [0,-4,5], [-9,-3,5], [8,-1,5]]
const color = ['#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#33991A', '#CC9999', '#B3B31A', '#66E64D', '#4D80CC']
function Font({ movie, position, color}) {
  return (
    <Text
      glyphGeometryDetail={32}
      font="https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf8.woff"
      fontSize={0.6}
      letterSpacing={-0.075}
      lineHeight={0.8}
      position={position}>
      {movie}
      <MeshWobbleMaterial attach="material" color={color} factor={x} />
    </Text>
  )
}

function Shapes() {
  return (
    <>
      {movies.map((movieName, index) => {
          return ( <Font movie={movieName} position={pos[index]}  color={color[index]}/> );
        })}
    </>
  )
}

function BackGround() {
  return (
    <div className="background">
      <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 12] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Shapes />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default BackGround;