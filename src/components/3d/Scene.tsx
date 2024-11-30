'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { 
  OrbitControls, 
  PerspectiveCamera,
  Environment, 
  Float,
  useHelper,
  RoundedBox
} from '@react-three/drei'
import { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

function SmallCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [material, setMaterial] = useState<THREE.MeshPhysicalMaterial | null>(null)

  useEffect(() => {
    const createBlackGradientMaterial = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 256
      
      const context = canvas.getContext('2d')
      if (context) {
        const gradient = context.createLinearGradient(0, 0, 256, 256)
        gradient.addColorStop(0, '#000000')    // Pure black
        gradient.addColorStop(0.5, '#0a0a0a')  // Very dark gray
        gradient.addColorStop(1, '#1a1a1a')    // Slightly lighter black
        
        context.fillStyle = gradient
        context.fillRect(0, 0, 256, 256)
      }
      
      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      
      return new THREE.MeshPhysicalMaterial({
        metalness: 0.95,
        roughness: 0.05,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        reflectivity: 1.2,
        envMapIntensity: 2,
        map: texture
      })
    }

    setMaterial(createBlackGradientMaterial())
  }, [])

  if (!material) return null

  return (
    <RoundedBox
      ref={meshRef}
      args={[0.85, 0.85, 0.85]}
      radius={0.1}
      smoothness={4}
      position={position}
      castShadow
      receiveShadow
      material={material}
    />
  )
}

function RubiksCube() {
  const groupRef = useRef<THREE.Group>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame((state) => {
    if (!groupRef.current) return
    
    groupRef.current.rotation.y += 0.005
    
    const t = state.clock.getElapsedTime()
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.1
    
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1
    groupRef.current.rotation.z = Math.cos(t * 0.3) * 0.05

    const scale = isHovered ? 1.1 : 1
    groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
  })

  const positions: [number, number, number][] = []
  const size = 0.87
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        positions.push([x * size, y * size, z * size])
      }
    }
  }

  return (
    <group 
      ref={groupRef}
      position={[8, 0, 0]}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {positions.map((position, index) => (
        <SmallCube key={index} position={position} />
      ))}
    </group>
  )
}

function Lights() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null)
 

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
    </>
  )
}

function ThreeScene() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 0, 8]} />
        <Suspense fallback={null}>
          <RubiksCube />
          <Lights />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          target={[8, 0, 0]}
        />
      </Canvas>
    </div>
  )
}

const Scene = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <ThreeScene />
}

export default Scene
