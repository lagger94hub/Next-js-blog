import classes from './_posts-grid.module.scss'
import PostItem from '../post-item/PostItem'
const PostsGrid = (props) => {
  const { posts } = props
  return (
    <ul className={classes.grid}>
      {posts.map((post) => <PostItem key={post.slug} post={post}/>)}
    </ul>
  )
}
export default PostsGrid