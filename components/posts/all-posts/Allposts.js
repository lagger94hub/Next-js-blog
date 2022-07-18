import PostsGrid from "../posts-grid/PostsGrid"
import classes from './_all-posts.module.scss'
const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts}/>
    </section>
  )
}
export default AllPosts