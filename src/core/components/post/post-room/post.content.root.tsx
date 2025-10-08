import React from 'react'
import ContentItem from './content.item'
import { IPostLessonView } from '@/core/types/post.type'


interface IPostContentRoot {
  materials: IPostLessonView[]
}

function PostContentRoot(props: IPostContentRoot) {

  const { materials } = props;

  return (
    <div className="mx-auto w-full max-w-4xl px-5">
      {
        materials.map((item: IPostLessonView, index) => (
          <ContentItem key={item.slug || index} material={item} />
        ))
      }
    </div>
  )
}

export default PostContentRoot
