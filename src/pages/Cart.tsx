import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to="/" className="text-7xl text-red-400">
        back home
      </Link>
      <Button asChild size="lg">
        <Link to="/">home buttom</Link>
      </Button>
    </div>
  );
}
