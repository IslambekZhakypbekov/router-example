import classes from "./Contacts.module.css";
import batman from "../../images/unnamed.jpg"
import superman from "../../images/superman.png"
import ww from "../../images/ww.jpg"
import gl from "../../images/gl.jpg"
import cyborg from "../../images/cyborg.jpg"
import flash from "../../images/flash.jpg"


const Contacts = () => {
    return (<div className={classes.Contacts}>
        <div className={classes.header}>DC Comics</div>
        <div className={classes.cards}>
            <div className={classes.groot}>
                <img src={batman} alt="Batman" />
                <div className={classes.heading}>Batman</div>
                <p>Batman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises based in Gotham City. Kane, Finger, and future DC writers accompanied Batman with supporting characters, including his sidekick Robin, allies Alfred Pennyworth, James Gordon and Catwoman, and foes such as the Penguin, the Riddler, the Scarecrow, and his archenemy, the Joker. Batman's origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha; he trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night.</p>
            </div>

            <div className={classes.deadpool}>
                <img src={superman} alt="Superman" />

                <div className={classes.heading}>Superman</div>
                <p>Superman is a fictional superhero, who first appeared in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938). Superman has been adapted to a number of other media which includes radio serials, novels, movies, television shows and theatre.</p>
            </div>
            <div className={classes.Wolverine}>
                <img src={ww} alt="Wonder Women" />  <div className={classes.heading}>Wonder Woman
</div>
                <p>Wonder Woman is a fictional superheroine appearing in American comic books published by DC Comics.The character is a founding member of the Justice League. The character first appeared in All Star Comics #8 in October 1941 with her first feature in Sensation Comics #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously except for a brief hiatus in 1986. In her homeland, the island nation of Themyscira, her official title is Princess Diana of Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian identity Diana Prince.</p>
            </div>
            <div className={classes.spider_man}>
                <img src={gl} alt="Green Lantern" />  <div className={classes.heading}>Green Lantern</div>
                <p>Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics. They fight evil with the aid of rings that grant them a variety of extraordinary powers, all of which come from imagination and/or emotions.[citation needed] The characters are typically depicted as members of the Green Lantern Corps, an interstellar law enforcement agency.

The first Green Lantern character, Alan Scott, was created in 1940 by Martin Nodell during the Golden Age of Comic Books and usually fought common criminals in Capitol City (and later, Gotham City) with the aid of his magic ring. For the Silver Age of Comic Books, John Broome and Gil Kane reinvented the character as Hal Jordan in 1959 and shifted the focus of Green Lantern stories from fantasy to science fiction. Other notable Green Lanterns include Guy Gardner, John Stewart, Kyle Rayner, Simon Baz, and Jessica Cruz.</p>
            </div>
            <div className={classes.ant_man}>
                <img src={cyborg} alt="Cyborg" />
                <div className={classes.heading}>Cyborg</div>
                <p>Cyborg (Victor Stone) is a fictional superhero appearing in American comic books published by DC Comics. The character was created by writer Marv Wolfman and artist George Pérez and first appears in a special insert in DC Comics Presents #26 (October 1980). Originally known as a member of the Teen Titans, Cyborg was established as a founding member of the Justice League in DC's 2011 reboot of its comic book titles.

Lee Thompson Young portrayed Cyborg in the television series Smallville. Ray Fisher portrays the character in the DC Extended Universe films Batman v Superman: Dawn of Justice (2016), Justice League (2017) and Zack Snyder's Justice League (2021). Joivan Wade also portrays Cyborg in the Doom Patrol television series on DC Universe and HBO Max.</p>
            </div>
            <div className={classes.flash}>
                <img src={flash} alt="Flash" />
                <div className={classes.heading}>Flash</div>
                <p>The Flash (or simply Flash) is the name of several superheroes appearing in American comic books published by DC Comics. Created by writer Gardner Fox and artist Harry Lampert, the original Flash first appeared in Flash Comics #1 (cover date January 1940/release month November 1939).Nicknamed the "Scarlet Speedster", all incarnations of the Flash possess "super speed", which includes the ability to run, move, and think extremely fast, use superhuman reflexes, and seemingly violate certain laws of physics.

Thus far, at least four different characters—each of whom somehow gained the power of "the speed force"—have assumed the mantle of the Flash in DC's history: college athlete Jay Garrick (1940–1951, 1961–2011, 2017–present), forensic scientist Barry Allen (1956–1985, 2008–present), Barry's nephew Wally West (1986–2011, 2016–present), and Barry's grandson Bart Allen (2006–2007). Each incarnation of the Flash has been a key member of at least one of DC's premier teams: the Justice Society of America, the Justice League, and the Teen Titans.</p>
            </div>
        </div>
    </div>);
}

export default Contacts;