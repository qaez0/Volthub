interface LocationMapProps {
  className?: string;
}

export default function LocationMap({
  className = "",
}: LocationMapProps) {
  return (
    <div className={`w-full h-[400px] rounded-lg shadow-md overflow-hidden ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.36881101722355!2d121.05188277169493!3d14.547654973393401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c940ee8ad6cf%3A0x768c8d76fadf4ade!2sHigh%20Street%20South%20Corporate%20Plaza%20Tower%202%20-%20Parking!5e0!3m2!1sen!2sph!4v1764387801938!5m2!1sen!2sph"
        width="100%"
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
