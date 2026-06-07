import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

function CinematicLayer() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const particlesRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const width = window.innerWidth
    const height = window.innerHeight
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 100
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create particles (warm orange + white glow)
    const particleCount = 150
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 400 // x
      positions[i + 1] = (Math.random() - 0.5) * 400 // y
      positions[i + 2] = (Math.random() - 0.5) * 200 // z

      velocities[i] = (Math.random() - 0.5) * 0.5 // x velocity
      velocities[i + 1] = (Math.random() - 0.5) * 0.5 // y velocity
      velocities[i + 2] = (Math.random() - 0.5) * 0.3 // z velocity
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

    // Material with additive blending
    const material = new THREE.PointsMaterial({
      color: 0xff9500,
      size: 8,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      emissive: 0xff9500,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Mouse move handler
    const handleMouseMove = (e) => {
      targetMouseRef.current.x = (e.clientX / width) * 2 - 1
      targetMouseRef.current.y = -(e.clientY / height) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth mouse follow
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05

      // Camera parallax
      camera.position.x = mouseRef.current.x * 20
      camera.position.y = mouseRef.current.y * 20

      // Animate particles
      const positions = geometry.attributes.position.array
      const velocity = geometry.attributes.velocity.array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocity[i]
        positions[i + 1] += velocity[i + 1]
        positions[i + 2] += velocity[i + 2]

        // Sine wave oscillation for floating effect
        positions[i + 1] += Math.sin(Date.now() * 0.0003 + i) * 0.1

        // Wrap around
        if (Math.abs(positions[i]) > 250) velocity[i] *= -1
        if (Math.abs(positions[i + 1]) > 250) velocity[i + 1] *= -1
        if (Math.abs(positions[i + 2]) > 250) velocity[i + 2] *= -1
      }

      geometry.attributes.position.needsUpdate = true

      // Rotate particles
      particles.rotation.x += 0.0001
      particles.rotation.y += 0.0002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

export default CinematicLayer
