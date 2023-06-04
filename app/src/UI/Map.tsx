
const Map = ({ className }: { className?: string }) => {
  return (
    <div id="map" className={className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.4343338598902!2d-73.55676604130609!3d45.50437754696197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a575897713d%3A0x1ffcef9f1d0d96aa!2sBasilique%20Notre-Dame%20de%20Montr%C3%A9al!5e0!3m2!1sfr!2sca!4v1685848610725!5m2!1sfr!2sca"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map;
