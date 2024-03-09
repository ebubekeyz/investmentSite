import img from '../assets/changpeng-zhao.jpg';
import Wrapper from '../assets/wrappers/Ceo';

function Ceo() {
  return (
    <Wrapper>
      <section class="about-section">
        <div class="about-center section-center">
          <div class="about-img">
            <img src={img} class="about-photo" alt="" />
          </div>

          <article class="about-text">
            <div class="section-title about-title">
              <h3>Changpeng Zhao</h3>
              <h3>CEO</h3>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
}
export default Ceo;
