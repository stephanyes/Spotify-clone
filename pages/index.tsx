import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="blue"
      subtitle="profile"
      title="Stephano Oui"
      description="15 public playlists"
      image="https://frontendmasters.github.io/fullstack-app-next-website/images/profile.png"
    >
      <div>home</div>
    </GradientLayout>
  );
};

export default Home;
