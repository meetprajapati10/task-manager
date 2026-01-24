import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { SIDE_MENU_DATA, SIDE_MENU_USER_DATA } from "@/utils/data";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Sidebar = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const [menuData, setMenuData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setMenuData(user.role === "admin" ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA);
    }
  }, [user]);

  const handleClick = (path) => {
    if (path === "logout") {
      localStorage.clear();
      clearUser();
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <aside className="h-[calc(100vh-64px)] w-64 border-r bg-background sticky top-0 lg:top-16">
      {/* User Info */}
      <div className="flex flex-col items-center px-4 py-6">
        <Avatar className="h-20 w-20">
          <AvatarImage
            src={user?.profileImageUrl || ""}
            className="object-cover"
          />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>

        {user?.role === "admin" && (
          <Badge className="mt-2 rounded">Admin</Badge>
        )}

        <h5 className="mt-3 font-semibold">{user?.name}</h5>
        <p className="text-xs text-muted-foreground">{user?.email}</p>
      </div>

      <Separator />

      {/* Menu */}
      <nav className="px-2 py-4 space-y-1">
        {menuData.map((item, index) => {
          const isActive = activeMenu === item.label;

          return (
            <Button
              key={index}
              variant={isActive ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 ${
                isActive ? "border-r-4 border-primary text-primary" : ""
              }`}
              onClick={() => handleClick(item.path)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
