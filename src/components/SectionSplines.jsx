import Spline from '@splinetool/react-spline'

/*
  SectionSplines
  - Drop-in background accents: multiple mini Spline canvases placed around a section
  - Props:
    - scene (string): Spline scene URL
    - items (array): [{ top, left, right, bottom, size }] CSS positions in tailwind classes
*/
export default function SectionSplines({
  scene = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
  items = [
    { top: 'top-6', left: 'left-4', size: 'h-28 w-28' },
    { top: '1/2', left: 'left-1/2', size: 'h-40 w-40', center: true },
    { bottom: 'bottom-6', right: 'right-6', size: 'h-24 w-24' }
  ]
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible">
      {items.map((pos, idx) => (
        <div
          key={idx}
          className={[
            'absolute opacity-70 hover:opacity-100 transition-opacity duration-300',
            pos.top ? (pos.top.includes('/') ? `top-1/2 -translate-y-1/2` : pos.top) : '',
            pos.bottom || '',
            pos.left || '',
            pos.right || '',
            pos.size || 'h-28 w-28'
          ].join(' ')}
          style={{ filter: 'saturate(1.1)' }}
        >
          <div className="relative h-full w-full rounded-2xl ring-1 ring-black/10 shadow-sm shadow-black/10 overflow-hidden pointer-events-auto">
            <Spline scene={scene} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/60 mix-blend-luminosity" />
          </div>
        </div>
      ))}
    </div>
  )
}
