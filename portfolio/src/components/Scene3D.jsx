import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../theme.jsx'

function ParticleField({ color, count = 2200 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // uniform-ish distribution inside a sphere shell
      const r = 4.5 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.045
    ref.current.rotation.x += delta * 0.012
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  )
}

function MorphingBlob({ primary, secondary, dark }) {
  const group = useRef()
  const mouse = useRef(new THREE.Vector2(0, 0))

  useFrame((state, delta) => {
    if (!group.current) return
    mouse.current.lerp(state.pointer, 0.06)
    group.current.rotation.y = mouse.current.x * 0.45 + state.clock.elapsedTime * 0.08
    group.current.rotation.x = -mouse.current.y * 0.35
  })

  return (
    <group ref={group} position={[2.6, 0.4, 0]}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
        <mesh>
          <icosahedronGeometry args={[1.55, 24]} />
          <MeshDistortMaterial
            color={primary}
            distort={0.42}
            speed={2.2}
            roughness={0.15}
            metalness={0.75}
            emissive={primary}
            emissiveIntensity={dark ? 0.28 : 0.06}
          />
        </mesh>
        <mesh scale={1.55}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshBasicMaterial color={secondary} wireframe transparent opacity={dark ? 0.14 : 0.2} />
        </mesh>
      </Float>
      <Float speed={2.4} rotationIntensity={1.4} floatIntensity={2}>
        <mesh position={[-1.9, 1.5, -1]}>
          <torusGeometry args={[0.42, 0.14, 24, 64]} />
          <meshStandardMaterial color={secondary} roughness={0.2} metalness={0.85} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.8} floatIntensity={1.6}>
        <mesh position={[-1.2, -1.7, -0.6]} rotation={[0.4, 0.6, 0]}>
          <octahedronGeometry args={[0.36, 0]} />
          <meshStandardMaterial color={primary} roughness={0.25} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

function ParallaxRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.5, 0.04)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.3, 0.04)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene3D() {
  const { accent, mode } = useTheme()
  const dark = mode === 'dark'

  return (
    <Canvas
      className="hero-canvas-inner"
      camera={{ position: [0, 0, 7.5], fov: 48 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={dark ? 0.35 : 0.8} />
      <directionalLight position={[4, 6, 5]} intensity={dark ? 1.4 : 1.8} color="#ffffff" />
      <pointLight position={[-5, -3, 2]} intensity={dark ? 6 : 3} color={accent.secondary} />
      <pointLight position={[5, 3, 4]} intensity={dark ? 5 : 2.5} color={accent.primary} />
      <ParticleField color={accent.primary} />
      <MorphingBlob primary={accent.primary} secondary={accent.secondary} dark={dark} />
      <ParallaxRig />
    </Canvas>
  )
}
