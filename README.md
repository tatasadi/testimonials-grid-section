# Testimonials grid section

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Testimonials grid section](#testimonials-grid-section)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshots](#screenshots)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Some Code I'm proud of](#some-code-im-proud-of)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshots

![](./screenshot1.jpg)
![](./screenshot2.jpg)

### Links

- Solution URL: [https://github.com/tatasadi/testimonials-grid-section](https://github.com/tatasadi/testimonials-grid-section)
- Live Site URL: [https://testimonials-grid-section-ta.vercel.app](https://testimonials-grid-section-ta.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Remix](https://remix.run/) - React framework
- [Tailwindcss](https://tailwindcss.com) - For styles

### Some Code I'm proud of

I made a compound component for [testimonial card](https://github.com/tatasadi/testimonials-grid-section/blob/main/app/components/TestimonialCard.tsx), so I can use similar styles in the component. Here is how I used it:

```javascript
<TestimonialCard className="bg-moderate-violet sm:col-span-2">
  <TestimonialCard.Header title="Daniel Clifford" subtitle="Verified Graduate" className="text-white">
    <TestimonialCard.Icon
      src="/images/image-daniel.jpg"
      alt="Daniel Clifford"
      className="border-2 border-light-violet"
    />
  </TestimonialCard.Header>
  <TestimonialCard.Body>
    <TestimonialCard.Title className="mb-10 text-white">
      I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I
      joined. I honestly feel I got every penny’s worth.
    </TestimonialCard.Title>
    <TestimonialCard.Text className="text-light-gray">
      “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard
      some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun!
      I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since
      completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
    </TestimonialCard.Text>
  </TestimonialCard.Body>
</TestimonialCard>
```

I really enjoyed the real power of react and tailwind and combining them together like this.

## Author

- Website - [Ehsan Tatasadi](https://ehsan.tatasadi.com)
- Frontend Mentor - [@tatasadi](https://www.frontendmentor.io/profile/tatasadi)
- GitHub - [@tatasadi](https://github.com/tatasadi)
- Linkedin - [Ehsan Tatasadi](https://www.linkedin.com/in/ehsan-tatasadi-2161a433)
- Twitter - [@etatasadi](https://twitter.com/etatasadi)
