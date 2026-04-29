import icon from "../assets/Nadia_Photo.jpg";


function Home() {
  return (
  <div>
    <h1>Welcome to my Portfolio</h1>
    <h2>I'm Nadia Lee</h2>
    <img className="icon" src={icon} alt="Nadia Lee" />
    <p>I am a Digital Media Web Design student currently attending the University of Central Florida.</p>
    <p>This website shows the projects I have made throughout my time there so far.</p>
  </div>
  );
}
export default Home;