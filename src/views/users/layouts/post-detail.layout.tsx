import { IDataPosts } from '@afx/interfaces/main/post.iface'
import { Divider, Flex, Skeleton } from 'antd'

interface IPostDetailLayout {
  data: Array<IDataPosts>
  LOADINGS: boolean
}

export default function PostDetailLayout(props: IPostDetailLayout) {
  return (
    <Flex gap={24} vertical>
      {!props.LOADINGS &&
        props.data.map(a => (
          <Flex key={a.id} className="p-2" vertical gap={2}>
            <p className="font-semibold">{a.title}</p>
            <Divider className="!my-0" />
            <div dangerouslySetInnerHTML={{ __html: a.body }} />
          </Flex>
        ))}
      {props.LOADINGS && <Skeleton active />}
    </Flex>
  )
}
