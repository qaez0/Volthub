import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { contactInfo, socialIcons } from "./contactData";

export default function ContactInfo() {
  return (
    <div className="flex-1 min-w-0 space-y-10 relative z-0">
      <Card className="bg-black/50 backdrop-blur-sm border-white/20 relative z-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 font-bold">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 px-4 py-3"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/30 flex items-center justify-center border-2 border-secondary">
                  <item.icon className="text-xl gradient-text" />
                </span>
                <div className="leading-snug flex-1 min-w-0">
                  <p className="font-semibold text-white text-base">
                    {item.title}
                  </p>
                  <p className={`text-white text-base ${item.title === "Email" ? "break-all" : "wrap-break-word"}`}>
                    {item.detail}
                  </p>
                  {item.detail2 && (
                    <p className="text-white text-base wrap-break-word">
                      {item.detail2}
                    </p>
                  )}
                  {item.detail3 && (
                    <p className="text-white text-base wrap-break-word">
                      {item.detail3}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-4">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
        <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
        <p className="text-blue-100 text-sm">
          Our technical support team is available around the clock to
          assist with any questions or system issues.
        </p>
      </div>
    </div>
  );
}
