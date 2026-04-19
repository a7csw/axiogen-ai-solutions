import { useTranslation } from "react-i18next";
import { Calendar, CalendarCheck, Clock, Phone, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Booking } from "@/hooks/useNovaCall";

type Props = {
  bookings: Booking[];
};

const BookingsPanel = ({ bookings }: Props) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-3">
        <CalendarCheck className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">{t("demo.novaDent.bookingsPanel.title")}</CardTitle>
        {bookings.length > 0 && (
          <Badge variant="secondary" className="ms-auto">
            {bookings.length}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        {bookings.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            {t("demo.novaDent.bookingsPanel.empty")}
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {bookings.map((booking) => (
              <li
                key={booking.id}
                className="rounded-xl border border-border bg-background p-4 hover-lift"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{booking.patientName}</p>
                  </div>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    {t("demo.novaDent.bookingsPanel.statusPending")}
                  </Badge>
                </div>
                <dl className="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("demo.novaDent.bookingCard.type")}:
                    </span>
                    <span className="font-medium capitalize text-foreground">
                      {booking.appointmentType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("demo.novaDent.bookingCard.phone")}:
                    </span>
                    <span className="font-medium text-foreground">{booking.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("demo.novaDent.bookingCard.date")}:
                    </span>
                    <span className="font-medium text-foreground">{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("demo.novaDent.bookingCard.time")}:
                    </span>
                    <span className="font-medium text-foreground">{booking.time}</span>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingsPanel;
