import classes from './_featured-posts.module.scss'
import PostsGrid from '../posts/posts-grid/PostsGrid'

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts}/>
    </section>
  )
}
export default FeaturedPosts