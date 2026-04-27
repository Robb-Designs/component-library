import type { ProductDisplayProps } from "../../types";

function ProductDisplay({
	product,
	showDescription,
	showStockStatus,
	onAddToCart,
	children,
}: ProductDisplayProps) {
	return (
		<div
			className="w-80 rounded-2xl border border-(--border) bg-(--bg) p-6"
			style={{ boxShadow: "var(--shadow)" }}
		>
			{product.imageUrl && (
				<img
					src={product.imageUrl}
					alt={product.name}
					className="mb-4 h-40 w-full rounded-lg object-cover"
				/>
			)}

			<h2 className="text-lg font-semibold text-(--text-h)">{product.name}</h2>
			<p className="mt-1 text-base font-medium text-(--text-h)">
				${product.price.toFixed(2)}
			</p>

			{showDescription && (
				<p className="mt-3 text-sm leading-6 text-(--text)">
					{product.description}
				</p>
			)}

			{showStockStatus && (
				<p
					className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
						product.inStock
							? "bg-emerald-100 text-emerald-800"
							: "bg-rose-100 text-rose-800"
					}`}
				>
					{product.inStock ? "In stock" : "Out of stock"}
				</p>
			)}

			{onAddToCart && (
				<button
					onClick={() => onAddToCart(product.id)}
					className="mt-4 w-full rounded-lg bg-(--accent) py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
					disabled={!product.inStock}
				>
					Add to cart
				</button>
			)}

			{children}
		</div>
	);
}


export default ProductDisplay;

