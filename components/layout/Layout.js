import Nav from "./nav/Nav"
const Layout = (props) => {
  return (
    <>
      <Nav />
      <main>
        {props.children}
      </main>
    </>
  )
}
export default Layout