import React from 'react'
import ContentItem from './content.item'
import { IPostMaterialView } from '@/core/types/post.type'


interface IPostContentRoot {
  materials: IPostMaterialView[]
}

function PostContentRoot(props: IPostContentRoot) {

  const { materials } = props;

  return (
    <div className="mx-auto w-full max-w-4xl px-5">
      {
        materials.map((item: IPostMaterialView, index) => (
          <ContentItem key={item.slug || index} material={item} />
        ))
      }
    </div>
  )
}

export default PostContentRoot
