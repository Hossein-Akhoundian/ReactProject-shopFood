const productList = [
  {
    id: '1',
    title: 'مرغ',
    price: 90,
    image: '/images/product.jpg'
  },
  {
    id: '2',
    title: 'خورشت فسنجان',
    price: 250,
    image: '/images/Fesenjoun.jpg'
  },
  {
    id: '3',
    title: 'کباب',
    price: 200,
    image: '/images/kebab.jpg'
  },
  {
    id: '4',
    title: 'قرمه سبزی',
    price: 60,
    image: '/images/sabzi.jpg'
  },
  {
    id: '5',
    title: 'خورشت قیمه',
    price: 60,
    image: '/images/gheymeh.jpg'
  },
  {
    id: '6',
    title: 'جوجه کبابی',
    price: 100,
    image: '/images/product2.jpg'
  },
  {
    id: '7',
    title: 'سبزی پلو با ماهی',
    price: 99,
    image: '/images/sabzi-rice.jpg'
  },
  {
    id: '8',
    title: 'ته چین',
    price: 110,
    image: '/images/tahchin.jpg'
  },
]

function getProductData(id){
  let producData = productList.find((item) => item.id === id);
  return producData;
}

export {productList, getProductData}