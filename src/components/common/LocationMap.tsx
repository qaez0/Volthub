interface LocationMapProps {
  className?: string;
}

export default function LocationMap({
  className = "",
}: LocationMapProps) {
  return (
    <div className={`w-full h-[400px] rounded-lg shadow-md overflow-hidden ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277.32804973049855!2d121.05169681676608!3d14.547769512742596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8edec27e7c1%3A0xb605e47597d14224!2sHigh%20Street%20South%20Corporate%20Plaza%20Tower%2C%202%2026th%20St%2C%20Taguig%2C%20Makati%20City%2C%201631%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1765512708682!5m2!1sen!2sph"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
}
