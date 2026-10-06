import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY })
    const enter = () => setActive(true)
    const leave = () => setActive(false)
    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseenter', enter)
      element.addEventListener('mouseleave', leave)
    })
    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseenter', enter)
        element.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return <div className={`custom-cursor ${active ? 'is-active' : ''}`} style={{ left: position.x, top: position.y }}><span>{active ? 'ENTRAR' : ''}</span></div>
}
