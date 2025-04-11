import React from 'react'
import Filter from '../Common/Filter'
import Products from '../Common/Products'
import { useParams } from 'react-router-dom';

export default function Shop() {
  const {slug} = useParams();
  return (
    <>
      <div className="grid-cols-6 grid">
        <Filter linkSlug={slug}/>
        <Products slug={slug}/>
      </div>
    </>
  )
}
