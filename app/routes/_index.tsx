import type { MetaFunction } from '@remix-run/node'
import TestimonialCard from '~/components/TestimonialCard'

export const meta: MetaFunction = () => {
  return [{ title: 'Testimonials grid section' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="grid grid-cols-1 gap-6 px-6 py-[4.5rem]">
      <TestimonialCard className="bg-moderate-violet">
        <TestimonialCard.Header title="Daniel Clifford" subtitle="Verified Graduate" className="text-white">
          <TestimonialCard.Icon
            src="/images/image-daniel.jpg"
            alt="Daniel Clifford"
            className="border-light-violet border-2"
          />
        </TestimonialCard.Header>
        <TestimonialCard.Body>
          <TestimonialCard.Title className="mb-10 text-white">
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I
            joined. I honestly feel I got every penny’s worth.
          </TestimonialCard.Title>
          <TestimonialCard.Text className="text-light-gray">
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have
            heard some people who had an amazing experience here. I signed up for the free intro course and found it
            incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of
            my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at
            a VR startup. ”
          </TestimonialCard.Text>
        </TestimonialCard.Body>
      </TestimonialCard>

      <TestimonialCard className="bg-very-dark-grayish-blue">
        <TestimonialCard.Header title="Jonathan Walters" subtitle="Verified Graduate" className="text-white">
          <TestimonialCard.Icon src="/images/image-jonathan.jpg" alt="Jonathan Walters" />
        </TestimonialCard.Header>
        <TestimonialCard.Body>
          <TestimonialCard.Title className="mb-4 text-white">
            The team was very supportive and kept me motivated
          </TestimonialCard.Title>
          <TestimonialCard.Text className="text-light-gray">
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big
            company. This was one of the best investments I’ve made in myself. “
          </TestimonialCard.Text>
        </TestimonialCard.Body>
      </TestimonialCard>

      <TestimonialCard className="bg-white text-very-dark-grayish-blue">
        <TestimonialCard.Header title="Jeanette Harmon" subtitle="Verified Graduate">
          <TestimonialCard.Icon src="/images/image-jeanette.jpg" alt="Jeanette Harmon" />
        </TestimonialCard.Header>
        <TestimonialCard.Body>
          <TestimonialCard.Title className="mb-4">An overall wonderful and rewarding experience</TestimonialCard.Title>
          <TestimonialCard.Text>
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while
            doing something I love. ”
          </TestimonialCard.Text>
        </TestimonialCard.Body>
      </TestimonialCard>

      <TestimonialCard className="bg-very-dark-blackish-blue">
        <TestimonialCard.Header title="Patrick Abrams" subtitle="Verified Graduate" className="text-white">
          <TestimonialCard.Icon
            src="/images/image-patrick.jpg"
            alt="Patrick Abrams"
            className="border-2 border-moderate-violet"
          />
        </TestimonialCard.Header>
        <TestimonialCard.Body>
          <TestimonialCard.Title className="mb-4 text-light-grayish-blue">
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning
            from their experiences was easy.
          </TestimonialCard.Title>
          <TestimonialCard.Text className="text-white">
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me
            the confidence necessary to be able to go out in the world and present myself as a capable junior developer.
            The standard is above the rest. You will get the personal attention you need from an incredible community of
            smart and amazing people. ”
          </TestimonialCard.Text>
        </TestimonialCard.Body>
      </TestimonialCard>

      <TestimonialCard className="bg-white text-very-dark-grayish-blue">
        <TestimonialCard.Header title="Kira Whittle" subtitle="Verified Graduate">
          <TestimonialCard.Icon src="/images/image-kira.jpg" alt="Kira Whittle" />
        </TestimonialCard.Header>
        <TestimonialCard.Body>
          <TestimonialCard.Title className="mb-4">
            Such a life-changing experience. Highly recommended!
          </TestimonialCard.Title>
          <TestimonialCard.Text>
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals
            who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who
            can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was
            outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve
            often referred to it during interviews as an example of my developent experience. It certainly helped me
            land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
          </TestimonialCard.Text>
        </TestimonialCard.Body>
      </TestimonialCard>
    </main>
  )
}
