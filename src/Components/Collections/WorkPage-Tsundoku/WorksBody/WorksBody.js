import React from 'react'
import styles from './WorksBody.module.css'
import { useMediaQuery } from 'react-responsive'

import image1 from '../../../../assets/Images/Tsundoku/nextjs_visual.png'
import image2 from '../../../../assets/Images/Tsundoku/CMS_visual.png'
import image3 from '../../../../assets/Images/Tsundoku/sorting_code.png'
import image4 from '../../../../assets/Images/Tsundoku/typescript.png'

const WorksBody = () => {

const screenUnder847px = useMediaQuery({ query: '(max-width: 847px)'})

  return (
    <div className={styles.entireWorksBody}>
        <div className={styles.worksBodyContainer}>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                  Next.js JavaScript Framework
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                  Next.js is a React framework that is becoming a popular choice for JavaScript developers to build frontend-to-backend web applications. It comes with a collection of standard functionalities lacking in Core React, components that focus on accessability and SEO, server-side rendering (SSR), and conditional client-side rendering.
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                      <span>
                        <b>File Structure based:</b> Directories created in the app folder create endpoints for URLs. Inside created directories, a page.tsx(.js) file contains the component that renders a page for the new path.
                      </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                          <b>Dynamic Routing:</b> In Next.js, directory names surrounded by brackets can be used as route parameters, allowing for dynamic routing. 
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                          <b>Built-in features:</b> Next.js comes with handle routing solutions, data fetching, and HTML generation on the server-side which are lacking in core React and usually require 3rd party dependencies.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                          <b>Built in common components:</b> for SEO and accessibility like Image and Link help optimize metadata, handling aria-labeling, and preloading. 
                        </span>
                    </p>
                </div>
            </div>
            <div>
              <img src={image1} alt='Illustration of Next.js key features and benefits.' className={styles.worksBodyImage} style={{ border: '1px solid #E4E5DA'}}/>
              <div className={styles.worksBodyImageSubtext}>
                <p>
                    Next.js is a modern framework for JavaScript that can be used to build websites and applications.
                </p>
              </div>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                 Content Management Systems
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>
                      A Content Management System (CMS) is a software application that allows for the creation, editing, and management of digital content. It's typically used for websites, blogs, and other online platforms.
                    </span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                          <span>
                            <b>Traditional CMS:</b>  full-service, front-end to back-end systems that allow for someone to take pre-built components and adjust their placement, size, and style, then overlay them to build an aesthetic that they are looking for in the data presentation on their website.
                          </span>
                        </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                          <span>
                            <b>Headless CMS:</b> exclusively back-end systems that provide content storage and delivery. They do not include a pre-built front-end to render to the user. The data is fetched from an API and engineers working with the data write the structure, functions, classes, and styles to organize and present the data in a meaningful way.
                          </span>
                        </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                            <span>
                              <b>Sanity:</b> is a headless CMS in that it provides a service to upload data into a database that Sanity calls ‘The Content Lake.’ Data is pushed to the Lake from a studio that is created and customized by the developer. The published data can then be fetched from any application or website on any device anywhere using a query language called GROQ (or GraphQL), and then displayed with a structure and styles also defined by the developer.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
              <div>
                <img src={image2} alt='code showing more of the booking options functionality' className={styles.worksBodyImage}/>
                <div className={styles.worksBodyImageSubtext}>
                  <p>
                      Traditional CMS are usually limited in means to display content - but are easy to use. Headless CMS require much more setup, but have many more use cases.
                  </p>
                </div>
              </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Algorithms and Structure
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>
                      To facilitate the creation of diverse content, I developed the underlying structure for both the studio and article page to be able to accept and display varied amounts and layouts of content. I also considered the user’s reading experience by incorporating several quality of life features; one being  a comparison and sorting algorithm, which I designed to efficiently recommend relevant content based on the content being viewed.
                    </span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                          The structure of the article page was made to <b>conditionally render</b> every component based on whether or not a value was provided in the <b>fetched data</b>. This allowed for <b>extensive customization of the layout</b>  published content with the creator by allowing the publisher to choose the amount and order of text blocks, images, gifs, quotes, captions, in-page links, etc.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                          The studio was written with the same principle in mind; only when a block text or an image field is filled, the next set of available fields will become available to the content creator. This dramatically <b>reduces the on-screen input amount</b> to make for a <b>less ambiguous information input process</b>. The fields also have descriptions to inform the content creator of their use and importance, and some even have <b>validation rules</b> as website expects certain information to function correctly.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                         <b>Comparison and Sorting Algorithm:</b> I made a simple algorithm that organizes an array of fetched posts by a custom injected variable. A function matches the currently displayed post object's categories against the category values of the other post objects in the fetched array. It then sorts the objects based on the value of the custom variable, and maps the first 3 objects in the sorted array in the ‘Related Posts’ section.
                        </span>
                    </p>
                </div>
            </div>
            <div>
              <img src={image3} alt='display of the websites screens' className={styles.worksBodyImage}/>
              <div className={styles.worksBodyImageSubtext}>
                <p>
                  Map the relatedPosts, determine the value of the custom variable, inject it into each post object, sort the relatedPosts by value of the variable, slice the new array called sortedRelatedPosts.
                </p>
              </div>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Up-skilling with TypeScript
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>
                      JavaScript is generally a dynamically-typed scripting language; meaning the data types assigned to each variable are checked only at runtime. This can lead to errors when functions expect an input of a certain data type but receive another. It can especially complicate maintaining and scaling a large code-base, and these were big issues that TypeScript solved.
                    </span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                        TypeScript's emphasis on type safety enhances code maintainability, scalability, testability, and comprehension relative to JavaScript. Its compatibility with IDEs also improves code completion functionality over JavaScript.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                          The studio was written with the same principle in mind; only when a block text or an image field is filled, the next set of available fields will become available to the content creator. This dramatically <b>reduces the on-screen input amount</b> to make for a <b>less ambiguous information input process</b>. The fields also have descriptions to inform the content creator of their use and importance, and some even have <b>validation rules</b> as website expects certain information to function correctly.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                         <b>Comparison and Sorting Algorithm:</b> I made a simple algorithm that organizes an array of fetched posts by a custom injected variable. A function matches the currently displayed post object's categories against the category values of the other post objects in the fetched array. It then sorts the objects based on the value of the custom variable, and maps the first 3 objects in the sorted array in the ‘Related Posts’ section.
                        </span>
                    </p>
                </div>
            </div>
            <div>
              <img src={image4} alt='display of the Figma screens used to create the design of the website' className={styles.worksBodyImage}/>
              <div className={styles.worksBodyImageSubtext}>
                <p>
                    TypeScript is a superset of JavaScript.
                </p>
              </div>
            </div>
            <div className={styles.outroContainer}>
              <p>
                <span>All of this text was paraphrased from an article that I wrote on Tsundoku about these topics. If you're interested, you can read more about them if you <a href="https://www.tsundoku.blog/posts/from-curious-to-coding-building-a-blog-with-next-js-sanity-typescript-and-tailwind">click here</a>!</span>
              </p>
            </div>
        </div>
    </div>
  )
}

export default WorksBody