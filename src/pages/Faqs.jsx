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
        title="Frequently Asked questions"
        id={nanoid()}
        quote="If you have a question that is not answered here, please contact us"
        image={img}
      />
      <FaqsCard questions={questions} />
    </div>
  );
};
export default Faqs;
