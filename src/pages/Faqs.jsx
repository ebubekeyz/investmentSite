import Wrapper from '../assets/wrappers/Footer';
import { questions } from '../utils';
import SingleFaqs from '../components/SingleFaqs';
import { useOutletContext } from 'react-router-dom';
import FaqsCard from '../components/FaqsCard';
import Hero2 from '../components/Hero2';
import { nanoid } from 'nanoid';
import img from '../assets/faqs.jpg';

const Faqs = () => {
  const questions = useOutletContext();

  return (
    <div>
      <Hero2
        name=""
        title="Commonly Asked Questions"
        id={nanoid()}
        quote="Should you have an inquiry not addressed here, feel free to reach out to us."
        image={img}
      />
      <FaqsCard questions={questions} />
    </div>
  );
};
export default Faqs;
