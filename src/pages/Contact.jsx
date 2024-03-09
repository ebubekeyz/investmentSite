import Wrapper from '../assets/wrappers/Contact';
import Hero2 from '../components/Hero2';

import img from '../assets/faqs.jpg';
import { nanoid } from 'nanoid';

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <Hero2
          name=""
          title="Contact Us"
          id={nanoid()}
          quote="Support@Fxidealtrade.Co"
          image={img}
        />

        <aside
          style={{
            margin: '0 auto',
            width: '90vw',
            maxWidth: '1170px',
            marginTop: '4rem',
          }}
        >
          <article>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--primary-600)',
              }}
            >
              Let’s talk about your investment and how we can make it happen.
            </h2>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              Let’s talk about your investment and how we can make it happen.
            </p>
          </article>

          <form
            style={{
              background: 'white',
              boxShadow: 'var(--shadow-4)',
              padding: '3rem 2rem',
              marginBottom: '4rem',
            }}
          >
            <h1
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'var(--primary-400)',
                marginBottom: '2rem',
              }}
            >
              Need assistance? please fill the form
            </h1>

            <input
              type="text"
              className="form-input"
              placeholder="Name"
              name="name"
            />

            <input
              type="text"
              className="form-input"
              placeholder="Email Address"
              name="email"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Enquiry Type"
              name="enquiryType"
            />
            <textarea
              type="text"
              className="form-input"
              placeholder="Enquiry Description"
              name="enquiryDescription"
              style={{ height: '10rem', marginBottom: '1rem' }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '10% 90%',
                alignItems: 'center',
                gap: '1px',
              }}
            >
              <input type="checkbox" name="agree" value="false" />
              <span style={{ color: 'var(--grey-400)' }}>
                I agree to talk about my investment with fxrealtrade.co
              </span>
            </div>

            <button
              type="submit"
              className="btn contact-btn"
              style={{
                background: 'var(--primary-500)',
                borderRadius: '2rem',
                color: 'white',
                width: '10rem',
                margin: '0 auto',
                fontWeight: '700',
                padding: '1rem 1rem',
                marginTop: '2rem',
              }}
            >
              send Message
            </button>
          </form>
        </aside>
      </div>
    </Wrapper>
  );
};
export default Contact;
