import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../api/productsApi";

export default function Products() {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (products) => products.sort((a, b) => b.id - a.id),
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const handleDelete = (id) => {
    deleteProductMutation.mutate(id);
  };

  const handleCheckItem = (product, checkedTarget) => {
    updateProductMutation.mutate({
      ...product,
      inStock: checkedTarget,
    });
  };
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  // JSX // ----------------------------------------------------
  return data.map((product) => (
    <div key={product.id}>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <input
        onChange={(e) => handleCheckItem(product, e.target.checked)}
        checked={product.inStock}
        type="checkbox"
        name="checked"
        id="checked"
      />
      <button onClick={() => handleDelete(product.id)}>Delete</button>
    </div>
  ));
}
