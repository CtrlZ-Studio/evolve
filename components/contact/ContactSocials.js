import SocialItem from 'components/contact/SocialItem';

const ContactSocials = () => {
  return (
    <section className="w-full lg:w-2/5 lg:h-screen flex flex-col space-y-6 lg:space-y-12 2xl:space-y-14 justify-center">
      <SocialItem
        label="email."
        link="mailto:lokismind@gmail.com"
        name="evolvesportmaterial@gmail.com"
      />

      <SocialItem label="teléfono." link="tel:+34687465810" name="687465810" />

      <SocialItem
        label="instagram."
        link="https://www.instagram.com/evolve_material_deportivo/"
        name="@evolve_material_deportivo"
      />
    </section>
  );
};

export default ContactSocials;
