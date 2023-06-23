import TaskList from './components/TastkList';
import TaskForm from './components/TaskForm';

function App() {

  return (
    <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto">
          <TaskForm />
          <TaskList />
        </div>
    </main>
  )
}

export default App