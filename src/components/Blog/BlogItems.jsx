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
        text1: `The first thing that pops up when you search "UX/UI project ideas for beginners", is a blog.
        So that's what I planned to do, create my very own blog. But as you can see from browsing though the site,
        it ended up looking more of a personal website.`,

        text2:`At first, I was brainstorming so many components to make the site look as cool and complex as possible.
        A responsive multi-row gallery, endless blog posts to reflect my coding progress, fancy design elements and so forth.
        However, that was above my current skill level, so I kept the design and features simple. I took inspiration from portfolio
        examples on Wix, Cargo and Google seraches to understand what made a minimal design good and how could I bring it to life with 
        code.`
    },
    {
        id: 2,
        title: 'The Process',
        desc: 'The excitement and struggles',
        cover: card2,
        image: Process,
        text1: `Only knowing the JavaScript basics, I spent a tremendous amount of time searching and following along
        YouTube tutorials. The  navigation bar and footer components were relatively straight forward to understand and create. 
        The pages, on the other hand, took more thought and efffort on how the code was to be written and organized.
        Where I struggled the most was organizing the posts' details to follow the same structure without
        repeating code. The idea was there, but how was it to be executed?   
        `,
        
        text2:`The solution? Break it into even smaller parts, to create reusable components. The second dilemma I struggled
        with was the gallery page, as it wasn't what I originally envioned. Inspired from a Cargo template, I wanted the gallery
        to be made of multiple rows that would be responsive at the same time. But again, it was difficult to code and hence I found 
        the solution of using a component that React provided.`,

        text3: `I learned that it's ok to not code everything from scartch. That's the beauty with code, hundreds of people out
        there have created code components that can be used by anyone to make coding a little easier.`
    },
    {
        id: 3,
        title: 'The Result',
        desc: 'Final and future thoughts',
        cover: card3,
        image: result,
        text1:`It was an incredibly rewarding feeling to complete this project. I learned alot
        throughout the entire process and gained confidence in my newly obtained skills. There's still much 
        to learn but completing one project gave me the affirmation that I am capable of learning an entirely different
        field and that I do enjoy designing.`
    }
]