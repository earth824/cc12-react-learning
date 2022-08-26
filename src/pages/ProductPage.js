import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

function ProductPage() {
  const params = useParams();
  console.log(params);

  // useEffect(() => {
  //   axios.get('/products/'+params.productId).then(res => {
  //     setProduct(res.data.product)
  //   })
  // }, [])

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Product Id: {params.productId}</h2>
    </div>
  );
}

export default ProductPage;
