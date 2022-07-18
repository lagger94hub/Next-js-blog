import classes from './_hero.module.scss'
import Image from 'next/image';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/rami.jpg" alt="Image showing rami" width={300} height={300} />
      </div>
      <h1>Hi this is  Rami</h1>
      <p>I blog about web development </p>
    </section>
  );
};
export default Hero;
