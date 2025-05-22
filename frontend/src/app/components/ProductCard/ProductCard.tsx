import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  price: number;
};

export default function ProductCard({ id, title, price, quantity }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <h4>{title}</h4>
      <p>${price}</p>
      <p>Quantity: ${quantity}</p>
      <Link href={`/products/${id}`}>View Details</Link>
    </div>
  );
}
