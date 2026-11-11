import { Reveal } from "./Reveal";
import { LogoMark } from "./Logo";
import {
  IconChart,
  IconClipboard,
  IconClock,
  IconListing,
  IconPortfolio,
  IconRevenue,
} from "./icons";

const NAV_ITEMS = [
  { label: "Overview", icon: IconChart, active: true },
  { label: "Properties", icon: IconPortfolio, active: false },
  { label: "Bookings", icon: IconClock, active: false },
  { label: "Revenue", icon: IconRevenue, active: false },
  { label: "Operations", icon: IconClipboard, active: false },
  { label: "Listings", icon: IconListing, active: false },
];

const KPIS = [
  { label: "Portfolio revenue", value: "€42,850", meta: "+8.4% vs prior 30 days" },
  { label: "Occupancy", value: "82%", meta: "+3.1 pts" },
  { label: "Average daily rate", value: "€145", meta: "+€6.00" },
  { label: "RevPAR", value: "€119", meta: "+€5.60" },
];

const PROPERTIES = [
  { name: "Harbour View · Cork", value: "€7,240", bar: 92, gold: true },
  { name: "The Quarter House · Dublin", value: "€6,480", bar: 84, gold: false },
  { name: "Lakeside Lodge · Limerick", value: "€5,910", bar: 76, gold: false },
  { name: "Mews House · Cork", value: "€4,320", bar: 61, gold: false },
];

const BOOKINGS = [
  { name: "Reservation MT-2481", detail: "Harbour View · 14–18 Nov", nights: "4 nights" },
  { name: "Reservation MT-2482", detail: "Quarter House · 15–19 Nov", nights: "4 nights" },
  { name: "Reservation MT-2485", detail: "Lakeside Lodge · 17–21 Nov", nights: "4 nights" },
  { name: "Reservation MT-2488", detail: "Mews House · 21–24 Nov", nights: "3 nights" },
];

const ALERTS = [
  {
    tone: "gold",
    text: "Turnover clean scheduled · Harbour View",
    meta: "Tomorrow · 11:00",
  },
  {
    tone: "gold",
    text: "Boiler service due · Mews House",
    meta: "18 Nov · Supplier confirmed",
  },
  {
    tone: "ok",
    text: "Quality inspections complete · 6 properties",
    meta: "This week",
  },
  {
    tone: "soft",
    text: "Guest issue escalated and resolved · Lakeside Lodge",
    meta: "Response time 2h · Human handled",
  },
  {
    tone: "soft",
    text: "Maintenance status · 1 open job, 2 scheduled",
    meta: "Updated 4 minutes ago",
  },
];

export function Dashboard() {
  return (
    <section className="section bg-charcoal on-dark" id="dashboard">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">Owner dashboard</span>
            <h2 className="h2">Your Entire Portfolio. One Clear View.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lede">
              Stay informed without getting involved in every operational detail.
              Access clear performance insights and portfolio updates whenever you
              need them.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="dash">
            <div className="dash__chrome">
              <div className="dash__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span className="dash__url">app.monten.top / portfolio</span>
            </div>

            <div className="dash__body">
              <aside className="dash__side" aria-hidden="true">
                <div className="dash__brand">
                  <LogoMark size={16} />
                  Monten Top
                </div>
                <nav className="dash__nav">
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <span
                        key={item.label}
                        className={
                          item.active
                            ? "dash__nav-item dash__nav-item--active"
                            : "dash__nav-item"
                        }
                      >
                        <Icon />
                        {item.label}
                      </span>
                    );
                  })}
                </nav>
                <div className="dash__side-foot">
                  <span className="dash__live" />
                  18 properties managed
                </div>
              </aside>

              <div className="dash__main">
                <div className="dash__head">
                  <div>
                    <h3>Portfolio overview</h3>
                    <p>1–31 October · Cork, Dublin &amp; Limerick</p>
                  </div>
                  <span className="dash__demo">Illustrative demo data</span>
                </div>

                <div className="kpis">
                  {KPIS.map((kpi) => (
                    <div className="kpi" key={kpi.label}>
                      <span className="kpi__label">{kpi.label}</span>
                      <span className="kpi__value num">{kpi.value}</span>
                      <span className="kpi__meta">{kpi.meta}</span>
                    </div>
                  ))}
                </div>

                <div className="dash__split">
                  <div className="panel">
                    <div className="panel__head">
                      <span className="panel__title">Revenue trend</span>
                      <span className="panel__sub">Last 30 days</span>
                    </div>
                    <div className="chart">
                      <svg
                        viewBox="0 0 320 92"
                        role="img"
                        aria-label="Line chart showing illustrative portfolio revenue trending upward over the last 30 days"
                      >
                        <defs>
                          <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C5A46D" stopOpacity="0.34" />
                            <stop offset="100%" stopColor="#C5A46D" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {[16, 40, 64].map((y) => (
                          <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="320"
                            y2={y}
                            stroke="rgba(244,243,238,0.08)"
                            strokeWidth="1"
                          />
                        ))}
                        <path
                          d="M0 74 L36 66 L72 69 L108 52 L144 57 L180 41 L216 45 L252 27 L288 31 L320 17 L320 92 L0 92 Z"
                          fill="url(#revenueFill)"
                        />
                        <path
                          d="M0 74 L36 66 L72 69 L108 52 L144 57 L180 41 L216 45 L252 27 L288 31 L320 17"
                          fill="none"
                          stroke="#C5A46D"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <circle cx="320" cy="17" r="3" fill="#C5A46D" />
                        <circle cx="320" cy="17" r="6" fill="#C5A46D" opacity="0.18" />
                      </svg>
                      <div className="chart__labels">
                        <span>1 Oct</span>
                        <span>8 Oct</span>
                        <span>15 Oct</span>
                        <span>22 Oct</span>
                        <span>29 Oct</span>
                      </div>
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel__head">
                      <span className="panel__title">Property performance</span>
                      <span className="panel__sub">Top 4</span>
                    </div>
                    <div className="perf-list">
                      {PROPERTIES.map((property) => (
                        <div className="perf-row" key={property.name}>
                          <span className="perf-row__name">{property.name}</span>
                          <span className="perf-row__value num">{property.value}</span>
                          <span className="perf-row__bar">
                            <i
                              className={property.gold ? "is-gold" : undefined}
                              style={{ width: `${property.bar}%` }}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="dash__bottom">
                  <div className="panel">
                    <div className="panel__head">
                      <span className="panel__title">Upcoming bookings</span>
                      <span className="panel__sub">Next 7 days</span>
                    </div>
                    <div className="bookings">
                      {BOOKINGS.map((booking) => (
                        <div className="booking" key={booking.name}>
                          <span className="booking__name">{booking.name}</span>
                          <span className="booking__nights">{booking.nights}</span>
                          <span className="booking__date">{booking.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel__head">
                      <span className="panel__title">Operational alerts</span>
                      <span className="panel__sub">Live</span>
                    </div>
                    <div className="alerts">
                      {ALERTS.map((alert) => (
                        <div
                          className={
                            alert.tone === "gold"
                              ? "alert"
                              : `alert alert--${alert.tone}`
                          }
                          key={alert.text}
                        >
                          <i aria-hidden="true" />
                          <span className="alert__text">
                            {alert.text}
                            <span className="alert__meta">{alert.meta}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dash__caption">
            <span>Illustrative demo figures for presentation purposes</span>
            <span>Not actual customer results or a performance forecast</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
