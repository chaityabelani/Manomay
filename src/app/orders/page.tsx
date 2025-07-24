'use client';

// import Navbar from '@/components/Navbar';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  restaurantName: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'preparing' | 'on_the_way' | 'delivered';
  orderDate: string;
}

// Sample orders data - Replace with actual API call
const orders: Order[] = [
  {
    id: '1',
    restaurantName: 'Pizza Paradise',
    items: [
      { id: '1', name: 'Margherita Pizza', quantity: 1, price: 299 },
      { id: '2', name: 'Garlic Bread', quantity: 2, price: 149 },
    ],
    total: 597,
    status: 'delivered',
    orderDate: '2024-03-15T14:30:00Z',
  },
  {
    id: '2',
    restaurantName: 'Burger Boulevard',
    items: [
      { id: '3', name: 'Classic Burger', quantity: 2, price: 199 },
      { id: '4', name: 'French Fries', quantity: 1, price: 99 },
    ],
    total: 497,
    status: 'on_the_way',
    orderDate: '2024-03-15T16:45:00Z',
  },
];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'preparing':
      return 'bg-blue-100 text-blue-800';
    case 'on_the_way':
      return 'bg-purple-100 text-purple-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
  }
};

const getStatusText = (status: Order['status']) => {
  switch (status) {
    case 'pending':
      return 'Order Placed';
    case 'preparing':
      return 'Preparing';
    case 'on_the_way':
      return 'On the Way';
    case 'delivered':
      return 'Delivered';
  }
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold">{order.restaurantName}</h2>
                      <p className="text-gray-600 text-sm">
                        {new Date(order.orderDate).toLocaleString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center text-sm"
                      >
                        <div className="flex items-center">
                          <span className="font-medium">{item.quantity}x</span>
                          <span className="ml-2">{item.name}</span>
                        </div>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{order.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 