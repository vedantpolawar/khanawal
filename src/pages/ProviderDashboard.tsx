import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/common/StatsCard";
import {
  LayoutDashboard,
  Utensils,
  Users,
  QrCode,
  Wallet,
  Menu,
  X,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

const stats = [
  { icon: <Users className="w-5 h-5" />, value: 156, label: "Active Subscribers", trend: { value: 12, isPositive: true } },
  { icon: <QrCode className="w-5 h-5" />, value: 89, label: "Today's Scans", trend: { value: 5, isPositive: true } },
  { icon: <Wallet className="w-5 h-5" />, value: "₹45,000", label: "This Month", trend: { value: 8, isPositive: true } },
  { icon: <TrendingUp className="w-5 h-5" />, value: "4.5", label: "Avg Rating" },
];

const recentScans = [
  { name: "Rahul Sharma", time: "2 mins ago", status: "valid" },
  { name: "Priya Patel", time: "15 mins ago", status: "valid" },
  { name: "Amit Kumar", time: "1 hour ago", status: "valid" },
];

export default function ProviderDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold">M</span>
            </div>
            <span className="font-bold text-foreground">MealPass</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Utensils, label: "Menu Management" },
            { icon: Users, label: "Subscribers" },
            { icon: QrCode, label: "Scan QR" },
            { icon: Wallet, label: "Earnings" },
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-0">
        <header className="sticky top-0 bg-card/80 backdrop-blur-lg border-b border-border p-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Sharma's Kitchen</p>
          </div>
        </header>

        <div className="p-4 md:p-6 space-y-6">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatsCard key={i} {...stat} />
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card variant="elevated">
              <CardContent className="p-6">
                <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recent Scans
                </h2>
                <div className="space-y-3">
                  {recentScans.map((scan, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {scan.name[0]}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{scan.name}</p>
                          <p className="text-xs text-muted-foreground">{scan.time}</p>
                        </div>
                      </div>
                      <Badge variant="success">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Valid
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <h2 className="font-bold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="soft" className="h-auto py-4 flex-col gap-2">
                    <QrCode className="w-6 h-6" />
                    <span>Scan QR</span>
                  </Button>
                  <Button variant="soft" className="h-auto py-4 flex-col gap-2">
                    <Utensils className="w-6 h-6" />
                    <span>Update Menu</span>
                  </Button>
                  <Button variant="soft" className="h-auto py-4 flex-col gap-2">
                    <Users className="w-6 h-6" />
                    <span>View Subscribers</span>
                  </Button>
                  <Button variant="soft" className="h-auto py-4 flex-col gap-2">
                    <Wallet className="w-6 h-6" />
                    <span>Earnings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
