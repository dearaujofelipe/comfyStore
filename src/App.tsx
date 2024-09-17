import { Button } from '@/components/ui/button';
import { useAppSelector } from './hooks';
import { HomeLayout } from './pages';
import { Landing } from './pages';
import { SingleProduct } from './pages';
import { Products } from './pages';
import { Cart } from './pages';
import { Error } from './pages';
import { About } from './pages';
import { Login } from './pages';
import { Register } from './pages';
import { Checkout } from './pages';
import { Orders } from './pages';

export default function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return (
    <>
      <h1 className="text-7xl font-bold">App</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log('it worked')}
      >
        click me
      </Button>
    </>
  );
}
