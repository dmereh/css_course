export default function Hero() {
  return (
    <div className="hero">
      <main className="hero-main" aria-labelledby="intro">
        <h1 id="intro" className="h1">
          My Journey into Tech
        </h1>
        <p className="journey-text">
{`When I look back on the challenges I’ve faced in my adult life, this one has been the most exciting and equally the most terrifying! 

After spending more than ten years working in HR across various NHS trusts, I had become comfortable, too comfortable. 
For someone who thrives on change and growth, that comfort eventually felt limiting. 
I realised I had learned and developed as much as I could in the roles I had been in, I found myself craving something new, something challenging. 
          
So, I did some honest self-reflection. I asked myself: If I were 16 again, what would I do differently? Would I choose a different path? Would I study something new? Would I take more risks? 
Almost every answer pointed me toward one direction: technology, a space that’s constantly evolving, demanding creativity, curiosity, and continuous learning. 
It felt like the perfect fit. And that’s how I ended up here, diving headfirst into the tech world. 
          
I joined FastTrack Technology’s 6-month intensive software development bootcamp, learning programming languages, building projects, and challenging myself daily. 
Balancing this with a full-time job meant many nights stretched into the early morning, but I hardly noticed. 
I was fully absorbed, genuinely excited to learn, and often surprised at how quickly time disappeared. 
The journey came with a lot of trial and error, moments of deep frustration followed by absolute joy when something finally clicked. Fixing a bug on my own felt like a victory every time. 
          
Tips & Tricks I Learned Early On 
          
• It’s all theory until you put it into practice. You only really understand code when you start using it. 
Concepts like data types, variables, and functions made far more sense once I tried applying them myself. 
          
Other examples that helped me: 
– Understanding how loops behave by actually breaking them (accidentally!)
– Learning conditionals by experimenting with different user inputs 
– Realising the purpose of debugging tools only after I had errors I couldn’t spot manually 

• Focus on one programming language at a time. 
Starting with something visual like HTML and CSS gave me a great foundation. They introduced me to structure, syntax, and the general rhythm of code. 
As I learned more languages, I began recognising patterns and understanding how different technologies fit together. 

• Use the web! it’s your best friend. 
There are countless online resources that supported me throughout my journey (some of which I’ve listed below). Forums, video tutorials, documentation, and coding communities became essential parts of my learning process. 
          
Despite finishing the bootcamp in just four months, confidence was still my biggest challenge. I often feared making mistakes or “breaking” my code. 
That fear held me back more than any bug ever could. 
And that’s exactly why I’m creating this project today: to prove to myself that I can build something from scratch. Albeit with the support of AI at times but support doesn’t diminish capability. It enhances it. 
This portfolio is more than just a collection of work. It’s a reminder to believe in myself, to embrace the errors, and to keep pushing forward because every challenge is an opportunity to grow.`}
        </p>

        <br/>
        <br/>

         <div className="cta">
          <a className="btn" href="#projects">
            View projects
          </a>
          <a className="btn alt" href="#contact">
            Get in touch
          </a>
        </div>

        <section className="section" id="projects">
          <h3 style={{ marginTop: 18 }}>Selected projects</h3>
          <div className="projects-grid">
            <article className="project">
              <h4>Portfolio site - Share this page with others!</h4>
              <p className="p">
                Insert website URL
              </p>
            </article>
            <article className="project">
              <h4>Task Manager</h4>
              <p className="p">
                Small todo app demonstrating state management and local
                persistence.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="about">
          <h3>About</h3>
          <p className="p">
            I like to write testable code, learn UI/UX basics, and contribute to
            open source. Currently seeking junior software developer roles.
          </p>
        </section>
      </main>

      <aside className="sidebar-card" aria-label="Profile">
        <div className="profile-pic">profile image</div>
        <div style={{ marginTop: 12 }}>
          <strong>Skills</strong>
          <div style={{ marginTop: 8, color: "var(--muted)" }}>
            React · TypeScript · HTML · CSS · Git · TailwindCSS · JavaScript ·
            Linux · Python ·
          </div>
        </div>
      </aside>
    </div>
  );
}
