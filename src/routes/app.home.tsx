import { createFileRoute } from '@tanstack/react-router'
import { Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useCounter } from '@/stores/use-counter'

export const Route = createFileRoute('/app/home')({
  component: App,
})

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="text-center w-full">
      <header className="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-slate-950 dark:text-white dark:bg-slate-800">
        <div className='space-x-5'>
          <button
            onClick={decrement}
            className='border-2 border-lime-500 rounded-2xl p-4 cursor-pointer'
          >
            <Minus color='#7ccf00'/>
          </button>
          <span className='text-4xl'>{count}</span>
          <button
            onClick={increment}
            className='border-2 border-lime-500 rounded-2xl p-4 cursor-pointer'
          >
            <Plus color='#7ccf00'/>
          </button>
        </div>
        <button onClick={() => toast("Teste de toast")}>teste toast</button>
      </header>
    </div>
  )
}
