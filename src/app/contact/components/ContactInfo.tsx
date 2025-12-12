import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  contactInfo, 
  // socialIcons 
} from "./contactData";

export default function ContactInfo() {
  return (
    <div className="flex-1 min-w-0 space-y-10 relative z-0 select-text">
      <Card className="bg-black/50 backdrop-blur-sm border-white/20 relative z-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 font-bold">
            {contactInfo.map((item) => (
              <div key={item.title}>
                <div
                  className="flex items-start gap-4 px-4 py-3 select-text"
                >
                  <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/30 flex items-center justify-center border-2 border-secondary">
                    <item.icon className="text-xl gradient-text" />
                  </span>
                  <div className="leading-snug flex-1 min-w-0">
                    <p className="font-semibold text-white text-base select-text">
                      {item.title}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={`text-white text-base hover:underline select-text ${item.title === "Email" ? "break-all" : "wrap-break-word"}`}
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className={`text-white text-base select-text ${item.title === "Email" ? "break-all" : "wrap-break-word"}`}>
                      {item.detail}
                    </p>
                    )}
                    {item.detail2 && (
                      <p className="text-white text-base wrap-break-word select-text">
                        {item.detail2}
                      </p>
                    )}
                    {item.detail3 && (
                      <p className="text-white text-base wrap-break-word select-text">
                        {item.detail3}
                      </p>
                    )}
                  </div>
                </div>
                {item.title === "Address" && (
                  <div className="px-4 pb-3 mt-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277.32804973049855!2d121.05169681676608!3d14.547769512742596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8edec27e7c1%3A0xb605e47597d14224!2sHigh%20Street%20South%20Corporate%20Plaza%20Tower%2C%202%2026th%20St%2C%20Taguig%2C%20Makati%20City%2C%201631%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1765512708682!5m2!1sen!2sph"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full rounded-xl"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
