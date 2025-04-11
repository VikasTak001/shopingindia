import React, { useState } from 'react'
import Filter from '../Common/Filter'
import Products from '../Common/Products'
import { useParams } from 'react-router-dom';

export default function Shop() {
  const { slug } = useParams();
  const [FilterData, setFilterData] = useState({ rating: 1, priceFrom: 0, priceTo: 1000});
  return (
    <>
      <div className="grid-cols-6 grid">
        <Filter linkSlug={slug} FilterData={FilterData} setFilterData={setFilterData}/>
        <Products slug={slug} FilterData={FilterData}/>
      </div>
    </>
  )
}
