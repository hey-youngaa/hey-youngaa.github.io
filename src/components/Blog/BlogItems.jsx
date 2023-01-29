import card1 from '../../media/card1.JPG'
import card2 from '../../media/card2.JPG'
import card3 from '../../media/card3.JPG'
import idea from '../../media/idea.png'
import Process from '../../media/Process.png'
import result from '../../media/result.png'

export const BlogItems = [
    {
        id: 1,
        title: 'The Idea',
        desc: 'Researching and setting up a plan',
        cover: card1,
        image: idea,
        text1: `
        I’ve designed and edited several photo compositions many times as a hobby of mine. But designing a website was a first. First, I researched examples of  UX designer portfolio websites, while asking myself, what components did I like, what did I not like? What were some features that seemed interactive and kept me interested to look around? These were important factors to consider for a basic effective website. `,
        
        text2:`At first I was optimistic and kept wanting to include many components to make the website look ‘cool’. But that would be overwhelming for my first project. So simple is the way to go. 
        There were a couple of minimal design websites that I liked, and so I first organized the look on figma to visually see how the website would appear. Then came the fine details of the color palette and choice of fonts. `,
        
        text3:`To me, I find color to be important, it can make or break first impressions if not pleasing to the eye. I knew I didn’t want the site to be simply white and black. Playing with colors is fun and I wanted to display a colorful but toned down palette to look calm and friendly. `,

        
    },
    {
        id: 2,
        title: 'The Process',
        desc: 'The excitement and struggles',
        cover: card2,
        image: Process,
        text1: `Components such as the navigation bar and footer were easy to create by following youtube tutorials. 
        The page I actually struggled with was the gallery. Originally, I wanted to format it after a template I found on Cargo, where the rows of images were not only responsive but so were the sizes of the images. I struggled with the symmetry and seamless transitions, and made the decision to change formats. Went with the decision to utilize a masonry component that would make the code simpler and cleaner as it eliminates the need to create media queries to adjust items to screen sizes. `,
        
        text2:` Another component that I first envisioned but scraped in the end was a slider image gallery. Once it was complete, it didn’t look cohesive with the gallery on top and so decided to remove it from the page. 
        A lot of fine tuning was done to make sure site looked good when viewed on mobile. `,
    },
    {
        id: 3,
        title: 'The Result',
        desc: 'Final and future thoughts',
        cover: card3,
        image: result,
        text1:`Once published, I felt incredibly satisfied with the final result. I learned new design elements, CSS animations, basic code, and it was a progressive journey with my own code writing. As I put more thought into how the elements were organized and how the code was written to be the most efficient but also the simplest it can be. 
        It also left me feeling more confident with my own skills and in a way proved to myself that I am capable of learning an entirely new field and that I really do enjoy designing. 
        `,

        text2:``,
    }
]