interface Category {
  name: string;
  image: string;
}

interface FoodCategoryProps {
  categories: Category[];
}

export default function FoodCategory({ categories }: FoodCategoryProps) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">What's on your mind?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer transition-transform hover:scale-105"
          >
            <div className="aspect-square rounded-full overflow-hidden mb-2">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <p className="text-center text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 