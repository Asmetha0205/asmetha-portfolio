import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // On mobile (narrow viewport) reduce visual weight so it doesn't
    // compete with the text. We halve particle count and lower opacity.
    const isMobile = window.innerWidth < 768

    const width  = mount.clientWidth
    const height = mount.clientHeight

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
    mount.appendChild(renderer.domElement)

    // Wireframe icosahedron — the signature visual motif
    const geometry = new THREE.IcosahedronGeometry(3, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.18 : 0.35,
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.1 : 0.2,
    })
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(1.9, 0), innerMaterial)
    scene.add(inner)

    // Particle field — halved on mobile for performance & visual clarity
    const particleCount = isMobile ? 100 : 220
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const radius = 4.5 + Math.random() * 3.5
      const theta  = Math.random() * Math.PI * 2
      const phi    = Math.acos(2 * Math.random() - 1)
      positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.035,
      transparent: true,
      opacity: isMobile ? 0.3 : 0.6,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Mouse tracking — disabled on touch devices
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    if (!isMobile) window.addEventListener('mousemove', onMouseMove)

    let frameId
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      icosahedron.rotation.x = t * 0.08 + mouseY * 0.3
      icosahedron.rotation.y = t * 0.12 + mouseX * 0.3
      inner.rotation.x       = -t * 0.1
      inner.rotation.y       =  t * 0.09
      particles.rotation.y   =  t * 0.02

      if (!isMobile) {
        camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.03
        camera.position.y += (-mouseY * 0.6 - camera.position.y) * 0.03
      }
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      inner.geometry.dispose()
      innerMaterial.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
}
