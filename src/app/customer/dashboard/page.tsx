import { foodItems } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Menu</h1>
        <Button>View Cart</Button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="relative h-40 w-full mb-4">
                <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
