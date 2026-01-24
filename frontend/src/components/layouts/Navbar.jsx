import React from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = ({ activeMenu }) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background">
      <div className="flex items-center gap-4 px-6 py-4">
        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-64">
            <Sidebar activeMenu={activeMenu} />
          </SheetContent>
        </Sheet>

        <h2 className="text-lg font-semibold">Expense Tracker</h2>
      </div>
    </header>
  );
};

export default Navbar;
