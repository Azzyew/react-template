import { Outlet, createFileRoute } from '@tanstack/react-router'
import Sidebar from '@/components/sidebar';

export const Route = createFileRoute('/app')({
  component: AppLayout,
})

function AppLayout() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}
