import React, { useState } from 'react'
import Filter from '../Common/Filter'
import Products from '../Common/Products'
import { useParams } from 'react-router-dom';

export default function Shop() {
  const { slug } = useParams();
  const [FilterData, setFilterData] = useState({ rating: 1, priceFrom: 0, priceTo: 1000});
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="grid-cols-6 grid">
        <Filter linkSlug={slug} FilterData={FilterData} setFilterData={setFilterData} loading={loading} setLoading={setLoading}/>
        <Products slug={slug} FilterData={FilterData} loading={loading} setLoading={setLoading}/>
      </div>
    </>
  )
}
