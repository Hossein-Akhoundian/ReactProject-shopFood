import {Row, Col} from 'react-bootstrap';

import Productitem from '../components/Productitem';
import { productList } from '../data/items';

function Shop(){
  return(
    <Row xs={1} md={4} className='g-4'>
      {productList.map((item) =>(
        <Col align='center'>
          <Productitem product={item} key={item.id}/>
        </Col>
      ))}
    </Row>
  )
}

export default Shop;