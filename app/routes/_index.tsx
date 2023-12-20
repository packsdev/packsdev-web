import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'packs.dev' },
    { name: 'description', content: 'Welcome to packs.dev!' },
  ]
}

export default function Index() {
  return (
    <div>
      <div className="flex items-baseline gap-8 bg-blue-300 p-8">
        <h1 className="text-5xl font-bold">Welcome to packs.dev</h1>
      </div>
    </div>
  )
}
