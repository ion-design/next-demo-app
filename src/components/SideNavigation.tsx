// Generated with Ion on 10/30/2024, 5:22:06 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=forced_ion/SideNavigation/default_1:10135
"use client";
import {
  CaretRight,
  Gear,
  Handshake,
  House,
  Money,
  ShoppingCart,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { type MouseEvent } from "react";

import Avatar from "./Avatar";
import Button from "./Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./Navigation";

import Sidebar from "./Sidebar";

function SideNavigation() {
  function contactClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("contactClickHandler fired");
  }

  return (
    <Sidebar>
      <div className="bg-white flex-1 h-full w-[244px] flex flex-col justify-between">
        <NavigationMenu>
          <NavigationMenuList className="w-full flex flex-col gap-1 py-4">
            <div className="text-base font-semibold text-[#384355] px-3 pt-4">
              Main
            </div>
            {[
              {
                children: "Dashboard",
                iconLeading: <House size={14} weight={"fill"} />,
              },
              {
                children: "Buy",
                iconLeading: <ShoppingCart size={14} weight={"fill"} />,
              },
              {
                children: "Sell",
                iconLeading: <Money size={14} weight={"fill"} />,
              },
              {
                children: "Swap",
                iconLeading: <Handshake size={14} weight={"fill"} />,
              },
            ].map(({ children, iconLeading }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="w-full"
                  iconLeading={iconLeading}
                  iconTrailing={<CaretRight size={16} weight={"bold"} />}
                >
                  {children}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div className="text-base font-semibold text-[#384355] px-3 pt-4">
              Main
            </div>
            <NavigationMenuItem>
              <NavigationMenuLink
                iconTrailing={<CaretRight size={16} weight={"bold"} />}
                iconLeading={<Gear size={14} weight={"fill"} />}
                className="w-full"
              >
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                iconTrailing={<CaretRight size={16} weight={"bold"} />}
                iconLeading={<User size={14} weight={"fill"} />}
                className="w-full"
              >
                Profiles
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="w-full flex flex-col gap-3 p-5">
          <Button
            variant="soft"
            color="neutral"
            size="sm"
            onClick={contactClickHandler}
            className="w-full"
          >
            Contact
          </Button>
          <Avatar
            subtitle="Gold Member"
            title="Samraaj"
            size="lg"
            src="https://ion-dot-design.s3.us-west-1.amazonaws.com/public/images/dashboard-example/samraaj.png"
          />
        </div>
      </div>
    </Sidebar>
  );
}
export default SideNavigation;
