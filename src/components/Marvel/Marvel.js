import classes from "./Marvel.module.css";
import groot from "../../images/groot.jfif"
import deadpool from "../../images/deadpool.jfif"
import spyder from "../../images/spyder.jfif"
import blackspyder from "../../images/blackspyder.jfif"
import antman from "../../images/ant.jpg"
import hulk from "../../images/hulk.jpg"
import ds from "../../images/ds.jpg"






const About = () => {
  return (<div className={classes.About}>
    <div className={classes.header}>
      MARVEL
  </div>
    <div className={classes.cards}>
      <div className={classes.groot}>
        <img src={groot} alt="Groot" />
        <div className={classes.heading}>
          "I am Groot..."
          </div>
        <p>The last surviving member of a tree-like alien race, Groot is perhaps one of the most unusual beings in all the cosmos. Though calm and quiet in most instances, he is known to unleash his tremendous strength on any enemy foolish enough to threaten his allies, particularly his long- time partner in crime, Rocket. Though he can only vocalize using the phrase, “I am Groot,” the gentle giant’s friends are nevertheless able to understand his exact meaning through his subtle inflections.</p>
      </div>

      <div className={classes.deadpool}>
        <img src={deadpool} alt="Deadpool" />

        <div className={classes.heading}>
          Deadpool
     </div>
        <p>Deadpool is aware that he is a fictional comic book character. He commonly breaks the fourth wall, which is done by few other characters in the Marvel Universe, and this is used to humorous effect. ... The character, known for his talkative nature, has been nicknamed the "Merc with a Mouth". Deadpool's humor and self-awareness are what make the character unique.</p>
      </div>
      <div className={classes.Wolverine}>
        <img src={spyder} alt="Wolverine" />  <div className={classes.heading}>Wolverine</div>
        <p>He is a mutant who possesses animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand. Wolverine has been depicted variously as a member of the X-Men, Alpha Flight, and the Avengers.</p>
      </div>
      <div className={classes.spider_man}>
        <img src={blackspyder} alt="Spyder-Man" />  <div className={classes.heading}> Spider-Man</div>
        <p>The bite from a radioactive spider granted Peter Parker amazing arachnid-like powers. After losing his beloved Uncle Ben to a burglar, grief- stricken Peter vowed to use his incredible abilities to protect his city as the Amazing Spider-Man. Peter’s trials taught him an invaluable lesson: with great power, there must also come great responsibility.</p>
      </div>
      <div className={classes.ant_man}>
        <img src={antman} alt="Ant-Man" />
        <div className={classes.heading}>Ant Man</div>
        <p>Former thief Scott Lang once stole an advanced size-altering suit in order to aid his ailing daughter, only to discover that the stolen tech belonged to the world-renowned Dr. Hank Pym. Seeing the heroic potential within him, Dr. Pym allowed Scott to continue using the suit, as well as the identity Pym once battled evil under. As the Astonishing Ant-Man, Scott now handles the jobs "too small" for any other Super Hero.</p>
      </div>
      <div className={classes.hulk}>
        <img src={hulk} alt="Hulk" />
        <div className={classes.heading}>Hulk</div>
        <p>The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist. The two exist as independent dissociative personalities, and resent each other.</p>
      </div>
      <div className={classes.ds}>
        <img src={ds} alt="Doctor Strange" />
        <div className={classes.heading}>Doctor Stephen Strange</div>
        <p>Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.</p>
      </div>
     


    </div>





  </div>);
}

export default About;